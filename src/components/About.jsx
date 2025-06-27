import React from "react";

export default function About() {
  return (
    <section className="section">
      <h1>About Me</h1>
      
      <div className="card">
        <h2>Background</h2>
        <p>
          I'm a passionate Computer Science Engineering student at Noida Institute of Engineering and Technology with a CGPA of 6.4/10. 
          My journey in technology has led me to explore various domains including web development, API design, and DevOps practices.
        </p>
        
        <p>
          I have hands-on experience with multiple programming languages and frameworks, and I enjoy building full-stack applications. 
          My interest in self-hosted solutions has led me to set up and maintain my own homelab infrastructure.
        </p>
      </div>

      <div className="card">
        <h2>Education</h2>
        <div className="experience-item">
          <div className="experience-header">
            <h3 className="role-title">Bachelor of Technology (B.Tech)</h3>
            <p className="company">Noida Institute of Engineering and Technology</p>
            <div className="experience-meta">
              <span>Computer Science Engineering</span>
              <span>•</span>
              <span>CGPA: 6.4/10</span>
              <span>•</span>
              <span>Greater Noida, UP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="highlights">
        <h2>Key Achievements</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <div className="highlight-icon">🏆</div>
            <h3 className="highlight-title">1st Place</h3>
            <p className="highlight-description">Website Bug Fixing Competition</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🥉</div>
            <h3 className="highlight-title">3rd Place</h3>
            <p className="highlight-description">Website Building Competition</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🎓</div>
            <h3 className="highlight-title">Technical Head</h3>
            <p className="highlight-description">Ekume Club Leadership</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">💼</div>
            <h3 className="highlight-title">Internship</h3>
            <p className="highlight-description">Python Developer at CodeClause</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Leadership & Community</h2>
        <p>
          As the Technical Head of Ekume Club, I lead technical initiatives and mentor fellow students in programming and development practices. 
          This role has enhanced my leadership skills and ability to work collaboratively on complex projects.
        </p>
        
        <p>
          My competitive programming experience includes participating in various coding competitions, 
          where I've secured podium positions in website development and debugging challenges.
        </p>
      </div>
    </section>
  );
}
