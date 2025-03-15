import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/luwanise" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/praise-oladejo/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/luwanise" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
        <p className="copyright">
          &copy; {currentYear} Praise Oladejo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;