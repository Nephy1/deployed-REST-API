const mongoose = require('mongoose');


const photoImages = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  width: Number,
  height: Number,
  pathURL: String,
  linkURL: String,
  credit: String,
  creditURL: String,
  lastActiveAt: Date
})
const imageModel = new mongoose.model('photo', photoImages)

module.exports = photoImages