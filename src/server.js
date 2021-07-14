import express from 'express'
import routes from './routes/users'
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
