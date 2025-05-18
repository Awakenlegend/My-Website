import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "IPL Fan Vote",
      description: "A modern web application for IPL statistics and analysis, built with React and JavaScript. Features include real-time data visualization and interactive user interface.",
      image: "/Screenshot 2025-05-18 102938.png",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      github: "https://github.com/Awakenlegend/iplfrontend",
      live: "https://iplfans.live"
    },
    {
      title: "Drum_kit",
      description: "A simple web-based drum kit application built with HTML, CSS, and JavaScript.",
      image: "/Screenshot 2025-05-18 105510.png", // Updated image
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Awakenlegend/Drum_kit",
      live: "https://Awakenlegend.github.io/Drum_kit/"
    },
    {
      title: "Au-menu",
      description: "Student Mess Menu",
      image: "/Screenshot 2025-05-18 105541.png", // Updated image
      technologies: ["Python"], // Based on GitHub language, can be updated if needed
      github: "https://github.com/Awakenlegend/Au-menu",
      live: "https://awakenlegend.github.io/Au-menu/"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> Code
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 