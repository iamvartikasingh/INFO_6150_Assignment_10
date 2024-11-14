// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db'); // Connect to MongoDB
const jobRoutes = require('./routes/jobRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());


// Use job routes
app.use('/api/jobs', jobRoutes);
// Middlewareusers
app.use('/api/users', userRoutes);
app.use('/api', authRoutes);
app.use(bodyParser.json());

// Add this at the top of your server.js file
// Assuming you created the db.js file for connection logic
connectDB();

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

