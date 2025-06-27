import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Notes API",
      description: "A comprehensive RESTful API for note management with CRUD operations, structured JSON responses, and robust error handling. Built with Flask and SQLite.",
      features: [
        "Complete CRUD operations for notes",
        "Structured JSON responses",
        "Error handling and validation",
        "SQLite database integration"
      ],
      technologies: ["Flask", "Python", "SQLite", "REST API"],
      github: "https://github.com/ashupal86",
      category: "backend"
    },
    {
      title: "My Manager (Clear Ledger)",
      description: "A financial management system with an intuitive interface for tracking expenses, managing budgets, and generating financial reports.",
      features: [
        "Expense tracking and categorization",
        "Budget management tools",
        "Financial report generation",
        "User-friendly dashboard"
      ],
      technologies: ["React", "JavaScript", "HTML/CSS", "Local Storage"],
      github: "https://github.com/ashupal86",
      category: "frontend"
    },
    {
      title: "Blog Website",
      description: "A dynamic blog platform featuring user authentication, post management, and responsive design. Perfect for content creators and bloggers.",
      features: [
        "User authentication system",
        "Create, edit, and delete posts",
        "Responsive design",
        "Comment system"
      ],
      technologies: ["Flask", "Python", "HTML/CSS", "SQLite"],
      github: "https://github.com/ashupal86",
      category: "fullstack"
    },
    {
      title: "Self-Hosted Homelab",
      description: "Personal server infrastructure using Proxmox for virtualization, Docker for containerization, and Jellyfin for media streaming.",
      features: [
        "Proxmox virtualization setup",
        "Docker container orchestration",
        "Jellyfin media server",
        "Remote access and management"
      ],
      technologies: ["Proxmox", "Docker", "Linux", "Jellyfin"],
      github: "https://github.com/ashupal86",
      category: "devops"
    }
  ];

  return (
    <section className="section">
      <h1>Projects</h1>
      
      <p className="hero-description">
        Here are some of the projects I've built to solve real-world problems and explore new technologies.
      </p>

      <div className="grid grid-2">
        {projects.map((project, index) => (
          <div key={index} className="card">
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
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>Want to see more?</h2>
        <p>
          Check out my GitHub profile for more projects and contributions to open source.
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
