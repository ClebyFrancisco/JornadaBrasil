const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/users', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
  })


module.exports = mongoose
