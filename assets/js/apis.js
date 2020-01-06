import axios from '@/server/axios';

export default {

  /**
   * 注册
   * @param {*} data 
   */
  async authLogin(data) {
    let ret = await axios.post('/api/user/auth/register', data)
    return ret
  },
  async getVerifyCode(data) {
    let ret = await axios.post('/api/utils/sms/sendVerifyCode', data)
    return ret
  },
  async getUserInfo(data) {
    let ret = await axios.post('/api/user/data/infoApp', data)
    return ret
  },
  async addressList(data) {
    let ret = await axios.post('/api/user/address/listUser', data)
    return ret
  },
  async getUserMsgList(data) {
    let ret = await axios.post('/api/user/message/listUser', data)
    return ret
  },
  async userMsgRead(data) {
    let ret = await axios.post('/api/user/message/update', data)
    return ret
  },
  // async getAddressDetail(data) {
  //   let ret = await axios.post('/api/user/address/detail', data)
  //   return ret
  // },
  async addressUpdate(data) {
    let ret = await axios.post('/api/user/address/update', data)
    return ret
  },
  async addressDelete(data) {
    let ret = await axios.post('/api/user/address/delete', data)
    return ret
  },
  async cartItems() {
    return await axios.post('/cart/')
  },
  async cartItemPlus(item, num = 1) {
    return await axios.post('/cart/plus', {
      ...item,
      num: num
    })
  },
  async cartItemMinus(item, num = 1) {
    return await axios.post('/cart/minus', {
      ...item,
      num: num
    })
  },
  async cartClear() {
    return await axios.post('/cart/clear')
  },

  async getCategorys() {
    let ret = await axios.post("/api/mall/goods/categorys", {
      status: 1
    });
    return ret
  },
  async getGoodsList(data) {
    let ret = await axios.post("/api/mall/goods/list", {
      ...data,
      status: 1
    });
    return ret
  },
  /**
   * 获取邀请码
   */
  async getUserInviteCode() {
    let ret = await axios.post('/api/user/invite/getCode')
    return ret
  },
  async getUserAssets() {
    let ret = await axios.post('/api/mall/user/infoAssets')
    return ret
  },
  /**
   * 创建订单
   * @param {*} data 
   */
  async createOrder(data) {
    let ret = await axios.post('/api/mall/order/create', data)
    return ret
  },
  /**
   * 取消订单
   * @param {*} data 
   */
  async cancelOrder(data) {
    let ret = await axios.post('/api/mall/order/cancel', data)
    return ret
  },
  async finishOrder(data) {
    let ret = await axios.post('/api/mall/order/finish', data)
    return ret
  },
  /**
   * 获取订单信息
   * @param {*} data 
   */
  async getOrder(data) {
    let ret = await axios.post('/api/mall/order/detail', data)
    return ret
  },
  /**
   * 获取订单列表
   * @param {*} data 
   */
  async getOrderList(data) {
    let ret = await axios.post('/api/mall/order/list', data)
    return ret
  },
  /**
   * 创建账单
   * @param {*} data 
   */
  async createPayment(data) {
    let ret = await axios.post('/api/mall/payment/create', data)
    return ret
  },
  /**
   * 支付宝支付
   * @param {*} data 
   */
  async alipaySumbit(data) {
    let ret = await axios.post('/api/utils/alipay/wapPay', data)
    return ret
  },

  async getInviteList(data) {
    let ret = await axios.post('/api/user/invite/list', data)
    return ret
  },

  async getWithdrawList(data) {
    let ret = await axios.post('/api/mall/withdraw/list', data)
    return ret
  },

  async withdrawApply(data) {
    let ret = await axios.post('/api/mall/withdraw/apply', data)
    return ret
  },

  async getProfitList(data) {
    let ret = await axios.post('/api/mall/profit/list', data)
    return ret
  }
}
