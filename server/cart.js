const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
  let items = req.session.cart || []
  console.log('/ items', items)
  return res.json(items)
})

router.post('/plus', async (req, res) => {
  let items = req.session.cart || []
  let body = req.body || {}
  let id = body.id
  let num = body.num || 1
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
      cover: body.thumb || body.cover,
      title: body.title,
      desc: body.description || '',
      price: body.price,
      price_market: body.price_market,
      business_id: body.business_id,
      stock: body.stock || -1
    })
  }

  req.session.cart = items
  console.log('/ plus', req.session.cart)

  return res.json(items)

})

router.post('/minus', async (req, res) => {
  let items = req.session.cart || []
  let body = req.body || {}
  let id = body.id
  let num = body.num || 1
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

  req.session.cart = items

  return res.json(items)
})

router.post('/clear', async (req, res) => {
  req.session.cart = []
  console.log('/ clear', req.session.cart)
  return res.json([])
})

module.exports = router
