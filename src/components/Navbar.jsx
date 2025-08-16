import { useState, useEffect } from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const handleNavClick = (e, targetId) => {
  e.preventDefault();
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  setIsMenuOpen(false);
};

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
            <img className='nav-logo' src={logo} alt="logo" />
          <span className="brand-text"> Electricals</span>
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Us</a>
          <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
          <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')}>Gallery</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
