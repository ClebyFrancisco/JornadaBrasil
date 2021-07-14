const User = require('../models/user')

export default class AuthController {
  async register(req, res) {
    try {
      const user = await User.create(req.body)

      return res.send({ user })
    } catch (err) {
      return res.status(400).send({ error: 'Resgistration failed' })
    }
  }
}
