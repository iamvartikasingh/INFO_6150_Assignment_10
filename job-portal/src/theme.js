import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
      contrastText: '#ffffff', 
    },
    secondary: {
      main: '#009688', 
      contrastText: '#ffffff', 
    },
    background: {
      default: '#f5f5f5', 
      paper: '#ffffff', 
    },
    text: {
      primary: '#333333', 
      secondary: '#555555', 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', 
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none', // Keeps button text capitalization as defined
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', 
          padding: '10px 20px', 
        },
        containedPrimary: {
          backgroundColor: '#1976d2',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        },
        containedSecondary: {
          backgroundColor: '#009688',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#00796b', 
          },
        },
      },
    },
  },
});

export default theme;