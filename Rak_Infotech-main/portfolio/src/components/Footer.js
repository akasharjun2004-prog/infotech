import React from 'react';
import './Footer.css';
import Logo from './Logo';

function Footer({ setActiveSection }) {
  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <Logo size="small" />
            <p>
              Delivering cutting-edge software development and IT services with expertise in Java and Python technologies.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button className="footer-link" onClick={() => handleNavigate('home')}>Home</button></li>
              <li><button className="footer-link" onClick={() => handleNavigate('about')}>About Us</button></li>
              <li><button className="footer-link" onClick={() => handleNavigate('projects')}>Projects</button></li>
              <li><button className="footer-link" onClick={() => handleNavigate('services')}>Services</button></li>
              <li><button className="footer-link" onClick={() => handleNavigate('contact')}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Offerings</h4>
            <ul>
              <li><a href="https://rakinfotech.com">Java Full Stack Development</a></li>
              <li><a href="https://rakinfotech.com">Python & Django Development</a></li>
              <li><a href="https://rakinfotech.com">Professional Training Programs</a></li>
              <li><a href="https://rakinfotech.com">DevOps & Cloud Services</a></li>
              <li><a href="https://rakinfotech.com">Enterprise Solutions</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Information</h4>
            <div className="contact-detail">
              <strong>📍 Location</strong>
              <p>Madurai, Tamil Nadu, India</p>
            </div>
            <div className="contact-detail">
              <strong>📧 Email</strong>
              <p><a href="mailto:info@rakinfotech.com">info@rakinfotech.com</a></p>
            </div>
            <div className="contact-detail">
              <strong>🌐 Website</strong>
              <p><a href="https://rakinfotech.com" target="_blank" rel="noopener noreferrer">rakinfotech.com</a></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RAK Infotech. All rights reserved.</p>
          <p>
            <a href="https://rakinfotech.com/privacy">Privacy Policy</a>
            <a href="https://rakinfotech.com/terms">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
