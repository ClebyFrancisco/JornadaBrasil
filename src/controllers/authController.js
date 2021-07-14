const User = require('../models/user')

export default class AuthController {
  async register(req, res) {
    const { email } = req.body

    try {
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: 'User already existis' })
      }
      const user = await User.create(req.body)

      user.password = undefined

      return res.send({ user })
    } catch (err) {
      return res.status(400).send({ error: 'Resgistration failed' })
    }
  }
}
