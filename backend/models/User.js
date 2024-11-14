// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String },
  role: { type: String }
});

userSchema.statics.findUserByUsername = function(username) {
  return this.findOne({ username });
};

module.exports = mongoose.model('User', userSchema);