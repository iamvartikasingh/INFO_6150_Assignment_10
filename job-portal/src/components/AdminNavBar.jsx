// src/components/AdminNavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminNavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(4, 20, 24, 0.9)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/admin')}>
          Admin Dashboard
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate('/add-jobs')}>
            Add Job
          </Button>
          <Button color="inherit" onClick={() => navigate('/create-user')}>
            Create User
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavBar;