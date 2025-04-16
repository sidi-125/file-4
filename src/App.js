import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
