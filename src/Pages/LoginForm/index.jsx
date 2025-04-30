// src/Components/LoginForm.jsx
import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirect

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for redirecting

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email,  
        password
      }, {
        headers: {
          "x-api-key": "reqres-free-v1"
        }
      });

      // Handle the response, save the token, and close the form
      const token = response.data.token;
      localStorage.setItem('authToken', token);  // Save token to localStorage

      alert('Login successful!');
      onClose(); // Close the login form

      // Redirect to a protected route (for example /education)
      navigate('/education');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <Box sx={{ width: 300, margin: 'auto', padding: 2 }}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      
      {error && <Typography color="error" variant="body2">{error}</Typography>}

      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
