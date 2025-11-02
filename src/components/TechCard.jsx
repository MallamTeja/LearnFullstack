import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './TechCard.css';

const TechCard = ({ tech }) => {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch / coarse pointer devices
    const mq = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(hover: none) and (pointer: coarse)')
      : null;
    const touch = (navigator && navigator.maxTouchPoints && navigator.maxTouchPoints > 0) || (mq && mq.matches) || ('ontouchstart' in window);
    setIsTouch(Boolean(touch));
  }, []);

  const handleLearnMore = () => {
    window.open(tech.url, '_blank');
  };

  const handleCardClick = (e) => {
    // On touch devices toggle flip on card tap. Prevent flipping when clicking the Learn More button.
    if (isTouch) {
      setFlipped((s) => !s);
    }
  };

  return (
    <motion.div
      className="tech-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleCardClick}
    >
      <div className={`card-inner ${flipped ? 'is-flipped' : ''}`}>
        <div className="card-front">
          <div className="tech-icon">
            <img src={tech.iconUrl} alt={tech.name} />
          </div>
          <h3 className="tech-name">{tech.name}</h3>
          <span className="tech-category">{tech.category}</span>
        </div>
        
        <div className="card-back">
          <div className="tech-description">
            <p>{tech.desc}</p>
          </div>
          <button
            className="learn-more-btn"
            onClick={(ev) => {
              // stop click from bubbling to card (avoids toggling flip)
              ev.stopPropagation();
              handleLearnMore();
            }}
          >
            <i className="fas fa-external-link-alt"></i>
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TechCard;