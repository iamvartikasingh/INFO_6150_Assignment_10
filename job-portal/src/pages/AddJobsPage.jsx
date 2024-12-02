import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
import axios from 'axios';
import AdminNavBar from '../components/AdminNavBar';
import Footer from '../components/Footer';

const AddJobPage = () => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    description: '',
    salary: '',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      const response = await axios.post('http://localhost:3001/api/jobs/create', formData);
      setSuccess('Job added successfully!');
      setFormData({
        company: '',
        title: '',
        description: '',
        salary: '',
      });
    } catch (err) {
      setError('Failed to add job. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AdminNavBar />
      <Container
        maxWidth="sm"
        sx={{
          flex: 1, 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 3, width: '100%' }}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Add Job
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Company Name"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Job Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Job Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
            />
            <TextField
              label="Salary"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              type="number"
              required
            />
            {success && <Typography color="success.main">{success}</Typography>}
            {error && <Typography color="error.main">{error}</Typography>}
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Job
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
};

export default AddJobPage;