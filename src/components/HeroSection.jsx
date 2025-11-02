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
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero-tag">Short, friendly tagline for curious devs</p>
          <h1 className="hero-title">Build Projects Like a Pro</h1>
          <p className="hero-desc">Interactive roadmaps, visual tech trees, and flip cards that turn confusion into code. Learn the why, then the how.</p>

          <div className="hero-ctas">
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCTA}
              aria-label="Explore Frontend Technologies"
            >
              Take a Look
            </motion.button>
          </div>

          <p className="microcopy">Where confused devs get unconfused. (Yes, really.)</p>
        </motion.div>

        <motion.div
          className="hero-mock"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <div className="mock-canvas">
            <div className="mock-stacks-grid">
              <div className="mock-card">
                <div className="mock-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#61DAFB"/>
                  </svg>
                </div>
                <div className="mock-name">MERN</div>
              </div>

              <div className="mock-card">
                <div className="mock-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="#DD0031"/>
                  </svg>
                </div>
                <div className="mock-name">MEAN</div>
              </div>

              <div className="mock-card">
                <div className="mock-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#007396"/>
                  </svg>
                </div>
                <div className="mock-name">Java Stack</div>
              </div>

              <div className="mock-card">
                <div className="mock-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#777BB4"/>
                    <text x="12" y="16" textAnchor="middle" fill="#777BB4" fontSize="8" fontFamily="Arial, sans-serif">PHP</text>
                  </svg>
                </div>
                <div className="mock-name">LAMP/LEMP</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
