
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Skills from './Pages/Skills/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
