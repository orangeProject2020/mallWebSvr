const express = require("express");
const router = express.Router();
const request = require("./request");
const config = require('./../nuxt.config.js').api
const area = require('./area')

router.get('/area', (req, res) => {
  return res.json(area)
})

router.post('/auth/check', async (req, res) => {
  if (!req.session.user_id) {
    return res.json({
      code: 1,
      message: ''
    })
  } else {
    return res.json({
      code: 0,
      message: ''
    })
  }
})

router.use((req, res, next) => {
  req.checkUser = (req, res) => {
    if (!req.session.user_id) {
      return {
        code: -100,
        message: 'auth error'
      }
    }
  }

  next()
})

router.use(async (req, res) => {

  let url = req.originalUrl
  console.log('/api url', url)

  let token = req.session.token || ''
  if (token) {
    url += '?token=' + token
  }
  url = url.replace('/api/', config.host + ':' + config.port + '/', url)
  console.log('/api url', url)

  let data = req.body || {}

  let userId = req.session.user_id || 'none'
  if (userId) {
    data.user_id = userId
  }
  data.business_id = req.session.business_id || 0
  console.log('/api data:', data)

  let Request = new request({
    channel_id: config.channel_id,
    key: config.key
  })
  let ret = await Request.post(url, data);
  console.log('/api ', url, ret)
  if (ret.data && ret.data.token) {
    console.log('/api token: ', ret.data.token)
    req.session.token = ret.data.token
    console.log('/api token set success ......, ',
      req.session.token)
  }

  return res.json(ret);
});

module.exports = router;
