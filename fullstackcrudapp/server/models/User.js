const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
//   role: { type: String,require:false, default: 'user' },
});

module.exports = mongoose.model('User', userSchema);
