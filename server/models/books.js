const { mongoose, Schema } = require('./mongoose.js');

const booksSchema = new Schema({
  title: String,
  authors: [String],
  subjects: [String],
  key: String,
});

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;
