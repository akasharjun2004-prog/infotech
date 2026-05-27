import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          Reach out to us for training programs, software solutions, or partnership opportunities
        </p>

        <div className="contact-content">
          <div className="contact-info" style={{ gridColumn: '1 / -1', maxWidth: '600px', margin: '0 auto' }}>
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Location</h4>
                <p>
                  <strong>Madurai, Tamil Nadu, India</strong><br />
                  Strategically located in one of South India's thriving tech hubs
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-text">
                <h4>Phone</h4>
                <p>
                  <a href="tel:+917092967550">+91 7092967550</a><br />
                  <a href="tel:+917010592224">+91 7010592224</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h4>Email</h4>
                <p><a href="mailto:info@rakinfotech.com">info@rakinfotech.com</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🌐</div>
              <div className="info-text">
                <h4>Website</h4>
                <p><a href="https://rakinfotech.com" target="_blank" rel="noopener noreferrer">www.rakinfotech.com</a></p>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect With Us</h4>
              <p style={{ marginBottom: '15px', color: '#555', fontSize: '14px' }}>
                Call us for inquiries about training programs, software development services, or collaboration opportunities
              </p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
