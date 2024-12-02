import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const userType = localStorage.getItem('type'); // Get user type from localStorage

  if (!userType) {
    return <Navigate to="/" />; // Redirect to login if no user type
  }

  if (requiredRole && userType !== requiredRole) {
    return <Navigate to="/" />; // Redirect unauthorized users to login
  }

  return children;
};

export default ProtectedRoute;