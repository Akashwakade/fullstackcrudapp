const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, require: true },
  status: { type: Boolean, require: true },
});

module.exports = mongoose.model('Item', itemSchema);
