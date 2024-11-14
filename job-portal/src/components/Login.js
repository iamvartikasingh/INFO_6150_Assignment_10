import React from 'react';
import { Button, TextField, Container, Typography, Box, Paper, Avatar } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        username,
        password,
      });
      if (response.data.token && response.data.user) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.user.username);
        navigate('/home'); 
      }
    } catch (err) {
      setError('Invalid username or password');
    }
  };
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto, sans-serif',
        position: 'relative', 
        overflow: 'hidden',
      }}
    >
      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15877.jpg?t=st=1731566395~exp=1731569995~hmac=a32d895270a9f29ca40bfccf9992bc3f44bfb6f3ec3de0ec83b212833b5878a6&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7, 
          zIndex: 0,
        }}
      />
     
      <Container maxWidth="xs" sx={{ position: 'relative', zIndex: 1 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Box display="flex" justifyContent="center" mb={2}>
            <Avatar sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)'  }}>
              <LockOutlined />
            </Avatar>

          </Box>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            {error && (
              <Typography color="error" variant="body2" align="center">
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 , backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
     
    </Box>
  );
}



export default Login;