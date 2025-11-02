import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const handleCTA = () => {
    // redirect to home page
    window.location.href = '/';
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
              aria-label="Take a Look"
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
                <div className="mock-icon"><i className="fab fa-react"></i></div>
                <div className="mock-name">MERN</div>
              </div>
              
              <div className="mock-card">
                <div className="mock-icon"><i className="fab fa-angular"></i></div>
                <div className="mock-name">MEAN</div>
              </div>
              
              <div className="mock-card">
                <div className="mock-icon"><i className="fab fa-java"></i></div>
                <div className="mock-name">Java Stack</div>
              </div>
              
              <div className="mock-card">
                <div className="mock-icon"><i className="fab fa-python"></i></div>
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
