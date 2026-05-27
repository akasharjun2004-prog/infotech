import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '🧑‍💻',
      title: 'Java Full Stack Development',
      description: 'End-to-end Java application development using Spring Boot, Hibernate, and modern web technologies.',
      features: [
        'Spring Boot Framework',
        'RESTful API Development',
        'Microservices Architecture',
        'Database Design & Optimization',
        'Testing & Deployment'
      ]
    },
    {
      id: 2,
      icon: '🐍',
      title: 'Python & Django Development',
      description: 'Rapid application development with Python and Django framework for scalable web solutions.',
      features: [
        'Django Framework',
        'Django REST Framework',
        'Database Management',
        'Celery Task Scheduling',
        'Real-time Features'
      ]
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Full Stack Web Solutions',
      description: 'Complete web solutions from frontend to backend with responsive UI and robust server-side logic.',
      features: [
        'Frontend Development',
        'Backend APIs',
        'Database Design',
        'Performance Optimization',
        'Security Implementation'
      ]
    },
    {
      id: 4,
      icon: '☁️',
      title: 'Cloud & DevOps Services',
      description: 'Cloud deployment, containerization, and DevOps practices for seamless application delivery.',
      features: [
        'AWS/Azure/GCP Deployment',
        'Docker & Kubernetes',
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Monitoring & Logging'
      ]
    },
    {
      id: 5,
      icon: '🔒',
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise applications designed for complex business requirements and integration.',
      features: [
        'ERP Systems',
        'CRM Solutions',
        'Business Process Automation',
        'System Integration',
        'Custom Development'
      ]
    },
    {
      id: 6,
      icon: '📞',
      title: 'Maintenance & Support',
      description: 'Ongoing support, maintenance, and enhancement services for your existing applications.',
      features: [
        '24/7 Support',
        'Bug Fixes & Patches',
        'Performance Tuning',
        'Feature Enhancement',
        'Documentation'
      ]
    },
    {
      id: 7,
      icon: '🎓',
      title: 'Java Full Stack Training',
      description: 'Comprehensive training program covering core Java, Spring Boot, web development, and real-world project experience.',
      features: [
        'Core Java Concepts',
        'Spring Boot Framework',
        'Database & SQL',
        'Live Project Work',
        'Job Placement Support',
        'Certification'
      ]
    },
    {
      id: 8,
      icon: '🚀',
      title: 'Python & Web Development',
      description: 'Master Python programming with Django, building modern web applications with industry best practices.',
      features: [
        'Python Fundamentals',
        'Django Framework',
        'Database Design',
        'API Development',
        'Real-world Projects',
        'Career Guidance'
      ]
    },
    {
      id: 9,
      icon: '🌟',
      title: 'DevOps & Cloud Training',
      description: 'Learn cloud platforms, containerization, CI/CD pipelines, and infrastructure management from industry experts.',
      features: [
        'AWS/Azure Basics',
        'Docker & Kubernetes',
        'CI/CD Pipelines',
        'Infrastructure Setup',
        'Hands-on Labs',
        'Internship Opportunities'
      ]
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2>Our Services & Training Programs</h2>
        <p className="services-intro">
          Comprehensive IT solutions and professional training to accelerate your career and business success
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                <h4>{service.id > 6 ? 'Program Includes:' : 'What\'s Included:'}</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="service-process">
          <h3>Our Development Process</h3>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Discovery & Planning</h4>
              <p>Understanding requirements and project scope thoroughly</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Design & Architecture</h4>
              <p>Creating innovative system design and technical specifications</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Development</h4>
              <p>Building robust, scalable, and future-proof solutions</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Testing & QA</h4>
              <p>Comprehensive testing ensuring excellence and reliability</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h4>Deployment</h4>
              <p>Seamless deployment with minimal downtime</p>
            </div>
            <div className="step">
              <div className="step-number">6</div>
              <h4>Support & Growth</h4>
              <p>Ongoing support and continuous improvement for success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
