import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import NavBar from './NavBar'; 
import Footer from './Footer'; 

function JobListings() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/'); 
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

  const allJobs = jobs.length ? jobs : [];

  return (
    <>
      {/* NavBar at the top */}
      <NavBar />

      {/* Main content */}
      <Box sx={{ padding: 2, minHeight: '80vh' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Job Listings
        </Typography>
        {allJobs.length > 0 ? (
          <Grid container spacing={3}>
            {allJobs.map((job, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {job.title}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      {job.company || 'N/A'}
                    </Typography>
                    <Typography color="textSecondary">
                      {job.location || 'Location not specified'}
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                      {job.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href={job.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        marginTop: 2,
                        backgroundColor: 'rgba(4, 20, 24, 0.76)',
                        '&:hover': {
                          backgroundColor: 'rgba(4, 20, 24, 0.9)',
                        },
                      }}
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

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
}

export default JobListings;