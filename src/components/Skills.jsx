import React from "react";
import { skillsData, profileData, currentlyLearning } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="section">
      <h1>Skills & Technologies</h1>
      
      <p className="hero-description">
        Here are some of the technologies and tools I work with to bring ideas to life.
        Based on my {profileData.stats.publicRepos} GitHub repositories and professional experience.
      </p>

      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skills-list">
            {skillsData.languages.map((skill, index) => (
              <span key={index} className="skill-tag">{skill.name}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Web Development</h3>
          <div className="skills-list">
            {skillsData.frameworks.map((skill, index) => (
              <span key={index} className="skill-tag">{skill.name}</span>
            ))}
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">Responsive Design</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Databases & Storage</h3>
          <div className="skills-list">
            {skillsData.databases.map((skill, index) => (
              <span key={index} className="skill-tag">{skill.name}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>DevOps & Tools</h3>
          <div className="skills-list">
            {skillsData.tools.map((skill, index) => (
              <span key={index} className="skill-tag">{skill.name}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Cloud & Platforms</h3>
          <div className="skills-list">
            {skillsData.cloud.map((skill, index) => (
              <span key={index} className="skill-tag">{skill.name}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Currently Learning</h3>
          <div className="skills-list">
            {currentlyLearning.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Technical Proficiency</h2>
        <div className="grid grid-2">
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Strong Areas</h4>
            <ul className="achievements-list">
              <li>Python & Flask Development</li>
              <li>React & Frontend Technologies</li>
              <li>API Design & Development</li>
              <li>Database Design & Management</li>
              <li>Docker & Containerization</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Experience Level</h4>
            <ul className="achievements-list">
              <li>3+ years of programming experience</li>
              <li>Multiple full-stack projects</li>
              <li>Professional internship experience</li>
              <li>Competition winner in web development</li>
              <li>Active GitHub contributor</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Always Learning</h2>
        <p>
          Technology is constantly evolving, and I love staying up-to-date with the latest trends and tools. 
          Currently exploring containerization, microservices, and advanced React patterns.
          Check out my {profileData.stats.publicRepos} repositories to see these skills in action!
        </p>
      </div>
    </section>
  );
}
