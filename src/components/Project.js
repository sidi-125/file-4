// src/components/Projects.jsx
import React from 'react';
import '../Style.css/Project.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects.',
    image: 'https://static9.depositphotos.com/1559686/1228/i/450/depositphotos_12286955-stock-photo-technology-in-the-hands.jpg', // Portfolio image
    github: 'https://github.com/example/portfolio',
    demo: 'https://example.com/portfolio',
  },
  {
    title: 'To-Do App',
    description: 'A React-based task management app with local storage.',
    image: 'https://c8.alamy.com/comp/H3NA29/it-consultant-presenting-tag-cloud-about-information-technology-H3NA29.jpg',
    github: 'https://github.com/example/todo-app',
    demo: 'https://example.com/todo',
  },
  {
    title: 'Weather App',
    description: 'Fetches real-time weather using OpenWeatherMap API.',
    image: 'https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265047_1280.jpg',
    github: 'https://github.com/example/weather-app',
    demo: 'https://example.com/weather',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
