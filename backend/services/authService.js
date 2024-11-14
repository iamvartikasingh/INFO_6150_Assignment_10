// services/authService.js
const userModel = require('../models/User');

exports.authenticate = async (username, password) => {
    const user = await userModel.findOne({ username });
    if (user && user.password === password) {
      return user;
    }
    return null; 
  };