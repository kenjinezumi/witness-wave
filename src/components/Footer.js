import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Footer.css';

const Footer = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeClick = (newTheme) => {
    setTheme(newTheme);
    // Implement logic to update the theme globally.
  };

  return (
    <footer className="footer">
      <div className="legal-info">
        <p>&copy; 2024 WitnessWave. All rights reserved.</p>
        <Link to="/privacy-policy">Privacy Policy</Link> |
        <Link to="/terms-of-service">Terms of Service</Link> |
        <Link to="/cookie-policy">Cookie Policy</Link>
      </div>
      <div className="theme-selector">
        <span
          className={`theme-option ${theme === 'light' ? 'selected' : ''}`}
          onClick={() => handleThemeClick('light')}
        >
          Light Theme
        </span>
        <span
          className={`theme-option ${theme === 'dark' ? 'selected' : ''}`}
          onClick={() => handleThemeClick('dark')}
        >
          Dark Theme
        </span>
      </div>
    </footer>
  );
};

export default Footer;