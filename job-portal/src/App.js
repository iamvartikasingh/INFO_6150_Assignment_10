import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AdminPage from './pages/AdminPage';
import AddJobsPage from './pages/AddJobsPage';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home'; // Employee page
import JobListings from './components/JobListings';
import Contact from './components/Contact';
import CompanyShowcase from './components/CompanyShowcase';
import About from './components/About';
import CreateUser from './pages/CreateUser';

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Login />} />

      
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminPage />
            </ProtectedRoute>
          }
        />

      
        <Route
          path="/add-jobs"
          element={
            <ProtectedRoute requiredRole="admin">
              <AddJobsPage />
            </ProtectedRoute>
          }
        />

      
        <Route
          path="/home"
          element={
            <ProtectedRoute requiredRole="employee">
              <Home />
            </ProtectedRoute>
          }
        />
       <Route
  path="/create-user"
  element={
    <ProtectedRoute requiredRole="admin">
      <CreateUser />
    </ProtectedRoute>
  }
/>
      </Routes>

      <Routes>
        
     
      <Route path="/about" element={<About />} />

        <Route
  path="/job-listings"
  element={
    <ProtectedRoute requiredRole="employee">
      <JobListings />
    </ProtectedRoute>
  }
/>
     
        <Route path="/contact" element={<Contact />} />
        <Route path="/company-showcase" element={<CompanyShowcase />} />

      </Routes>
    </Router>
  );
}

export default App;