import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./Pages/About";
import Contact from './Pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/About" element={<About />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
