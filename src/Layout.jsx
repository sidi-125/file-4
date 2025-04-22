import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; 

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="layout-container">
      <header className="header">
        <div className="logo">
          <h1 className="blink-shadow">Portfolio</h1>
        </div>
        {/* Toggle Button */}
        <button className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>
      </header>

      {/* Sidebar with dynamic class */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
            <li><Link to="/About" onClick={() => setSidebarOpen(false)}>About</Link></li>
            <li><Link to="/Education" onClick={() => setSidebarOpen(false)}>Education</Link></li>
            <li><Link to="/Skills" onClick={() => setSidebarOpen(false)}>Skills</Link></li>
            <li><Link to="/Projects" onClick={() => setSidebarOpen(false)}>Projects</Link></li>
            <li><Link to="/Certifications" onClick={() => setSidebarOpen(false)}>Certifications</Link></li>
            <li><Link to="/Contact" onClick={() => setSidebarOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </aside>

      <footer className="footer">
        <p>&copy; 2025 Sidra Tufail. All rights reserved.</p>
      </footer>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
