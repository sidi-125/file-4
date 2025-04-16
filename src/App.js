import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Pages/Projects'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;

