import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./Pages/About";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/About" element={<About />} />
        
      </Routes>
    </Router>
  );
}

export default App;
