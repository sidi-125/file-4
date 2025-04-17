
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './Pages/Education/index.jsx'; 
import Projects from './Pages/Projects';
import './App.css';
//import './App.css';

import Certifications from './Pages/Certifications/index';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/education" element={<Education />} />
        
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </Router>
  );
}

export default App; 
