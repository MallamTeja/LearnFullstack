import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import HowItWorks from './HowItWorks';
import PreviewSection from './PreviewSection';

const LandingPage = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');

  const handleCTA = () => {
    // Scroll to features or redirect to signup
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };

  const handleSkillNavigation = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email signup
    alert(`Thanks for joining! We'll notify ${email} when we launch.`);
    setEmail('');
  };

  return (
    <div className="landing-page">
      <HeroSection setCurrentPage={setCurrentPage} />
      <AboutSection />
      <HowItWorks />
      <PreviewSection />

      {/* Problem Section */}
      <section className="problem-section"        <div className="section-glow" aria-hidden></div>
        <div className="container">
          <motion.div 
            className="problem-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Tired of Getting Lost in the Tech Learning Maze?</h2>
            <div className="problems-grid">
              <div className="problem-item">
                <i className="fas fa-question-circle"></i>
                <h3>Don't know what to learn next</h3>
                <p>Endless tutorials but no clear path forward</p>
              </div>
              <div className="problem-item">
                <i className="fas fa-clock"></i>
                <h3>Wasting time on outdated tech</h3>
                <p>Learning technologies that are already obsolete</p>
              </div>
              <div className="problem-item">
                <i className="fas fa-puzzle-piece"></i>
                <h3>Missing the big picture</h3>
                <p>Understanding individual tools but not how they connect</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="section-glow" aria-hidden></div>
        <div className="container">
          <motion.div 
            className="solution-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>FullstackSchool Shows You the Exact Learning Path</h2>
            <p className="solution-description">
              Interactive tech tree that reveals dependencies, shows real-world connections, 
              and guides you through the optimal learning sequence for any stack.
            </p>
            
            <div className="how-it-works">
              <h3>How It Works</h3>
              <div className="steps-grid">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Choose Your Goal</h4>
                    <p>Select frontend, backend, fullstack, or specialized paths</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Follow the Visual Path</h4>
                    <p>See exactly which technologies lead to others</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Learn & Practice</h4>
                    <p>Interactive cards with resources and real examples</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <motion.div 
            className="skills-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Explore Technologies by Category</h2>
            <p>Choose your learning path and discover the technologies that power modern applications</p>
          </motion.div>
          
          <div className="skills-grid">
            <motion.div 
              className="skill-category-card"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleSkillNavigation('frontend')}
            >
              <div className="skill-icon">
                <i className="fab fa-react"></i>
              </div>
              <h3>Frontend Development</h3>
              <p>React, Vue, Angular, and modern UI/UX technologies</p>
              <div className="skill-tech-list">
                <span>React</span>
                <span>Vue.js</span>
                <span>Angular</span>
                <span>TypeScript</span>
              </div>
              <button className="skill-explore-btn">Explore Frontend</button>
            </motion.div>

            <motion.div 
              className="skill-category-card"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={() => handleSkillNavigation('backend')}
            >
              <div className="skill-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>Backend Development</h3>
              <p>Node.js, Python, Java, and server-side technologies</p>
              <div className="skill-tech-list">
                <span>Node.js</span>
                <span>Python</span>
                <span>Java</span>
                <span>Express.js</span>
              </div>
              <button className="skill-explore-btn">Explore Backend</button>
            </motion.div>

            <motion.div 
              className="skill-category-card"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              onClick={() => handleSkillNavigation('database')}
            >
              <div className="skill-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3>Database Technologies</h3>
              <p>SQL, NoSQL, and modern database solutions</p>
              <div className="skill-tech-list">
                <span>MongoDB</span>
                <span>PostgreSQL</span>
                <span>Redis</span>
                <span>MySQL</span>
              </div>
              <button className="skill-explore-btn">Explore Database</button>
            </motion.div>

            <motion.div 
              className="skill-category-card"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              onClick={() => handleSkillNavigation('infrastructure')}
            >
              <div className="skill-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Infrastructure & DevOps</h3>
              <p>AWS, Docker, Kubernetes, and deployment tools</p>
              <div className="skill-tech-list">
                <span>AWS</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>CI/CD</span>
              </div>
              <button className="skill-explore-btn">Explore Infrastructure</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-glow" aria-hidden></div>
        <div className="container">
          <motion.div 
            className="features-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Everything You Need to Master Modern Development</h2>
          </motion.div>
          
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3>Interactive Tech Tree</h3>
              <p>Visual dependency mapping shows you exactly which technologies build on each other</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <i className="fas fa-route"></i>
              </div>
              <h3>Personalized Learning Paths</h3>
              <p>Get custom roadmaps based on your goals - frontend, backend, or fullstack</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <i className="fas fa-magic"></i>
              </div>
              <h3>Flip Card Learning</h3>
              <p>Engaging interactive cards with descriptions, use cases, and official resources</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Smart Search & Filter</h3>
              <p>Find any technology instantly and filter by category, difficulty, or popularity</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Mobile Responsive</h3>
              <p>Learn anywhere, anytime with fully responsive design that works on all devices</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Always Up-to-Date</h3>
              <p>Constantly updated with the latest technologies and industry best practices</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof-section">
        <div className="container">
          <motion.div 
            className="social-proof-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Trusted by Developers Worldwide</h2>
            
            <div className="testimonials-grid">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"FullstackSchool saved me months of confusion. The tech tree visualization is genius!"</p>
                </div>
                <div className="testimonial-author">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="Sarah Chen" />
                  <div>
                    <strong>Sarah Chen</strong>
                    <span>Frontend Developer at Meta</span>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"Finally, a clear roadmap for learning backend technologies. No more tutorial hell!"</p>
                </div>
                <div className="testimonial-author">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Mike Rodriguez" />
                  <div>
                    <strong>Mike Rodriguez</strong>
                    <span>Full Stack Developer</span>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"The interactive cards make learning new tech actually fun. Highly recommend!"</p>
                </div>
                <div className="testimonial-author">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" alt="Emily Johnson" />
                  <div>
                    <strong>Emily Johnson</strong>
                    <span>DevOps Engineer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="company-logos">
              <h4>Used by developers at</h4>
              <div className="logos-grid">
                <div className="company-logo" aria-hidden>
                  <svg width="80" height="28" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="28" rx="4" fill="#E6EEF8" opacity="0.06"/><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#94a3b8" fontSize="10">Google</text></svg>
                </div>
                <div className="company-logo" aria-hidden>
                  <svg width="80" height="28" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="28" rx="4" fill="#E6EEF8" opacity="0.06"/><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#94a3b8" fontSize="10">Microsoft</text></svg>
                </div>
                <div className="company-logo" aria-hidden>
                  <svg width="80" height="28" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="28" rx="4" fill="#E6EEF8" opacity="0.06"/><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#94a3b8" fontSize="10">Amazon</text></svg>
                </div>
                <div className="company-logo" aria-hidden>
                  <svg width="80" height="28" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="28" rx="4" fill="#E6EEF8" opacity="0.06"/><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#94a3b8" fontSize="10">Netflix</text></svg>
                </div>
                <div className="company-logo" aria-hidden>
                  <svg width="80" height="28" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="28" rx="4" fill="#E6EEF8" opacity="0.06"/><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#94a3b8" fontSize="10">Spotify</text></svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Accelerate Your Development Journey?</h2>
            <p>Join 10,000+ developers who are already learning smarter, not harder.</p>
            
            <form className="email-signup" onSubmit={handleEmailSubmit}>
              <input 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="cta-primary">
                <i className="fas fa-paper-plane"></i>
                Get Early Access
              </button>
            </form>
            
            <div className="cta-features">
              <div className="cta-feature">
                <i className="fas fa-check"></i>
                <span>Free forever plan</span>
              </div>
              <div className="cta-feature">
                <i className="fas fa-check"></i>
                <span>No credit card required</span>
              </div>
              <div className="cta-feature">
                <i className="fas fa-check"></i>
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;