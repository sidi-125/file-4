import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />


        


      </Routes>
    </Router>
  );
}

export default App;
