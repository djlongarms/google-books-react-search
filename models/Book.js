const { model, Schema } = require('mongoose')

const Book = new Schema({
  title: String,
  authors: Array,
  description: String,
  image: String,
  link: String,
  started: {
    type: Boolean,
    default: false
  }
})

module.exports = model('Book', Book)