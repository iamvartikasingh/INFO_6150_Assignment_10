// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db'); 

// Import routes
const jobRoutes = require('./routes/jobRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Route middleware
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api', authRoutes); 
app.use('/api/companies', companyRoutes);

// Connect to the database
connectDB();

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});