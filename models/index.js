// Adds the dotenv package AKA MONGO_URI enviroment variable
require('dotenv').config()

const mongoose = require('mongoose')
//changed from mongoose.connect to 
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')
