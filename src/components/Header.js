import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css'; 
import logo from '../assets/logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="WitnessWave Logo" className="logo-img" />
          <Link to="/" className="logo-text">WitnessWave</Link>
        </div>
        <div className="menu-container">
         
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/submit">Submit Event</Link></li>
            <li><Link to="/map-explorer">Map Explorer</Link></li>
            <li><Link to="/stories">Witness Stories</Link></li>
            <li><Link to="/analysis">Analysis</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;