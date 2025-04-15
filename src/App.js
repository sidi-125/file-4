import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Sidebar from './components/Sidebar.js';
import HeroSection from './components/Hero.js';
import SkillsSection from './components/Skills.js';
import EducationSection from './components/Education.js';
import ProjectsSection from './components/Project.js';
import CertificationSection from './components/Certification.js';
import ContactSection from './components/Contact.js';


import './App.css'; // make sure styling is correct

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Header />

      <main className="main-content">

        <section id="home"><HeroSection /></section>
        <section id="education"><EducationSection /></section>
        <section id="certification"><CertificationSection /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="skills"><SkillsSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>
      <Footer />

    </div>
    
  );
}

export default App;
