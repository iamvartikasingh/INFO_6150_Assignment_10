// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/', async (req, res) => {
    try {
      const { username, password, email, role } = req.body;
    
      const newUser = new User({ username, password, email, role });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });


router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err.message });
  }
});

module.exports = router;