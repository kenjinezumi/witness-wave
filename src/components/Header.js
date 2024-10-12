import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if menu is open

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="WitnessWave Logo" className="logo-img" />
          <Link to="/" className="logo-text">WitnessWave</Link>
        </div>
        <div className="menu-container">
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </div>
          {/* Conditional class based on whether menu is open */}
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/submit" className={location.pathname === '/submit' ? 'active-link' : ''}>Tell us</Link>
            </li>
            <li>
              <Link to="/map-explorer" className={location.pathname === '/map-explorer' ? 'active-link' : ''}>Map Explorer</Link>
            </li>
            <li>
              <Link to="/stories" className={location.pathname === '/stories' ? 'active-link' : ''}>Their Stories</Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
