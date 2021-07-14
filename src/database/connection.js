const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/users', { useMongoClient: true })
mongoose.Promise = global.Promise

module.exports = mongoose
