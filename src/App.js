import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Certifications from './Pages/Certifications/index';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </Router>
  );
}

export default App;
