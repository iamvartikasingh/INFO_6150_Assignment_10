import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function Home() {
  const username = localStorage.getItem('username'); // Retrieve the username from localStorage

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: 'url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 3,
        color: '#fff', // Text color to contrast with the background
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent background for text readability
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome{username ? `, ${username}` : ''}!
        </Typography>
        <Typography variant="body1">
         Apply for your Dream Job! Today!
        </Typography>
      </Container>
    </Box>
  );
}

export default Home;