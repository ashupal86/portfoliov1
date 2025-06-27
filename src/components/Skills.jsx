import React from "react";

export default function Skills() {
  return (
    <section className="section">
      <h1>Skills & Technologies</h1>
      
      <p className="hero-description">
        Here are some of the technologies and tools I work with to bring ideas to life.
      </p>

      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skills-list">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">C++</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML/CSS</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Web Development</h3>
          <div className="skills-list">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Flask</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">Bootstrap</span>
            <span className="skill-tag">Tailwind CSS</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Databases & Storage</h3>
          <div className="skills-list">
            <span className="skill-tag">SQLite</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">PostgreSQL</span>
            <span className="skill-tag">MongoDB</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>DevOps & Tools</h3>
          <div className="skills-list">
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">Linux</span>
            <span className="skill-tag">Proxmox</span>
            <span className="skill-tag">Render</span>
            <span className="skill-tag">Vercel</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Mobile & Other</h3>
          <div className="skills-list">
            <span className="skill-tag">Android Studio</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">IntelliJ IDEA</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Cloud & Platforms</h3>
          <div className="skills-list">
            <span className="skill-tag">Google Cloud</span>
            <span className="skill-tag">Render</span>
            <span className="skill-tag">Vercel</span>
            <span className="skill-tag">GitHub</span>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Always Learning</h2>
        <p>
          Technology is constantly evolving, and I love staying up-to-date with the latest trends and tools. 
          Currently exploring containerization, microservices, and advanced React patterns.
        </p>
      </div>
    </section>
  );
}
