(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{337:function(e,n,t){"use strict";t.r(n);var o={methods:{},mounted:function(){var e=this,n=this.$route.query.from||"";console.log("/mounted ................."),document.addEventListener("UniAppJSBridgeReady",(function(){console.log("UniAppJSBridgeReady ................."),e.$store.commit("isAppSet",!0)})),setTimeout((function(){uni.navigateTo({url:"/pages/auth/login?from="+n})}),0)}},r=t(29),component=Object(r.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);n.default=component.exports}}]);