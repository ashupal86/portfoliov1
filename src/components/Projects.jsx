import React from "react";
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const projects = projectsData;

  return (
    <section className="section">
      <h1>Projects</h1>
      
      <p className="hero-description">
        Here are some of the projects I've built to solve real-world problems and explore new technologies.
        All projects are from my GitHub repositories with real data.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Key Features:</h4>
              <ul className="achievements-list">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Technologies:</h4>
              <div className="project-tags">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className={`tag ${project.category}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {project.stars > 0 && <span>⭐ {project.stars} stars</span>}
                {project.forks > 0 && <span>🍴 {project.forks} forks</span>}
                <span>📅 Updated {new Date(project.lastUpdated).toLocaleDateString()}</span>
                <span className={`tag ${project.status === 'live' ? 'backend' : 'devops'}`}>
                  {project.status}
                </span>
              </div>
            </div>
            
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                >
                  GitHub
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>Want to see more?</h2>
        <p>
          Check out my GitHub profile for more projects and contributions to open source.
          I have {projects.length} featured projects showcasing different aspects of full-stack development.
        </p>
        <div className="cta-buttons">
          <a 
            href="https://github.com/ashupal86" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View GitHub Profile
          </a>
          <a href="/contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
