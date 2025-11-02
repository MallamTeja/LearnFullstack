import React from 'react';
import { motion } from 'framer-motion';

const Infrastructure = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '90px', minHeight: '100vh' }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="page-header"
          style={{ textAlign: 'center', padding: '3rem 0 2rem' }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ffffff' }}>
            Infrastructure Technologies
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Explore the essential infrastructure technologies that power modern applications
          </p>
        </motion.div>

        {/* This page will use the same tech grid system as other pages */}
        <div style={{ 
          background: 'rgba(30, 41, 59, 0.8)', 
          borderRadius: '20px', 
          padding: '3rem', 
          textAlign: 'center',
          border: '1px solid rgba(0, 255, 255, 0.2)'
        }}>
          <i className="fas fa-cloud" style={{ fontSize: '4rem', color: '#64ffda', marginBottom: '2rem' }}></i>
          <h3 style={{ marginBottom: '1rem', color: '#ffffff' }}>Infrastructure Technologies</h3>
          <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
            This page will display infrastructure and DevOps technologies using the same interactive grid system.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Infrastructure;