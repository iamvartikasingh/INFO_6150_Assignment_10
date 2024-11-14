// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        padding: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        color: 'white',
        marginTop: 'auto', 
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} JobHunt. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Contact us: contact@jobhunt.com | +123 456 7890
      </Typography>
    </Box>
  );
}

export default Footer;