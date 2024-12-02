import React from 'react';
import { Typography, Container, Box , Button,} from '@mui/material';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'; 
import Footer from './Footer'; 
import CompanyShowcase from './CompanyShowcase';
function Home() {
  const username = localStorage.getItem('username'); 

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
        // padding: 3,
        color: '#fff', 
      }}
    >
      <NavBar />
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)', 
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
      <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ m: 1 }}
            component={Link}
            to="/job-listings"
          >
            View Jobs
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ m: 1 }}
            component={Link}
            to="/contact"
          >
            Contact Us
          </Button>
        </Box>
        <Footer />
    </Box>
  );
}

export default Home;