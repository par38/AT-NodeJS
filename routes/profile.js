const Express = require('express')
const profileRouter = Express.Router()

profileRouter.route('/').get((req, res) => {
  res.send(req.user)
})

module.exports = profileRouter