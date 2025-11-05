import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = ({ setCurrentPage }) => {
  const handleCTA = () => {
    // Navigate directly to frontend page
    if (setCurrentPage) {
      setCurrentPage('frontend');
    }
  };

  return (
    <section className="hero-section-landing">
      <div className="hero-inner app-container">
        <div className="hero-content-center">
          <div className="hero-text-center">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: -150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            >
              Build Projects Like a Pro
            </motion.h1>
            <motion.p 
              className="microcopy"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                type: "spring", 
                stiffness: 280, 
                damping: 18,
                delay: 0.1
              }}
            >
              Where confused devs get unconfused.
            </motion.p>
          </div>
          
          {/* Professional Tech Stack Cards Section */}
          <div className="tech-stacks-professional">
            <div className="professional-stacks-grid">
              <motion.div 
                className="professional-stack-card"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 16,
                  delay: 0.3
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="stack-icon mern">
                  <i className="fab fa-node-js"></i>
                </div>
                <h4>MERN</h4>
                <p>MongoDB, Express, React, Node.js</p>
                <div className="stack-badge">Most Popular</div>
              </motion.div>

              <motion.div 
                className="professional-stack-card"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 16,
                  delay: 0.4
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="stack-icon mean">
                  <i className="fab fa-angular"></i>
                </div>
                <h4>MEAN</h4>
                <p>MongoDB, Express, Angular, Node.js</p>
                <div className="stack-badge">Enterprise</div>
              </motion.div>

              <motion.div 
                className="professional-stack-card"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 16,
                  delay: 0.5
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="stack-icon java">
                  <i className="fab fa-java"></i>
                </div>
                <h4>Java Stack</h4>
                <p>Spring Boot, MySQL and  Thymeleaf </p>
                <div className="stack-badge">Robust</div>
              </motion.div>

              <motion.div 
                className="professional-stack-card"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 16,
                  delay: 0.6
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="stack-icon lamp">
                  <i className="fab fa-php"></i>
                </div>
                <h4>LAMP/LEMP</h4>
                <p>Linux, Apache/Nginx, MySQL, PHP</p>
                <div className="stack-badge">Traditional</div>
              </motion.div>
            </div>

            {/* CTA Button moved under tech stacks */}
            <div className="hero-ctas-bottom">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCTA}
                aria-label="Explore Frontend"
              >
                Take a Look
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
