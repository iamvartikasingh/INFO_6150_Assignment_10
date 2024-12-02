import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AdminPage from './pages/AdminPage';
import AddJobsPage from './pages/AddJobsPage';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home'; // Employee page
import JobListings from './components/JobListings';
import Contact from './components/Contact';
import CompanyShowcase from './components/CompanyShowcase'; // Adjust the path as necessary
function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<Login />} />

        {/* Admin Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminPage />
            </ProtectedRoute>
          }
        />

        {/* Add Jobs Route */}
        <Route
          path="/add-jobs"
          element={
            <ProtectedRoute requiredRole="admin">
              <AddJobsPage />
            </ProtectedRoute>
          }
        />

        {/* Employee Route */}
        <Route
          path="/home"
          element={
            <ProtectedRoute requiredRole="employee">
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Routes>
        {/* Main Dashboard (Home) */}
        <Route path="/" element={<Home />} />

        <Route
  path="/job-listings"
  element={
    <ProtectedRoute requiredRole="employee">
      <JobListings />
    </ProtectedRoute>
  }
/>
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/company-showcase" element={<CompanyShowcase />} />

      </Routes>
    </Router>
  );
}

export default App;