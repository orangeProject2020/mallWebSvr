(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{347:function(t,e,r){"use strict";r.r(e);r(80),r(38),r(64),r(27),r(17),r(63),r(28),r(83);var n=r(47),o=r(195),c=r(196),d=r(325);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={head:function(){return{title:"确认订单"}},data:function(){return{total:0,business_id:[],itemsChecked:[],submitLoading:!1,address:{id:0}}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},c.a,{navBack:function(){this.$store.state.isApp?uni.navigateBack():this.$router.go(-1)},navHome:function(){this.$store.state.isApp?uni.switchTab({url:"/pages/mall/index"}):this.$router.replace("/list")},goToAddress:function(){this.$router.push("/address/list?jump=1")},onSubmit:function(){var t,e,r,n,c,d,l;return regeneratorRuntime.async((function(h){for(;;)switch(h.prev=h.next){case 0:if(this.submitLoading=!0,this.address.id){h.next=5;break}return this.$toast.fail("请选择收货地址"),this.submitLoading=!1,h.abrupt("return");case 5:return t=[],e=this.businessData,Object.keys(e).forEach((function(r){var n=e[r],o=[];n.forEach((function(t){o.push({goods_id:t.id,num:t.num})})),t.push({business_id:r,goods_items:o,score:0,remark:""})})),r={orders:t,address:this.address},console.log("/onSubmit data",r),h.prev=10,h.next=13,regeneratorRuntime.awrap(o.a.createOrder(r));case 13:n=h.sent,console.log("/onSubmit createOrderRet:",JSON.stringify(n,null,2)),0===n.code?(c=n.data.orders||[],d=[],c.length&&(c.forEach((function(t){d.push(t.id)})),this.submitSuccess(),this.$router.replace("/payment?orderIds="+d.join(",")))):-100==(l=n.code)||-101==l?this.$store.state.isApp?uni.navigateTo({url:"/pages/auth/login?form=h5"}):this.$toast.fail("用户授权信息出现错误"):(console.log("/onSubmit fail message:",n.message),this.$toast.fail("提交订单出现错误(".concat(n.message,")!"))),h.next=22;break;case 18:h.prev=18,h.t0=h.catch(10),console.log("/onSubmit err",h.t0),this.$toast.fail("提交订单出现错误，请稍后重试");case 22:this.submitLoading=!1;case 23:case"end":return h.stop()}}),null,this,[[10,18]])},submitSuccess:function(){var t=this.$store.state.isApp,e=this.itemsChecked;console.log("/submitSuccess isApp",t),console.log("/submitSuccess checkedItems",e);for(var r=0;r<e.length;r++){var n=e[r];console.log("/submitSuccess item",n.id,n.num),t?d.a.cartItemMinus(n,n.num):o.a.cartItemMinus(n,n.num)}},getAddress:function(){var t,e,r;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:if((t=this.$store.state.address)&&t.id){n.next=7;break}return n.next=4,regeneratorRuntime.awrap(o.a.addressList());case 4:e=n.sent,console.log("/getAddress ret:",e),0==e.code&&(r=e.data.rows).length>0&&(t=r[0]);case 7:t&&t.id&&(this.address.id=t.id,this.address.name=t.name,this.address.tel=t.tel,this.address.postalCode=t.postalCode,this.address.province=t.province,this.address.city=t.city,this.address.county=t.county,this.address.areaCode=t.areaCode,this.address.address=t.province+t.city+t.county+t.addressDetail,console.log("/getAddress address:",this.address));case 8:case"end":return n.stop()}}),null,this)}}),created:function(){var t,e,r,n,o,c=this;return regeneratorRuntime.async((function(d){for(;;)switch(d.prev=d.next){case 0:t=this.$store.state.orderDatas||[],console.log("/create orderDatas",t),0===t.length&&(this.$toast.fail("获取数据错误"),setTimeout((function(){c.navBack()}),2e3)),e=this.$route.query.isBuy||0,console.log("/create isBuy",e),r=[],n=[],o=0,t.forEach((function(t){n[t.business_id]||(n[t.business_id]=[]),n[t.business_id].push(t),r.push(t),o+=t.price*t.num})),this.businessData=n,e||(this.itemsChecked=r),this.total=o,this.getAddress();case 13:case"end":return d.stop()}}),null,this)}},m=r(29),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-nav-bar",{attrs:{title:"确认订单","left-text":"","left-arrow":""},on:{"click-left":t.navBack,"click-right":t.navHome}},[r("van-icon",{attrs:{slot:"right",name:"wap-home-o",size:"2rem"},slot:"right"})],1),t._v(" "),t._l(t.businessData,(function(e,n){return[t._l(e,(function(e){return[r("van-card",{attrs:{desc:e.desc||e.description,price:t.formatPrice(e.price),num:e.num}},[r("template",{slot:"title"},[r("span",{staticClass:"text-2xl text-black-50"},[t._v(t._s(e.title))])]),t._v(" "),r("template",{slot:"thumb"},[r("img",{staticStyle:{width:"80px",height:"80px"},attrs:{src:e.thumb||e.cover,alt:""}})])],2)]}))]})),t._v(" "),t.address.id>0?r("van-cell-group",{staticClass:"mt-4"},[r("van-cell",{attrs:{title:"收货地址选择"}}),t._v(" "),r("van-cell",{staticClass:"mb-8",attrs:{title:t.address.name,icon:"location-o","is-link":"",value:t.address.tel,label:t.address.address},on:{click:t.goToAddress}})],1):r("van-cell",{staticClass:"mt-4",attrs:{title:"收货地址选择",icon:"location-o","is-link":""},on:{click:t.goToAddress}}),t._v(" "),r("van-submit-bar",{attrs:{price:t.total,"button-text":"提交订单",loading:t.submitLoading},on:{submit:t.onSubmit}},[r("span",{attrs:{slot:"tip"},slot:"tip"})])],2)}),[],!1,null,null,null);e.default=component.exports}}]);