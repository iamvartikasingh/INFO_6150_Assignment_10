// controllers/authController.js
const authService = require('../services/authService');

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (authService.authenticate(username, password)) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
};