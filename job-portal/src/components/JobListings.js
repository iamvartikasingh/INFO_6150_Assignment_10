import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const jobPosts = [
  {
    id: 1,
    title: 'Full Stack Developer',
    description: 'Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.',
    lastUpdated: 'Last updated 2 days ago',
    applyLink: 'https://example.com/apply/full-stack-developer',
  },
  {
    id: 2,
    title: 'Digital Marketing Specialist',
    description: 'Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.',
    lastUpdated: 'Last updated 1 day ago',
    applyLink: 'https://example.com/apply/digital-marketing-specialist',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    description: 'Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.',
    lastUpdated: 'Last updated 4 hours ago',
    applyLink: 'https://example.com/apply/ux-ui-designer',
  },
  {
    id: 4,
    title: 'Data Scientist',
    description: 'Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.',
    lastUpdated: 'Last updated 3 days ago',
    applyLink: 'https://example.com/apply/data-scientist',
  },
  {
    id: 5,
    title: 'Customer Support Representative',
    description: 'Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.',
    lastUpdated: 'Last updated 6 hours ago',
    applyLink: 'https://example.com/apply/customer-support-representative',
  },
];

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

  const allJobs = [...jobPosts, ...jobs];

  return (
    <Box sx={{ padding: 2 }}>
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
                    sx={{ marginTop: 2,
                      backgroundColor: 'rgba(4, 20, 24, 0.76)',
                   '&:hover': {
                       backgroundColor: 'rgba(4, 20, 24, 0.9)',
                     }}}
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