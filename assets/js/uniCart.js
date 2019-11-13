export default {
  cartItems() {
    // return await axios.post('/cart/')
    // let itemStorge = uni.getStorageSync('cart')
    let itemStorge = plus.storage.getItem("cart")
    return itemStorge ? JSON.parse(itemStorge) : []
  },
  cartItemPlus(item, num = 1) {

    let items = this.cartItems()
    let body = {
      ...item,
      num: num
    }
    let id = body.id
    let find = false
    for (let index = 0; index < items.length; index++) {
      let item = items[index];
      if (item.id == id) {
        item.num += num
        find = true
      }
    }

    if (!find) {
      items.push({
        id: body.id,
        num: body.num,
        cover: body.cover,
        title: body.title,
        desc: body.description || '',
        price: body.price,
        price_market: body.price_market,
        business_id: body.business_id,
        stock: body.stock || -1
      })
    }

    // uni.setStorageSync('cart', JSON.stringify(items))
    plus.storage.setItem("cart", JSON.stringify(items))
    return items
  },
  cartItemMinus(item, num = 1) {

    let items = this.cartItems()
    let body = {
      ...item,
      num: num
    }
    let id = body.id
    let delIndex = -1
    for (let index = 0; index < items.length; index++) {
      let item = items[index];
      if (item.id == id) {
        if (item.num > num) {
          item.num -= num
        } else {
          delIndex = index
        }
      }
    }

    if (delIndex > -1) {
      items.splice(delIndex, 1)
    }

    // uni.setStorageSync('cart', JSON.stringify(items))
    plus.storage.setItem("cart", JSON.stringify(items))
    return items
  },
  cartClear() {
    // uni.setStorageSync('cart', [])
    plus.storage.setItem("cart", '')
    return []
  }
}
