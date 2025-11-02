import React from 'react';
import { motion } from 'framer-motion';
import './PreviewSection.css';

const PreviewSection = () => {
  return (
    <section id="preview" className="preview-section app-container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Preview: Roadmap & Full-Stack Technologies</h2>
        <p className="lead">A quick peek at the visual roadmap and popular full-stack technologies you'll master.</p>

        <div className="preview-grid">
          <div className="roadmap-mock card">
            <div className="node">Frontend</div>
            <div className="node">Backend</div>
            <div className="node">DB</div>
            <div className="node">Deploy</div>
          </div>

          <div className="cards-mock">
            <div className="tech-card small card">
              <i className="fab fa-react"></i> MERN
            </div>
            <div className="tech-card small card">
              <i className="fab fa-angular"></i> MEAN
            </div>
            <div className="tech-card small card">
              <i className="fab fa-java"></i> Java Stack
            </div>
            <div className="tech-card small card">
              <i className="fab fa-python"></i> LAMP/LEMP
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PreviewSection;
