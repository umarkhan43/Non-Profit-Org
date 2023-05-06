import React, { useState, useEffect } from 'react';
import logo from "../Assets/logo.png"
import './Style.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <a href="#" className="navbar-logo" id='home'>
        <div className="logo"> <img src={logo} alt="" /></div>
      </a>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
        <li className="navbar-item">
          <a href="#banner" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="#about" className="navbar-link">
            About
          </a>
        </li>
        <li className="navbar-item">
          <a href="#cause" className="navbar-link">
            Cause
          </a>
        </li>
        <li className="navbar-item">
          <a href="#events" className="navbar-link">
            Events
          </a>
        </li>
        <li className="navbar-item">
          <a href="#news" className="navbar-link">
            News
          </a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="navbar-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
