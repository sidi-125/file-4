import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
