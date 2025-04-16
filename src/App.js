import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Certifications from './Pages/Certifications/index';
// Import other pages as needed

function App() {
  return (
    <Router>
      <Routes>
        {/* Add your other routes here */}
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </Router>
  );
}

export default App;
