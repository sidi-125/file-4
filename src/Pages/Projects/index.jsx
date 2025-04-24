// src/components/Projects.jsx
import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import '../Projects/Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects.',
    image: 'https://static9.depositphotos.com/1559686/1228/i/450/depositphotos_12286955-stock-photo-technology-in-the-hands.jpg', 
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
    <Box className="projects-container">
      <Typography variant="h2" className="projects-heading">My Projects</Typography>
      <Grid container spacing={3} justifyContent="center" className="projects-grid">
        {projects.map((project, index) => (
          <Grid 
            item 
            xs={12}  // Stacks vertically on small screens
            sm={6}   // 2 items per row on small screens
            md={4}   // 3 items per row on larger screens
            key={index}
            className="project-card"
            sx={{
              height: { xs: 300, sm: 350, md: 400 },  // Adjust height for different screen sizes
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <Box className="project-content" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
                <Button 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-link"
                  sx={{ backgroundColor: '#4f46e5', color: 'white', '&:hover': { backgroundColor: '#4338ca' } }}
                >
                  GitHub
                </Button>
                <Button 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-link"
                  sx={{ backgroundColor: '#4f46e5', color: 'white', '&:hover': { backgroundColor: '#4338ca' } }}
                >
                  Live Demo
                </Button>
              </Box>
              <Typography variant="h5" sx={{ paddingLeft: '20px' }}>{project.title}</Typography>
              <Typography variant="body2" sx={{ paddingLeft: '20px', paddingBottom: '20px' }}>{project.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
