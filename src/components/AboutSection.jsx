import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section app-container">
      <motion.div
        className="about-inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="about-copy">
          <h2>What we teach</h2>
          <p>We cover the full-stack: frontend, backend, databases, and deployment. Each topic is broken into bite-sized technologies with clear dependencies so you know what to learn next.</p>
          <ul className="about-list">
            <li><strong>Frontend</strong> — React, state management, component design</li>
            <li><strong>Backend</strong> — Node.js, Express, REST & GraphQL</li>
            <li><strong>Database</strong> — SQL, NoSQL, schema design, migrations</li>
            <li><strong>Deployment</strong> — CI/CD, containers, Vercel and cloud basics</li>
          </ul>
        </div>

        <div className="about-visual">
          <div className="visual-card">Frontend ➜ Backend ➜ DB ➜ Deploy</div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
