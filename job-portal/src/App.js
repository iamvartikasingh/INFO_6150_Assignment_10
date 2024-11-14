// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import JobListings from './components/JobListings';
import Contact from './components/Contact';
import CompanyShowcase from './components/CompanyShowcase';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
    <div  style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }} className="App">
      {location.pathname !== '/' && <NavBar />}
      <main style={{ flex: 1 }}>
      <Routes>
      <Route path="/protected" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/job-listings" element={<JobListings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company-showcase" element={<CompanyShowcase />} />
      </Routes>
      </main>
      <Footer />
    </div>

    </ThemeProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    
    </Router>
  );
}

export default App;