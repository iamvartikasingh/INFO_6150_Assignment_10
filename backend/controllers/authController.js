const jwt = require('jsonwebtoken');
const authService = require('../services/authService');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authService.authenticate(username, password);
    if (user && user.username) { 
     
      const token = jwt.sign(
        { username: user.username, id: user._id }, 
        'secret', 
        { expiresIn: '1h' } 
      );
    
      res.status(200).json({ message: 'Login successful', token, user }); 
    }  else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};