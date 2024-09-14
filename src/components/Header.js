import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">WitnessWave</Link> {/* You can change this text */}
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/submit">Submit Event</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
