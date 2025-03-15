import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  // Add scroll event to show/hide back to top button
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Track scroll position for animations and header changes
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setShowBackToTop(position > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Animation logic for section elements
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section > div');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      <Header name="Praise Oladejo" title="Mobile App Developer" scrolled={scrollPosition > 50} />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <div 
        className={`back-to-top ${showBackToTop ? 'show' : ''}`} 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </div>
    </div>
  );
}

export default App;