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
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 600 }}>
        <Typography variant="h4" component="h1" gutterBottom>
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
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;