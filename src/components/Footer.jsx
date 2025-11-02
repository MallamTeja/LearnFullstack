import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <i className="fas fa-code"></i>
              <span>DevPathStack</span>
            </div>
            <p>Interactive guide to modern development technologies</p>
            <div className="social-links">
              <a href="https://github.com/devpathstack/devpathstack" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Discord"><i className="fab fa-discord"></i></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Learn</h4>
              <a href="#frontend">Frontend</a>
              <a href="#backend">Backend</a>
              <a href="#database">Database</a>
              <a href="#infrastructure">Infrastructure</a>
            </div>
            
            <div className="link-group">
              <h4>Resources</h4>
              <a href="#techtree">Tech Tree</a>
              <a href="#roadmap">Learning Path</a>
              <a href="#blog">Blog</a>
              <a href="#community">Community</a>
            </div>
            
            <div className="link-group">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 DevPathStack. Made with ❤️ for developers worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;