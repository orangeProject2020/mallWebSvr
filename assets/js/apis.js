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
  async getOrder(data) {
    let ret = await axios.post('/api/mall/order/detail', data)
    return ret
  }
}
