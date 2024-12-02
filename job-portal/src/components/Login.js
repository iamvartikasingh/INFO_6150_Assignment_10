import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, Paper, Avatar } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Sending login request...");
      const response = await axios.post("http://localhost:3001/api/login", {
        username,
        password,
      });
      console.log("Response received:", response.data);
  
      if (response.data.token && response.data.user) {
        console.log("Login successful. User data:", response.data.user);
  
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.user.username);
        localStorage.setItem("type", response.data.user.type);
        // Redirect based on user type
        if (response.data.user.type === "admin") {
          console.log("Redirecting to:", response.data.user.type === "admin" ? "/admin" : "/employee");

          navigate("/admin");
        } else if (response.data.user.type === "employee") {
          console.log("Redirecting to:", response.data.user.type === "admin" ? "/admin" : "/employee");

          navigate("/home");
        }
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("Invalid username or password");
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
          backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7, 
          zIndex: 0,
        }}
      />
      <Container maxWidth="xs" sx={{ position: 'relative', zIndex: 1 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Box display="flex" justifyContent="center" mb={2}>
            <Avatar sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
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
              sx={{ mt: 2, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
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