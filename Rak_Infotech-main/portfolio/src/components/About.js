import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About RAK Infotech</h2>
          <p>
            RAK Infotech is a leading software development company and professional software development institute committed to delivering 
            high-quality, scalable, and innovative software solutions. With our expertise in modern technologies and agile methodologies, 
            we help businesses transform their digital landscape while nurturing the next generation of software developers through comprehensive training programs.
          </p>
          
          <div className="about-details">
            <div className="detail-item">
              <h3>🏢 Company Overview</h3>
              <p>
                Founded with a vision to excel in software development, RAK Infotech has successfully 
                delivered 10+ enterprise-grade projects and trained 100+ aspiring developers. We combine practical industry experience with quality software craftsmanship.
              </p>
            </div>

            <div className="detail-item">
              <h3>🎓 Development Institute</h3>
              <p>
                Our training programs empower students and professionals with real-world skills in Java, Python, 
                web development, and DevOps. We believe in hands-on learning with industry mentors guiding each step of your journey.
              </p>
            </div>

            <div className="detail-item">
              <h3>📍 Location</h3>
              <p>
                <strong>Madurai, Tamil Nadu, India</strong><br />
                Strategically located in one of South India's thriving tech hubs with excellent infrastructure.
              </p>
            </div>

            <div className="detail-item">
              <h3>🌐 Domain</h3>
              <p>
                <strong>rakinfotech.com</strong><br />
                Visit us online for more information about our services, training programs, and success stories.
              </p>
            </div>

            <div className="detail-item">
              <h3>💼 Core Strengths</h3>
              <p>
                Full Stack Development | Enterprise Solutions | Cloud Services | DevOps | 
                Professional Training | Mentorship Programs | Quality Assurance
              </p>
            </div>

            <div className="detail-item">
              <h3>⭐ Our Promise</h3>
              <p>
                We are committed to excellence, innovation, and creating lasting value for our clients and students. 
                Every project we deliver and every student we train represents our dedication to success.
              </p>
            </div>
          </div>

          <h3 className="section-title">Why Choose RAK Infotech?</h3>
          <div className="benefits">
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>Expert Team</h4>
                <p>Experienced developers and certified trainers with years of industry expertise</p>
              </div>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>Proven Success</h4>
                <p>100+ successful project deliveries and 100+ successful student placements</p>
              </div>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>Quality Assured</h4>
                <p>Rigorous testing, quality standards, and customer satisfaction guarantee</p>
              </div>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>On-Time Delivery</h4>
                <p>Meeting deadlines with precision and maintaining project transparency</p>
              </div>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>Affordable Training</h4>
                <p>Industry-standard training at competitive pricing for all skill levels</p>
              </div>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <div>
                <h4>Continuous Support</h4>
                <p>Ongoing mentorship and career guidance for all our students and clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
