const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookclub', { useNewUrlParser: true });

function upsertTimestamps(schema) {
  schema.add({
    createdAt: Date,
    updatedAt: Date
  });

  schema.pre('save', function(next) {
    if (this.isNew) {
      this.createdAt = new Date();
    }

    next();
  });

  schema.pre('update', function(next) {
    this.updatedAt = new Date();

    next();
  });
}

mongoose.plugin(upsertTimestamps);

const Schema = mongoose.Schema;

module.exports = { mongoose, Schema };
