const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth.json')

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, { expiresIn: 86400 })
}
export default class AuthController {
  async register(req, res) {
    const { email } = req.body

    try {
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: 'User already existis' })
      }
      const user = await User.create(req.body)

      user.password = undefined

      return res.send({
        user,
        token: generateToken({ id: user.id })
      })
    } catch (err) {
      return res.status(400).send({ error: 'Resgistration failed' })
    }
  }

  async authenticate(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      return res.status(400).send({ error: 'User not found' })
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: 'Invalid password' })
    }

    user.password = undefined

    res.send({
      user,
      token: generateToken({ id: user.id })
    })
  }
}