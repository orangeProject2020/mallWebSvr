const request = require("./request");
const config = require('./../nuxt.config.js').api

module.exports = {
  getInfoByToken: async (req, res, next) => {

    let token = req.query.token || ''
    if (token === '0') {
      req.session.token = ''
      req.session.user_id = ''
    }
    console.log('/getInfoByToken token:', token)
    if (token && token !== '0') {
      let Request = new request({
        channel_id: config.channel_id,
        key: config.key
      })
      let url = config.host + ':' + config.port + '/user/info/detailGet'
      let ret = await Request.post(url, {
        token: token
      });
      console.log('/getInfoByToken ret:', ret)

      if (ret.code == 0) {
        req.session.token = token
        let userId = ret.data.uuid || ''
        console.log('/getInfoByToken userId:', userId)
        req.session.user_id = userId
      } else {
        req.session.token = ''
        req.session.user_id = ''
      }
    }

    console.log('/getInfoByToken user_id:', req.session.user_id)
    next()
  }
}
