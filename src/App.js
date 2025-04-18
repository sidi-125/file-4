import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
import Certifications from './Pages/Certifications';
import Education from './Pages/Education';
import './App.css';

<<<<<<< Updated upstream
=======
import './App.css';
import CertificationSection from './Pages/Certifications';
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
<<<<<<< Updated upstream
        <Route path="/Certifications" element={<Certifications />} />
        <Route path="/Education" element={<Education />} />
=======
        <Route path="/Certifications" element={<CertificationSection />} />
>>>>>>> Stashed changes





        


      </Routes>
    </Router>
  );
}

export default App;
