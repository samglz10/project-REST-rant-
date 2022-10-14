// Adds the dotenv package AKA MONGO_URI eviroment variable
require('dotenv').config({
  path: 'ENV_FILENAME'
})
const mongoose = require('mongoose')
//changed from mongoose.connect to 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')
