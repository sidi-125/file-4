// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Layout component
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Certifications from './Pages/Certifications';
import Education from './Pages/Education';
import Home from './Pages/Home';
import PrivateRoute from './Pages/Privateroute'; 
import LoginForm from './Pages/LoginForm'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Skills" element={<Skills />} />
          
          <Route
            path="Education"
            element={
              <PrivateRoute>
                <Education />
              </PrivateRoute>
            }
          />
          <Route
            path="Projects"
            element={
              <PrivateRoute>
                <Projects />
              </PrivateRoute>
            }
          />
          <Route
            path="Certifications"
            element={
              <PrivateRoute>
                <Certifications />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<LoginForm onClose={() => {}} />} /> {/* Login route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
