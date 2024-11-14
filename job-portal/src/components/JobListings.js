import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

function JobListings() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/'); // Redirect to login if no token is found
    } else {
      fetchJobs();
    }
  }, [navigate]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/jobs');
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Job Listings
      </Typography>
      {jobs.length > 0 ? (
        <Grid container spacing={3}>
          {jobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="div">
                    {job.title}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {job.company}
                  </Typography>
                  <Typography color="textSecondary">
                    {job.location}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ marginTop: 2 }}
                  >
                    Apply
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No job listings available.</Typography>
      )}
    </Box>
  );
}

export default JobListings;