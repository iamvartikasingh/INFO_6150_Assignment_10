// services/authService.js
const userModel = require('../models/User');

exports.authenticate = (username, password) => {
  const user = userModel.findUserByUsername(username);
  return user && user.password === password;
};