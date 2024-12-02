import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const userType = localStorage.getItem('type'); 

  if (!userType) {
    return <Navigate to="/" />; 
  }

  if (requiredRole && userType !== requiredRole) {
    return <Navigate to="/" />; 
  }

  return children;
};

export default ProtectedRoute;