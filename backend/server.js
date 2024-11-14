// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db'); 
const jobRoutes = require('./routes/jobRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');
const app = express();
app.use(cors());
app.use(express.json());



app.use('/api/jobs', jobRoutes);
// Middlewareusers
app.use('/api/users', userRoutes);
app.use('/api', authRoutes);
app.use(bodyParser.json());
app.use('/api/companies', companyRoutes);

connectDB();


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

