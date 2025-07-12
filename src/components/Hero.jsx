import React from "react";
import { Link } from "react-router-dom";
import { profileData, projectsData } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  // Get featured projects for the hero section
  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 2);
  
  return (
    <section className="hero" role="banner" aria-label="Introduction">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-profile mobile-only">
            <div className="hero-photo-container">
              <img 
                src="/profile-photo.jpeg" 
                alt="Ashish Pal - Full Stack Developer" 
                className="hero-profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hero-photo-placeholder">
                <div className="placeholder-icon">👨‍💻</div>
                <p>Add your photo here</p>
                <span>profile-photo.jpeg in public folder</span>
              </div>
            </div>
          </div>
          
          <h1 itemProp="name">{profileData.name}</h1>
          
          <p className="hero-subtitle">
            Hey, I'm <strong>{profileData.name}</strong>. I love building software, mixing stacks and creating innovative solutions.
          </p>
          
          <p className="hero-description">
            {profileData.bio}
          </p>
          
          <p className="hero-description">
            Currently pursuing {profileData.education.degree} • Passionate about web development, API design, and self-hosted solutions
            • {profileData.stats.publicRepos} public repositories on GitHub
          </p>
          
          <div className="hero-links">
            <a 
              href={profileData.github} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className="separator">·</span>
            <a 
              href={profileData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="separator">·</span>
            <a href={`mailto:${profileData.email}`}>
              Email
            </a>
            <span className="separator">·</span>
            <span className="location">{profileData.location}</span>
          </div>

          <div className="hero-actions">
            <a 
              href="https://docs.google.com/document/d/1KuVv5h7r2wk0rPpHwkI9uRR0k2iwEkOd62S5MvmUPhE/edit?usp=sharing" 
              download="Ashish_Pal_Resume.pdf"
              className="btn btn-primary"
              aria-label="Download Ashish Pal's Resume"
            >
              📄 Download Resume
            </a>
            <Link 
              to="/contact" 
              className="btn btn-secondary"
            >
              💬 Get in Touch
            </Link>
          </div>
        </div>

        <div className="hero-photo desktop-only">
          <div className="hero-photo-container">
            <img 
              src="/profile-photo.jpeg" 
              alt="Ashish Pal - Full Stack Developer" 
              className="hero-profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hero-photo-placeholder">
              <div className="placeholder-icon">👨‍💻</div>
              <p>Add your photo here</p>
              <span>profile-photo.jpeg in public folder</span>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-projects">
        <h2>Featured Projects</h2>
        {featuredProjects.map((project, index) => (
          <div key={project.id} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span key={techIndex} className={`tag ${project.category}`}>
                  {tech}
                </span>
              ))}
              {project.status === 'live' && <span className="tag">Live</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
