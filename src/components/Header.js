import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Header.css'; 
import logo from '../assets/logo.png'; 

const Header = () => {
  const location = useLocation(); // Get the current location

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="WitnessWave Logo" className="logo-img" />
          <Link to="/" className="logo-text">WitnessWave</Link>
        </div>
        <div className="menu-container">
          <ul className="nav-links">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/submit" className={location.pathname === '/submit' ? 'active-link' : ''}>Submit Event</Link>
            </li>
            <li>
              <Link to="/map-explorer" className={location.pathname === '/map-explorer' ? 'active-link' : ''}>Map Explorer</Link>
            </li>
            <li>
              <Link to="/stories" className={location.pathname === '/stories' ? 'active-link' : ''}>Witness Stories</Link>
            </li>
            <li>
              <Link to="/analysis" className={location.pathname === '/analysis' ? 'active-link' : ''}>Analysis</Link>
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
