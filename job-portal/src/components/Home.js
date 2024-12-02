import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function Home() {
  const username = localStorage.getItem('username');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      <NavBar />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: 4,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome{username ? `, ${username}` : ''}!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Apply for your Dream Job! Today!
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#000', 
                color: '#fff',
                '&:hover': { backgroundColor: '#333' },
                m: 1,
              }}
              component={Link}
              to="/job-listings"
            >
              View Jobs
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#000', 
                color: '#fff',
                '&:hover': { backgroundColor: '#333' },
                m: 1,
              }}
              component={Link}
              to="/contact"
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;