import React from "react";

export default function Hero() {
  return (
    <section className="hero" role="banner" aria-label="Introduction">
      <div className="hero-content">
        <div className="hero-text">
          <h1 itemProp="name">Ashish Pal</h1>
          
          <p className="hero-subtitle">
            Hey, I'm <strong>Ashish Pal</strong>. I love building software, mixing stacks and creating innovative solutions.
          </p>
          
          <p className="hero-description">
            Computer Science Student at NIET & Full Stack Developer | Docker Enthusiast | UI/UX Designer
          </p>
          
          <p className="hero-description">
            Currently pursuing B.Tech in Computer Science Engineering • Passionate about web development, API design, and self-hosted solutions
          </p>
          
          <div className="hero-links">
            <a 
              href="https://github.com/ashupal86" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className="separator">·</span>
            <a 
              href="https://linkedin.com/in/ashish-pal-5725a6257" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="separator">·</span>
            <a href="mailto:palbro86@gmail.com">
              Email
            </a>
            <span className="separator">·</span>
            <span className="location">Greater Noida, UP</span>
          </div>

          <div className="hero-actions">
            <a 
              href="/resume.pdf" 
              download="Ashish_Pal_Resume.pdf"
              className="btn btn-primary"
              aria-label="Download Ashish Pal's Resume"
            >
              📄 Download Resume
            </a>
            <a 
              href="/contact" 
              className="btn btn-secondary"
            >
              💬 Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-container">
            <img 
              src="/profile-photo.jpg" 
              alt="Ashish Pal - Full Stack Developer" 
              className="profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="photo-placeholder">
              <div className="placeholder-icon">👨‍💻</div>
              <p>Add your photo here</p>
              <span>profile-photo.jpg in public folder</span>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-item">
          <h3 className="project-title">Notes API</h3>
          <p className="project-description">A RESTful API for CRUD operations with structured JSON responses and robust error handling.</p>
          <div className="project-tags">
            <span className="tag">Flask</span>
            <span className="tag">Python</span>
            <span className="tag backend">SQLite</span>
          </div>
        </div>
        <div className="project-item">
          <h3 className="project-title">Self-Hosted Homelab</h3>
          <p className="project-description">Personal server setup using Proxmox, Docker, and Jellyfin for media streaming and VM orchestration.</p>
          <div className="project-tags">
            <span className="tag devops">Docker</span>
            <span className="tag devops">Proxmox</span>
            <span className="tag backend">Linux</span>
          </div>
        </div>
      </div>
    </section>
  );
}
