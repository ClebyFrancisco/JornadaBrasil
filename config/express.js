const express = require('express')
const bodyParser = require('body-parser')
import routes from '../src/routes/users'

module.exports = () => {
  const app = express()

  app.use(routes)

  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())

  return app
}