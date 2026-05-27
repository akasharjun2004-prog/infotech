import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    { id: 1, title: 'E-Commerce Platform', category: 'java', description: 'Full-featured e-commerce website with product catalog, shopping cart, payment integration, and admin dashboard.', technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Stripe API'], image: '🛒', highlights: ['Product Management', 'Payment Gateway', 'User Authentication', 'Order Tracking', 'Admin Panel'] },
    { id: 2, title: 'Hospital Management System', category: 'java', description: 'Complete healthcare system for managing patient records, appointments, billing, and medical history.', technologies: ['Java', 'Spring Boot', 'Oracle DB', 'Hibernate', 'Bootstrap'], image: '🏥', highlights: ['Patient Records', 'Appointment Scheduling', 'Billing System', 'Medical History', 'Report Generation'] },
    { id: 3, title: 'Employee Management System', category: 'java', description: 'HR management system for employee records, attendance, payroll, and performance tracking.', technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA', 'RESTful APIs'], image: '👥', highlights: ['Employee Database', 'Attendance Tracking', 'Payroll Management', 'Performance Reviews', 'Leave Management'] },
    { id: 4, title: 'Inventory Management System', category: 'java', description: 'Smart inventory tracking system with real-time stock management and automated reordering.', technologies: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'Kafka'], image: '📦', highlights: ['Stock Tracking', 'Auto Reorder', 'Supplier Management', 'Analytics', 'Barcode Integration'] },
    { id: 5, title: 'Billing Software', category: 'java', description: 'Professional billing and invoicing system with tax calculation and payment tracking.', technologies: ['Java', 'Spring Boot', 'MySQL', 'iText', 'PayPal API'], image: '💳', highlights: ['Invoice Generation', 'Tax Calculation', 'Payment Tracking', 'PDF Export', 'Multi-currency'] },
    { id: 6, title: 'CRM Dashboard', category: 'java', description: 'Customer relationship management system with sales pipeline and customer analytics.', technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Chart.js'], image: '📊', highlights: ['Sales Pipeline', 'Customer Tracking', 'Analytics Dashboard', 'Lead Management', 'Report Generation'] },
    { id: 7, title: 'Real Estate Web App', category: 'java', description: 'Property listing and management platform with virtual tours and financing calculator.', technologies: ['Java', 'Spring Boot', 'React', 'MongoDB', 'Google Maps API'], image: '🏠', highlights: ['Property Listings', 'Virtual Tours', 'Search Filters', 'Financing Calculator', 'Agent Portal'] },
    { id: 8, title: 'Food Delivery Application', category: 'java', description: 'End-to-end food delivery platform with restaurant management and real-time tracking.', technologies: ['Java', 'Spring Boot', 'React', 'MongoDB', 'Google Maps API'], image: '🍕', highlights: ['Restaurant Management', 'Order Tracking', 'Delivery Mapping', 'Payment Integration', 'Rating System'] },
    { id: 9, title: 'Online Course Platform', category: 'java', description: 'E-learning platform with course management, video streaming, and student progress tracking.', technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'AWS S3'], image: '🎓', highlights: ['Course Management', 'Video Streaming', 'Progress Tracking', 'Quiz System', 'Certificates'] },
    { id: 10, title: 'Banking API', category: 'java', description: 'Secure banking API with account management, transactions, and fraud detection.', technologies: ['Java', 'Spring Boot', 'Oracle DB', 'OAuth2', 'JWT'], image: '🏦', highlights: ['Account Management', 'Transactions', 'Fraud Detection', 'Security', 'Compliance'] },
    { id: 11, title: 'JWT Authentication System', category: 'java', description: 'Secure authentication and authorization system with JWT tokens and role-based access control.', technologies: ['Java', 'Spring Security', 'JWT', 'OAuth2', 'Microservices'], image: '🔐', highlights: ['JWT Tokens', 'Role-Based Access', 'Token Refresh', 'Multi-factor Auth', 'Session Management'] },
    { id: 12, title: 'REST API Backend', category: 'java', description: 'Scalable RESTful API backend with comprehensive documentation and rate limiting.', technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Swagger', 'Docker'], image: '⚙️', highlights: ['RESTful Design', 'API Documentation', 'Rate Limiting', 'Caching', 'Load Balancing'] },
    { id: 13, title: 'Microservices Architecture', category: 'java', description: 'Distributed system with multiple microservices, service discovery, and inter-service communication.', technologies: ['Java', 'Spring Boot', 'Kubernetes', 'Docker', 'RabbitMQ'], image: '🏗️', highlights: ['Service Discovery', 'Load Balancing', 'Message Queues', 'Circuit Breaker', 'Monitoring'] },
    { id: 14, title: 'Library Management System', category: 'java', description: 'Complete library system for book management, member tracking, and fine calculation.', technologies: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'Barcode API'], image: '📚', highlights: ['Book Management', 'Member Tracking', 'Issue/Return', 'Fine Calculation', 'Search System'] },
    { id: 15, title: 'Admin Dashboard', category: 'java', description: 'Comprehensive admin panel with user management, analytics, and system monitoring.', technologies: ['Java', 'Spring Boot', 'React', 'Chart.js', 'PostgreSQL'], image: '🖥️', highlights: ['User Management', 'Analytics', 'System Monitoring', 'Reports', 'Audit Logs'] },
    { id: 16, title: 'Portfolio Website', category: 'java', description: 'Professional portfolio website showcasing projects, skills, and experience.', technologies: ['Java', 'Spring Boot', 'React', 'CSS3', 'Responsive Design'], image: '💼', highlights: ['Project Showcase', 'Blog Integration', 'Contact Forms', 'SEO Optimized', 'Responsive'] },
    { id: 17, title: 'Expense Tracker', category: 'java', description: 'Personal expense tracking application with budget management and financial analytics.', technologies: ['Java', 'Spring Boot', 'React', 'Chart.js', 'SQLite'], image: '💰', highlights: ['Expense Logging', 'Budget Management', 'Analytics', 'Reports', 'Export Data'] },
    { id: 18, title: 'Weather Application', category: 'java', description: 'Real-time weather application with forecasts and weather alerts.', technologies: ['Java', 'Spring Boot', 'React', 'OpenWeather API', 'Maps API'], image: '🌤️', highlights: ['Real-time Data', 'Forecasts', 'Weather Alerts', 'Multiple Locations', 'Charts'] },
    { id: 19, title: 'Task Management App', category: 'java', description: 'Collaborative task management system with team features and progress tracking.', technologies: ['Java', 'Spring Boot', 'React', 'WebSocket', 'MongoDB'], image: '✅', highlights: ['Task Creation', 'Team Collaboration', 'Progress Tracking', 'Notifications', 'Gantt Chart'] },
    { id: 20, title: 'Sales Analytics Dashboard', category: 'java', description: 'Business intelligence dashboard for sales analysis and performance metrics.', technologies: ['Java', 'Spring Boot', 'Power BI', 'SQL', 'React'], image: '📈', highlights: ['Sales Metrics', 'Performance Analysis', 'KPI Tracking', 'Forecasting', 'Custom Reports'] },
    { id: 21, title: 'Power BI Projects', category: 'java', description: 'Advanced business analytics and visualization using Power BI integration.', technologies: ['Java', 'Spring Boot', 'Power BI', 'SQL', 'DAX'], image: '📊', highlights: ['Data Visualization', 'Interactive Reports', 'KPI Dashboards', 'Real-time Analytics', 'Export Reports'] },
    { id: 22, title: 'Business Analytics Dashboard', category: 'java', description: 'Comprehensive analytics dashboard for business intelligence and decision-making.', technologies: ['Java', 'Spring Boot', 'Elasticsearch', 'Kibana', 'React'], image: '📉', highlights: ['Real-time Analytics', 'Data Insights', 'Trend Analysis', 'Custom Metrics', 'Alert System'] },
    { id: 23, title: 'Java Full Stack E-Commerce', category: 'java', description: 'Complete e-commerce solution with product management, orders, and customer reviews.', technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Stripe'], image: '🛍️', highlights: ['Product Catalog', 'Shopping Cart', 'Payment Integration', 'Reviews', 'Recommendations'] },
    { id: 24, title: 'Spring Boot + React CRM', category: 'java', description: 'Modern CRM system with lead management and sales pipeline tracking.', technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redux'], image: '📞', highlights: ['Lead Management', 'Sales Pipeline', 'Customer Database', 'Activity Tracking', 'Integration'] },
    { id: 25, title: 'Java Full Stack ERP System', category: 'java', description: 'Enterprise resource planning system integrating finance, HR, and operations.', technologies: ['Java', 'Spring Boot', 'Angular', 'Oracle DB', 'Microservices'], image: '🏢', highlights: ['Finance Module', 'HR Management', 'Operations', 'Inventory', 'Supply Chain'] },
    { id: 26, title: 'Spring Boot Hotel Booking System', category: 'java', description: 'Hotel management and booking system with reservation and guest management.', technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Payment API'], image: '🏨', highlights: ['Room Management', 'Booking System', 'Guest Management', 'Billing', 'Housekeeping'] },
    { id: 27, title: 'Java Full Stack Job Portal', category: 'java', description: 'Job search platform with resume upload, application tracking, and notifications.', technologies: ['Java', 'Spring Boot', 'React', 'Elasticsearch', 'MySQL'], image: '💼', highlights: ['Job Listings', 'Resume Upload', 'Application Tracking', 'Search', 'Notifications'] },
    { id: 28, title: 'Spring Boot Student Portal', category: 'java', description: 'Student information system with grades, attendance, and course management.', technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'JWT'], image: '🎒', highlights: ['Course Management', 'Grade Tracking', 'Attendance', 'Notifications', 'Reports'] },
    { id: 29, title: 'Java Full Stack Social Media App', category: 'java', description: 'Social networking platform with posts, messaging, and real-time notifications.', technologies: ['Java', 'Spring Boot', 'React', 'MongoDB', 'WebSocket'], image: '👥', highlights: ['Posts & Feeds', 'Messaging', 'Real-time Notifications', 'Friends', 'Comments'] },
    { id: 30, title: 'Spring Boot Payroll System', category: 'java', description: 'Automated payroll management with salary calculation and tax compliance.', technologies: ['Java', 'Spring Boot', 'MySQL', 'PDF Generation', 'Email Service'], image: '💵', highlights: ['Salary Calculation', 'Tax Compliance', 'PDF Reports', 'Direct Deposit', 'Audit Trail'] },
    { id: 31, title: 'Java Full Stack Pharmacy Management', category: 'java', description: 'Pharmacy system with medicine inventory, prescriptions, and sales management.', technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Barcode Scanner'], image: '💊', highlights: ['Inventory Management', 'Prescriptions', 'Sales', 'Expiry Alerts', 'Supplier Management'] },
    { id: 32, title: 'Spring Boot Online Examination System', category: 'java', description: 'Online testing platform with secure exam delivery and automatic grading.', technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Security Features'], image: '📝', highlights: ['Question Bank', 'Secure Testing', 'Auto Grading', 'Analytics', 'Certificate Generation'] },
    { id: 33, title: 'Django E-Commerce', category: 'python', description: 'Full-featured e-commerce platform with product listings, cart, and payment processing.', technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Stripe'], image: '🛒', highlights: ['Product Management', 'Cart System', 'Payment Gateway', 'Order Tracking', 'Reviews'] },
    { id: 34, title: 'Blog CMS', category: 'python', description: 'Content management system for blogging with SEO optimization and user engagement tools.', technologies: ['Python', 'Django', 'PostgreSQL', 'Elasticsearch', 'Celery'], image: '📝', highlights: ['Article Management', 'Comments', 'Categories', 'SEO', 'User Analytics'] },
    { id: 35, title: 'AI Chatbot', category: 'python', description: 'Intelligent chatbot using machine learning for customer support and engagement.', technologies: ['Python', 'TensorFlow', 'NLTK', 'Django', 'WebSocket'], image: '🤖', highlights: ['Natural Language Processing', 'Machine Learning', 'Intent Recognition', 'Learning', 'Integration'] },
    { id: 36, title: 'Web Scraping Dashboard', category: 'python', description: 'Web scraping tool with data visualization and scheduled data collection.', technologies: ['Python', 'BeautifulSoup', 'Scrapy', 'Plotly', 'Celery'], image: '🕷️', highlights: ['Web Scraping', 'Data Extraction', 'Visualization', 'Scheduling', 'Export'] },
    { id: 37, title: 'Face Recognition Attendance', category: 'python', description: 'Automated attendance system using facial recognition technology.', technologies: ['Python', 'OpenCV', 'Face Recognition', 'Django', 'PostgreSQL'], image: '👤', highlights: ['Face Detection', 'Attendance Tracking', 'Real-time', 'Reports', 'Alerts'] },
    { id: 38, title: 'COVID Data Analysis', category: 'python', description: 'Data analysis and visualization dashboard for COVID-19 statistics and trends.', technologies: ['Python', 'Pandas', 'Matplotlib', 'Plotly', 'Jupyter'], image: '📊', highlights: ['Data Analysis', 'Visualizations', 'Trend Analysis', 'Predictions', 'Real-time Data'] },
    { id: 39, title: 'AI Resume Analyzer', category: 'python', description: 'AI-powered resume analysis tool for job matching and skill assessment.', technologies: ['Python', 'NLP', 'Machine Learning', 'Django', 'MongoDB'], image: '📄', highlights: ['Resume Parsing', 'Skill Analysis', 'Job Matching', 'Scoring', 'Recommendations'] },
    { id: 40, title: 'AI Image Generator', category: 'python', description: 'AI-powered image generation using deep learning models.', technologies: ['Python', 'TensorFlow', 'Keras', 'Django', 'GPU Support'], image: '🎨', highlights: ['Image Generation', 'Style Transfer', 'Customization', 'Batch Processing', 'Export'] },
    { id: 41, title: 'ChatGPT Clone', category: 'python', description: 'Advanced conversational AI system with context understanding and learning capabilities.', technologies: ['Python', 'Transformers', 'PyTorch', 'Django', 'WebSocket'], image: '💬', highlights: ['Natural Language', 'Context Understanding', 'Conversation Memory', 'API', 'Fine-tuning'] },
    { id: 42, title: 'Voice Assistant', category: 'python', description: 'Voice-controlled assistant with speech recognition and text-to-speech capabilities.', technologies: ['Python', 'SpeechRecognition', 'pyttsx3', 'Django', 'Machine Learning'], image: '🎤', highlights: ['Speech Recognition', 'Text-to-Speech', 'Voice Commands', 'Integration', 'Learning'] },
    { id: 43, title: 'AI Recommendation System', category: 'python', description: 'Machine learning system for personalized recommendations using collaborative filtering.', technologies: ['Python', 'Scikit-learn', 'Pandas', 'Django', 'Redis'], image: '⭐', highlights: ['Collaborative Filtering', 'Personalization', 'Performance', 'Analytics', 'A/B Testing'] }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section className="projects">
      <div className="projects-container">
        <h2>Our Projects</h2>
        <p className="projects-intro">
          Showcasing our professional work and expertise across Java and Python technologies
        </p>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'java' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('java')}
          >
            Java Full Stack
          </button>
          <button 
            className={`filter-btn ${selectedFilter === 'python' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('python')}
          >
            Python Django
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <div className="project-content">
                <span className="project-category">
                  {project.category === 'java' ? 'Java Full Stack' : 'Python Django'}
                </span>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-highlights">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
