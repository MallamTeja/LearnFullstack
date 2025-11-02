import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const STEPS = [
  { id: 1, title: 'Select Track', desc: 'Pick Frontend, Backend, Database or Infra.' },
  { id: 2, title: 'View Tech Tree', desc: 'See dependencies so you learn in the right order.' },
  { id: 3, title: 'Flip Cards', desc: 'Read quick descriptions and open resources.' },
  { id: 4, title: 'Build Stuff', desc: 'Follow projects to cement knowledge.' }
];

const HowItWorks = () => {
  return (
    <section id="how" className="how-section app-container">
      <motion.div className="how-inner" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>How it works</h2>
        <p className="lead">A tiny roadmap: choose, explore, flip, build. Repeat until you ship.</p>

        <div className="steps-grid">
          {STEPS.map((s) => (
            <motion.div key={s.id} className="step-card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 200 }}>
              <div className="step-num">{s.id}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
