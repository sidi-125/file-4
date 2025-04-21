

import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; 

const Layout = () => {
  return (
    <div className="layout-container">
      <header className="header">
      <div className="logo">
        <h1 className="blink-shadow">Portfolio</h1>
      </div>
    </header>

      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/Skills">Skills</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Certifications">Certifications</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
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
