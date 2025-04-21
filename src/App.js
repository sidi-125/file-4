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
<<<<<<< Updated upstream
import Home from './Pages/Home';
import './App.css'; 
=======
import './App.css';

>>>>>>> Stashed changes


function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          {/* Nested pages through Outlet */}
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Certifications" element={<Certifications />} />
          <Route path="Education" element={<Education />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
