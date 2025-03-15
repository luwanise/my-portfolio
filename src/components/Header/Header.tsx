import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

interface HeaderProps {
  name: string;
  title: string;
  scrolled: boolean;
}

const Header = ({ name, title, scrolled }: HeaderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close mobile nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isNavOpen && !target.closest('nav') && !target.closest('.mobile-nav-toggle')) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="header-content">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
        
        <button className="mobile-nav-toggle" onClick={toggleNav} aria-label="Toggle navigation">
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={isNavOpen ? 'nav-open' : ''}>
          <ul>
            <li>
              <a 
                href="#about" 
                onClick={() => setIsNavOpen(false)}
                className={activeSection === 'about' ? 'active' : ''}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={() => setIsNavOpen(false)}
                className={activeSection === 'projects' ? 'active' : ''}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={() => setIsNavOpen(false)}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;