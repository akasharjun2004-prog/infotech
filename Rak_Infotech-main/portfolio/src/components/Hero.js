import React from 'react';
import './Hero.css';

function Hero({ setActiveSection }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Welcome to RAK Infotech</h2>
        <p>Software Solutions & Professional Development Institute</p>
        <p className="hero-subtitle">
          Delivering excellence in enterprise software development and training the next generation of talented developers with expertise in Java, Python, and cutting-edge technologies
        </p>
        <button className="cta-button" onClick={() => setActiveSection('projects')}>
          View Our Projects
        </button>
        <button className="cta-button secondary" onClick={() => setActiveSection('contact')}>
          Connect With Us
        </button>
      </div>
      <div className="hero-stats">
        <div className="stat-card">
          <h3>100+</h3>
          <p>Projects & Training Programs</p>
        </div>
        <div className="stat-card">
          <h3>2+</h3>
          <p>Years Excellence</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>Client & Student Success</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
