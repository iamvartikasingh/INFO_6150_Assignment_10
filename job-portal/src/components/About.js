// src/components/About.js
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

function About() {
  return (
    <Box
      sx={{
        minHeight: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', 
        padding: 0, 
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={2} sx={{ padding: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our Job Portal! Our mission is to connect job seekers with their dream opportunities while helping companies find the perfect candidates. We believe in empowering professionals by providing an intuitive, user-friendly platform for job searches, applications, and networking.
          </Typography>
          <Typography variant="body1" paragraph>
            Our team is dedicated to providing a seamless experience, continuously improving our features, and integrating cutting-edge technologies to make job searching and hiring as efficient and effective as possible.
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for choosing us. We look forward to supporting your career growth and recruitment success!
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default About;