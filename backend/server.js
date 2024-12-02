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
app.use(bodyParser.json());


app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api', authRoutes); 
app.use('/api/companies', companyRoutes);
app.get('/api/jobs', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5; 
  const skip = (page - 1) * limit;

  const jobs = await Job.find().skip(skip).limit(limit);
  const totalJobs = await Job.countDocuments();
  const totalPages = Math.ceil(totalJobs / limit);

  res.json({
    jobs,
    totalPages,
    currentPage: page,
  });
});
connectDB();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});