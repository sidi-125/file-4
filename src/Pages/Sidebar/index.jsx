import React from 'react';
import '../Sidebar/Sidebar.css'; // Sidebar-specific CSS

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#certification">Certification</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact">Contact</a></li>


      </ul>
    </aside>
  );
}

export default Sidebar;
