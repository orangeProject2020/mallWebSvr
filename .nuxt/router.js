import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _16f48e03 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _505cf222 = () => interopDefault(import('../pages/auth.vue' /* webpackChunkName: "pages/auth" */))
const _093bd8cc = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _4b335a18 = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _5f74cf08 = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _6245ea12 = () => interopDefault(import('../pages/protocol.vue' /* webpackChunkName: "pages/protocol" */))
const _48a1605a = () => interopDefault(import('../pages/address/list.vue' /* webpackChunkName: "pages/address/list" */))
const _76ab5184 = () => interopDefault(import('../pages/address/update.vue' /* webpackChunkName: "pages/address/update" */))
const _9fa1209e = () => interopDefault(import('../pages/demo/page.vue' /* webpackChunkName: "pages/demo/page" */))
const _6055a594 = () => interopDefault(import('../pages/download/app.vue' /* webpackChunkName: "pages/download/app" */))
const _065516a4 = () => interopDefault(import('../pages/goods/detail.vue' /* webpackChunkName: "pages/goods/detail" */))
const _bb130234 = () => interopDefault(import('../pages/invite/join.vue' /* webpackChunkName: "pages/invite/join" */))
const _d2cebf16 = () => interopDefault(import('../pages/order/confirm.vue' /* webpackChunkName: "pages/order/confirm" */))
const _52bffbac = () => interopDefault(import('../pages/order/detail.vue' /* webpackChunkName: "pages/order/detail" */))
const _56af1a39 = () => interopDefault(import('../pages/order/list.vue' /* webpackChunkName: "pages/order/list" */))
const _df30347a = () => interopDefault(import('../pages/user/invite.vue' /* webpackChunkName: "pages/user/invite" */))
const _07aedf7e = () => interopDefault(import('../pages/user/profit.vue' /* webpackChunkName: "pages/user/profit" */))
const _b5fd8e78 = () => interopDefault(import('../pages/user/withdraw.vue' /* webpackChunkName: "pages/user/withdraw" */))
const _36ac68c8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _16f48e03,
    name: "about"
  }, {
    path: "/auth",
    component: _505cf222,
    name: "auth"
  }, {
    path: "/cart",
    component: _093bd8cc,
    name: "cart"
  }, {
    path: "/list",
    component: _4b335a18,
    name: "list"
  }, {
    path: "/payment",
    component: _5f74cf08,
    name: "payment"
  }, {
    path: "/protocol",
    component: _6245ea12,
    name: "protocol"
  }, {
    path: "/address/list",
    component: _48a1605a,
    name: "address-list"
  }, {
    path: "/address/update",
    component: _76ab5184,
    name: "address-update"
  }, {
    path: "/demo/page",
    component: _9fa1209e,
    name: "demo-page"
  }, {
    path: "/download/app",
    component: _6055a594,
    name: "download-app"
  }, {
    path: "/goods/detail",
    component: _065516a4,
    name: "goods-detail"
  }, {
    path: "/invite/join",
    component: _bb130234,
    name: "invite-join"
  }, {
    path: "/order/confirm",
    component: _d2cebf16,
    name: "order-confirm"
  }, {
    path: "/order/detail",
    component: _52bffbac,
    name: "order-detail"
  }, {
    path: "/order/list",
    component: _56af1a39,
    name: "order-list"
  }, {
    path: "/user/invite",
    component: _df30347a,
    name: "user-invite"
  }, {
    path: "/user/profit",
    component: _07aedf7e,
    name: "user-profit"
  }, {
    path: "/user/withdraw",
    component: _b5fd8e78,
    name: "user-withdraw"
  }, {
    path: "/",
    component: _36ac68c8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
