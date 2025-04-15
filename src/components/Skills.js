import React from 'react';
import '../Style.css/Skills.css';

const skillsData = [
  {
    skill: 'HTML5',
    percentage: 90,
    icon: 'https://img.icons8.com/color/50/000000/html-5.png',
  },
  {
    skill: 'CSS3',
    percentage: 80,
    icon: 'https://img.icons8.com/color/50/000000/css3.png',
  },
  {
    skill: 'JavaScript',
    percentage: 85,
    icon: 'https://img.icons8.com/color/50/000000/javascript.png',
  },
  {
    skill: 'React',
    percentage: 75,
    icon: 'https://img.icons8.com/color/50/000000/react.png', 
  },
  {
    skill: 'Node.js',
    percentage: 70,
    icon: 'https://img.icons8.com/color/50/000000/nodejs.png',
  },
  {
    skill: 'Git/GitHub',
    percentage: 80,
    icon: 'https://img.icons8.com/color/50/000000/github.png',
  },
];



function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.skill} />
            </div>
            <h3>{skill.skill}</h3>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <p>{skill.percentage}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
