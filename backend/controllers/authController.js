// controllers/authController.js
const authService = require('../services/authService');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const authenticated = await authService.authenticate(username, password);
    if (authenticated) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};