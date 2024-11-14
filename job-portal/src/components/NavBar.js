// src/components/NavBar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/'); 
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem button component={Link} to="/home" onClick={handleDrawerToggle}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/job-listings" onClick={handleDrawerToggle}>
          <ListItemText primary="Job Listings" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/company-showcase" onClick={handleDrawerToggle}>
          <ListItemText primary="Company Showcase" />
        </ListItem>
        <ListItem button onClick={() => { handleLogout(); handleDrawerToggle(); }}>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/job-listings">
            Job Listings
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/company-showcase">
            Company Showcase
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Log Out
          </Button>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default NavBar;