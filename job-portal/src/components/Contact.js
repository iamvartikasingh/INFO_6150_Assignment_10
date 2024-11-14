// src/components/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function Contact() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <Box
        component="form"
        sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Name"
          variant="outlined"
          required
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;