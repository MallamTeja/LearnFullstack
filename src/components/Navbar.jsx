import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { key: 'home', label: 'DevPathStack', icon: 'fas fa-code' },
    { key: 'frontend', label: 'Frontend', icon: 'fas fa-desktop' },
    { key: 'backend', label: 'Backend', icon: 'fas fa-server' },
    { key: 'database', label: 'Database', icon: 'fas fa-database' },
    { key: 'infrastructure', label: 'Infrastructure', icon: 'fas fa-cloud' },
    { key: 'techtree', label: 'Tech Tree', icon: 'fas fa-project-diagram' }
  ];

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <div className="nav-brand" onClick={() => setCurrentPage('home')}>
          <div>
            <i className="fas fa-code"></i>
            <span>DevPathStack</span>
          </div>
          <small className="tagline">Where confused devs get unconfused</small>
        </div>
        
        <div className="nav-menu">
          {navItems.slice(1).map((item) => (
            <motion.div
              key={item.key}
              className={`nav-item ${currentPage === item.key ? 'active' : ''}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(item.key)}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="nav-toggle">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;