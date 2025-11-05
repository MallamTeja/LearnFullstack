import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // close mobile menu when route changes
    setOpen(false);
  }, [currentPage]);
  const navItems = [
    { key: 'home', label: 'Home', icon: 'fas fa-home' },
    { key: 'frontend', label: 'FullstackSchool', icon: 'fas fa-code' },
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
        <div className="nav-brand" onClick={() => setCurrentPage('frontend')} role="button" tabIndex={0} aria-label="Go to frontend">
          <div>
            <i className="fas fa-code" aria-hidden></i>
            <span>FullstackSchool</span>
          </div>
          <small className="tagline">Where confused devs get unconfused</small>
        </div>
        
        <div className="nav-menu">
          {navItems.filter(item => 
            item.key !== currentPage && 
            item.key !== 'frontend' && 
            !(currentPage === 'home' && item.key === 'techtree')
          ).map((item) => (
            <motion.div
              key={item.key}
              className={`nav-item ${currentPage === item.key ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(item.key)}
              role="link"
              tabIndex={0}
              aria-label={item.label}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="nav-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          <i className="fas fa-bars"></i>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`nav-mobile ${open ? 'open' : ''}`} role="menu" aria-hidden={!open}>
        {navItems.map((item) => (
          <div key={item.key} className={`nav-mobile-item ${currentPage === item.key ? 'active' : ''}`} onClick={() => setCurrentPage(item.key)} role="menuitem" tabIndex={0}>
            {item.icon && <i className={item.icon} />}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;