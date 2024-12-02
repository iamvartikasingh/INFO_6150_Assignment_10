const express = require('express');
const router = express.Router();
const User = require('../models/User'); 






router.post('/', async (req, res) => {
  const { username, password, email, type } = req.body;

 
  if (!['employee', 'admin'].includes(type)) {
    return res.status(400).json({ error: 'Invalid type. Must be "employee" or "admin".' });
  }

  try {
    const newUser = new User({ username, password, email, type });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  
});



router.get('/', async (req, res) => {
  console.log('GET /users endpoint accessed');
  try {
    const users = await User.find({}, { password: 0 }); // Exclude passwords
    console.log('Fetched users:', users); // Log fetched users
    res.json(users); // Send the users as a response
  } catch (err) {
    console.error('Error fetching users:', err.message); // Log any errors
    res.status(500).json({ message: 'Error fetching users', error: err.message });
  }
});

router.put('/update-types', async (req, res) => {
  const updates = req.body; // Expecting an array of updates
  try {
    const results = await Promise.all(
      updates.map(update =>
        User.findOneAndUpdate({ email: update.email }, { type: update.type }, { new: true })
      )
    );
    res.status(200).json({ message: 'Users updated successfully', results });
  } catch (error) {
    console.error('Error updating users:', error);
    res.status(500).json({ error: 'Failed to update users' });
  }
});
module.exports = router;