const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Create a new job
router.post('/create', async (req, res) => {
  const { company, title, description, salary } = req.body;

  // Validate required fields
  if (!company || !title || !description || !salary) {
    return res.status(400).json({ error: 'All fields are required (company, title, description, salary)' });
  }

  try {
    const newJob = new Job({ company, title, description, salary });
    const job = await newJob.save();
    res.status(201).json({ message: 'Job created successfully', job });
  } catch (err) {
    console.error('Error creating job:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ datePosted: -1 }); // Sort jobs by latest date posted
    res.json({ jobs });
  } catch (err) {
    console.error('Error fetching jobs:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a single job by ID
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json({ job });
  } catch (err) {
    console.error('Error fetching job:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a job by ID
router.put('/:id', async (req, res) => {
  const { company, title, description, salary } = req.body;

  // Validate required fields
  if (!company || !title || !description || !salary) {
    return res.status(400).json({ error: 'All fields are required (company, title, description, salary)' });
  }

  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      { company, title, description, salary },
      { new: true, runValidators: true }
    );

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.json({ message: 'Job updated successfully', job });
  } catch (err) {
    console.error('Error updating job:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a job by ID
router.delete('/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    console.error('Error deleting job:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;