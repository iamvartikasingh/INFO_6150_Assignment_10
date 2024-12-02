import React from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
import NavBar from './NavBar'; 
import Footer from './Footer'; 

function Contact() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar /> 
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          padding: 1,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            width: '100%',
            maxWidth: 600,
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            Contact Us
          </Typography>
          <Box
            component="form"
            sx={{
              mt: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              required
              fullWidth
              sx={{ background: '#fff', borderRadius: 1 }}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              required
              fullWidth
              sx={{ background: '#fff', borderRadius: 1 }}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
              fullWidth
              sx={{ background: '#fff', borderRadius: 1 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                padding: 1.5,
                fontSize: '1rem',
                background: 'linear-gradient(90deg, #000000 0%, #808080 100%)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #333333 0%, #666666 100%)',
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Paper>
      </Container>
      <Footer /> 
    </Box>
  );
}

export default Contact;