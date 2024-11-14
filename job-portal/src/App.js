// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; // Assuming you have a NavBar component
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import JobListings from './components/JobListings';
import Contact from './components/Contact';
import CompanyShowcase from './components/CompanyShowcase';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* Navigation bar displayed on every page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/job-listings" element={<JobListings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company-showcase" element={<CompanyShowcase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;