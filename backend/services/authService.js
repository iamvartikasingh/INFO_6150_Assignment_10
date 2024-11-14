// services/authService.js
const userModel = require('../models/User');

exports.authenticate = async (username, password) => {
  const user = await userModel.findUserByUsername(username);
  return user && user.password === password; // For plain-text passwords, NOT recommended for production
};