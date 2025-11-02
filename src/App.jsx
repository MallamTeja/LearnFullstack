import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import SearchBar from './components/SearchBar';
import CategorySelector from './components/CategorySelector';
import TechGrid from './components/TechGrid';
import TechTree from './components/TechTree';
import Footer from './components/Footer';

// Data
import techData from './data/techlist.json';

// Styles
import './styles/globals.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredTechnologies, setFilteredTechnologies] = useState(techData.technologies);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    let filtered = techData.technologies;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(tech => tech.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter((tech) => {
        // name, short description (desc), category
        const nameMatch = tech.name && tech.name.toLowerCase().includes(q);
        const descMatch = tech.desc && tech.desc.toLowerCase().includes(q);
        const categoryMatch = tech.category && tech.category.toLowerCase().includes(q);

        // dependencies and leads_to arrays
        const deps = Array.isArray(tech.dependencies) ? tech.dependencies.join(' ').toLowerCase() : '';
        const leads = Array.isArray(tech.leads_to) ? tech.leads_to.join(' ').toLowerCase() : '';
        const depsMatch = deps.includes(q);
        const leadsMatch = leads.includes(q);

        return nameMatch || descMatch || categoryMatch || depsMatch || leadsMatch;
      });
    }

    setFilteredTechnologies(filtered);
  }, [searchTerm, selectedCategory]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage />;
      
      case 'frontend':
      case 'backend':
      case 'database':
      case 'infrastructure':
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
                  {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} Technologies
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
                  Explore the essential {currentPage} technologies that power modern applications
                </p>
              </motion.div>

              <CategorySelector
                categories={techData.categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              <TechGrid technologies={filteredTechnologies} />
            </div>
          </motion.div>
        );

      case 'techtree':
        return <TechTree />;

      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* Global search available on all pages except home */}
      {currentPage !== 'home' && (
        <div style={{ paddingTop: '80px' }}>
          <div className="container">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>
      )}
      
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>

      {currentPage !== 'home' && <Footer />}
    </div>
  );
}

export default App;