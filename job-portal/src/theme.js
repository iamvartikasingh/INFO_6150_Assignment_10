import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A nice shade of blue
      contrastText: '#ffffff', // White text for contrast
    },
    secondary: {
      main: '#009688', // Teal
      contrastText: '#ffffff', // White text for contrast
    },
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#ffffff', // White background for cards and paper
    },
    text: {
      primary: '#333333', // Darker text color for better readability
      secondary: '#555555', // Slightly lighter gray for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Default font family
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
          borderRadius: '8px', // Rounded corners for buttons
          padding: '10px 20px', // Padding for buttons
        },
        containedPrimary: {
          backgroundColor: '#1976d2',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#1565c0', // Slightly darker shade on hover
          },
        },
        containedSecondary: {
          backgroundColor: '#009688',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#00796b', // Slightly darker teal on hover
          },
        },
      },
    },
  },
});

export default theme;