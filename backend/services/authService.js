// services/authService.js
const userModel = require('../models/User');

exports.authenticate = async (username, password) => {
    const user = await userModel.findOne({ username });
    if (user && user.password === password) {
      return user; // Return the user object
    }
    return null; // Return null if authentication fails
  };