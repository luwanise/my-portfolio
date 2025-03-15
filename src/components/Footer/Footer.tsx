import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/luwanise" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://x.com/luwanise" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/in/praise-oladejo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
        
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
        <p className="copyright">
          &copy; {currentYear} Praise Oladejo. All rights reserved. Built with React and TypeScript.
        </p>
      </div>
    </footer>
  );
};

export default Footer;