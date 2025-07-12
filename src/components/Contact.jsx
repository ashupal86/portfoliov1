import React from "react";

export default function Contact() {
  const contactMethods = [
    {
      title: "Email",
      value: "palbro86@gmail.com",
      description: "Send me an email for business inquiries or collaboration opportunities",
      icon: "📧",
      href: "mailto:palbro86@gmail.com",
      action: "Send Email"
    },
    {
      title: "Phone",
      value: "+91-7428450179",
      description: "Call me for urgent matters or quick discussions",
      icon: "📱",
      href: "tel:+917428450179",
      action: "Call Now"
    },
    {
      title: "LinkedIn",
      value: "ashish-pal-5725a6257",
      description: "Connect with me professionally and view my career journey",
      icon: "💼",
      href: "https://linkedin.com/in/ashish-pal-5725a6257",
      action: "Connect"
    },
    {
      title: "GitHub",
      value: "ashupal86",
      description: "Explore my code repositories and open source contributions",
      icon: "💻",
      href: "https://github.com/ashupal86",
      action: "View Profile"
    },
    {
      title: "Resume",
      value: "Download PDF",
      description: "Download my complete resume with detailed experience and skills",
      icon: "📄",
      href: "https://docs.google.com/document/d/1KuVv5h7r2wk0rPpHwkI9uRR0k2iwEkOd62S5MvmUPhE/edit?usp=sharing",
      action: "Download"
    },
    {
      title: "Location",
      value: "Greater Noida, UP",
      description: "Currently based in Greater Noida, Uttar Pradesh, India",
      icon: "📍",
      href: "https://maps.google.com/?q=Greater+Noida,+Uttar+Pradesh,+India",
      action: "View Location"
    }
  ];

  return (
    <section className="section">
      <h1>Get in Touch</h1>
      
      <p className="hero-description">
        I'm always excited to discuss new projects, opportunities, or just chat about technology. 
        Feel free to reach out through any of the methods below.
      </p>

      <div className="contact-grid">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            target={method.href.startsWith('http') ? '_blank' : undefined}
            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            download={method.download || undefined}
            className="contact-card"

          >
            <div className="contact-card-header">
              <div className="contact-icon">
                {method.icon}
              </div>
              <div>
                <h3 className="contact-title">{method.title}</h3>
                <p className="contact-value">{method.value}</p>
              </div>
            </div>
            <p className="contact-description">{method.description}</p>
          </a>
        ))}
      </div>

      <div className="cta-section">
        <h2>Ready to Start a Conversation?</h2>
        <p>
          Whether you have a project in mind, want to collaborate, or just want to say hello, 
          I'd love to hear from you. Let's build something amazing together!
        </p>
        <div className="cta-buttons">
          <a 
            href="mailto:palbro86@gmail.com" 
            className="btn btn-primary"
          >
            📧 Send Email
          </a>
          <a 
            href="https://docs.google.com/document/d/1KuVv5h7r2wk0rPpHwkI9uRR0k2iwEkOd62S5MvmUPhE/edit?usp=sharing" 
            download="Ashish_Pal_Resume.pdf"
            className="btn btn-secondary"
          >
            📄 Download Resume
          </a>
        </div>
      </div>

      <div className="card">
        <h2>What I'm Looking For</h2>
        <div className="grid grid-2">
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Collaboration Opportunities</h4>
            <ul className="achievements-list">
              <li>Web development projects</li>
              <li>API development and integration</li>
              <li>Full-stack application development</li>
              <li>Open source contributions</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>Professional Opportunities</h4>
            <ul className="achievements-list">
              <li>Internship positions</li>
              <li>Part-time development roles</li>
              <li>Freelance projects</li>
              <li>Mentorship opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
