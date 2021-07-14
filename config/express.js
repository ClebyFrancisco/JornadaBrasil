const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')

module.exports = () => {
  const app = express()

  app.set('port', process.env.PORT || config.get('server.port'))

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())

  return app
}
