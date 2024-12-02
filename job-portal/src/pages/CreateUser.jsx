// src/pages/CreateUser.jsx
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, MenuItem, Paper } from '@mui/material';
import axios from 'axios';
import AdminNavBar from '../components/AdminNavBar';
import Footer from '../components/Footer';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/users/create', {
        username,
        email,
        password,
        type: role,
      });
      setMessage(response.data.message || 'User created successfully!');
      setUsername('');
      setEmail('');
      setPassword('');
      setRole('');
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <>
      <AdminNavBar />
      <Box
        sx={{
          minHeight: '85vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          backgroundColor: '#f5f5f5',
        }}
      >
        <Container maxWidth="sm">
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Create User
            </Typography>
            {message && (
              <Typography
                variant="body2"
                sx={{ color: message.includes('successfully') ? 'green' : 'red', marginBottom: 2 }}
              >
                {message}
              </Typography>
            )}
            <form onSubmit={handleSubmit}>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                select
                label="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                fullWidth
                margin="normal"
                required
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="employee">Employee</MenuItem>
              </TextField>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  marginTop: 2,
                  backgroundColor: 'rgba(4, 20, 24, 0.76)',
                  '&:hover': { backgroundColor: 'rgba(4, 20, 24, 0.9)' },
                }}
              >
                Create User
              </Button>
            </form>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default CreateUser;