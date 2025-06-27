import React from "react";

export default function Experience() {
  return (
    <section className="section">
      <h1>Experience & Leadership</h1>
      
      <p className="hero-description">
        My professional journey includes internship experience, leadership roles, and active community involvement.
      </p>

      <div className="experience-item">
        <div className="experience-header">
          <h3 className="role-title">Python Developer Intern</h3>
          <p className="company">CodeClause</p>
          <div className="experience-meta">
            <span>Remote</span>
            <span>•</span>
            <span>2024</span>
            <span>•</span>
            <span className="type-badge">Internship</span>
          </div>
        </div>
        
        <p>
          Worked on Python-based projects, developing clean and efficient code solutions. 
          Gained hands-on experience with professional development practices and collaborative workflows.
        </p>
        
        <ul className="achievements-list">
          <li>Developed Python applications following best practices</li>
          <li>Collaborated with team members on project requirements</li>
          <li>Implemented error handling and code optimization</li>
          <li>Participated in code reviews and learning sessions</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3 className="role-title">Technical Head</h3>
          <p className="company">Ekume Club, NIET</p>
          <div className="experience-meta">
            <span>Greater Noida, UP</span>
            <span>•</span>
            <span>2024 - Present</span>
            <span>•</span>
            <span className="type-badge">Leadership</span>
          </div>
        </div>
        
        <p>
          Leading technical initiatives and mentoring fellow students in programming and development practices. 
          Responsible for organizing tech events and workshops at the campus.
        </p>
        
        <ul className="achievements-list">
          <li>Organized 5+ technical events including TEDx talks and coding competitions</li>
          <li>Conducted deployment workshop on Docker & Render</li>
          <li>Mentored students in web development and programming</li>
          <li>Managed technical aspects of club activities and events</li>
          <li>Received BharatXR recognition for successfully managing tech events</li>
        </ul>
      </div>

      <div className="highlights">
        <h2>Competitive Achievements</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <div className="highlight-icon">🏆</div>
            <h3 className="highlight-title">1st Place</h3>
            <p className="highlight-description">Website Bug Fixing Competition - Web Showdown, ISTE NIET</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🥉</div>
            <h3 className="highlight-title">3rd Place</h3>
            <p className="highlight-description">Website Building Competition - Web Wizard, NIET</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🎯</div>
            <h3 className="highlight-title">Event Speaker</h3>
            <p className="highlight-description">Workshop on Docker & Render Deployment</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🏅</div>
            <h3 className="highlight-title">Recognition</h3>
            <p className="highlight-description">BharatXR Certificate for Tech Event Management</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Certifications & Learning</h2>
        <div className="grid grid-2">
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Technical Certifications</h4>
            <ul className="achievements-list">
              <li>Python (Basic) - HackerRank</li>
              <li>Java (Basic) - HackerRank</li>
              <li>Google Cloud Computing Foundations</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Professional Skills</h4>
            <ul className="achievements-list">
              <li>Team Leadership & Management</li>
              <li>Event Organization & Planning</li>
              <li>Technical Workshop Delivery</li>
              <li>Mentoring & Knowledge Sharing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Let's Work Together</h2>
        <p>
          I'm always interested in new opportunities and collaborations. 
          Whether it's a project, internship, or just a tech discussion, feel free to reach out!
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="btn btn-primary">
            Get in Touch
          </a>
          <a 
            href="https://linkedin.com/in/ashish-pal-5725a6257" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
