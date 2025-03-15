import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

interface HeaderProps {
  name: string;
  title: string;
}

const Header = ({ name, title }: HeaderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-content">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
        
        <div className="mobile-nav-toggle" onClick={toggleNav}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={isNavOpen ? 'nav-open' : ''}>
          <ul>
            <li><a href="#about" onClick={() => setIsNavOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setIsNavOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsNavOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;