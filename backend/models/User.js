const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }, 
  email: { type: String, required: true, unique: true }, 
  type: { 
    type: String, 
    enum: ['employee', 'admin'], 
    required: true 
  },
});


userSchema.statics.findUserByUsername = function(username) {
  return this.findOne({ username });
};

userSchema.statics.getAllUsers = function() {
  return this.find({}, { password: 0 }); 
};

module.exports = mongoose.model('User', userSchema);