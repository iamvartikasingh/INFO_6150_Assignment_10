// src/components/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';

function Contact() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        
        //background: 'linear-gradient(to bottom, #e0f7ff, #cce7ff)', // Adjust the gradient as needed
        padding: 1,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          width: '100%',
          maxWidth: 600,
          borderRadius: 3, // rounded corners
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
            sx={{ background: '#fff', borderRadius: 1 }} // white background for better readability
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
              background: 'linear-gradient(90deg, #000000 0%, #808080 100%)', // Black to Grey gradient
'&:hover': {
  background: 'linear-gradient(90deg, #333333 0%, #666666 100%)', // Slightly lighter black to darker grey gradient for hover
},
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;