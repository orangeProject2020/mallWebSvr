import axios from '@/server/axios';

export default {

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
  /**
   * 创建订单
   * @param {*} data 
   */
  async createOrder(data) {
    let ret = await axios.post('/api/mall/order/create', data)
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
  }
}
