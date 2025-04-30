// src/Components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('authToken'); // Get token from localStorage
  return token ? children : <Navigate to="/login" />; // If token exists, render children; otherwise, redirect to login
};

export default PrivateRoute;
