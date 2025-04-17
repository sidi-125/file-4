
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './Pages/Education/index.jsx'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/education" element={<Education />} />
        
      </Routes>
    </Router>
  );
}

export default App; 
