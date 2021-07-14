const express = require('express')
const bodyParser = require('body-parser')

module.exports = () => {
  const app = express()

  app.set('port')

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())

  return app
}