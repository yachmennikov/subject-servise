const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Article', articlesSchema)
