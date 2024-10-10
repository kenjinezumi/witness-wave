import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTelegram, FaSms, FaEnvelope, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'; // Import necessary icons
import '../styles/Footer.css';

const Footer = ({ theme, handleThemeClick }) => {
  return (
    <footer className="footer">
      <div className="legal-info">
        <p>&copy; 2024 WitnessWave. All rights reserved.</p>
        <Link to="/privacy-policy">Privacy Policy</Link> |
        <Link to="/terms-of-service">Terms of Service</Link> |
        <Link to="/cookie-policy">Cookie Policy</Link> |
        <Link to="/developer">Developers</Link>
      </div>

      {/* Share icons on the same line */}
      <div className="share-icons">
        <a
          href="https://wa.me/?text=Check%20out%20WitnessWave%3A%20https%3A%2F%2Fwww.witnesswave.com"
          target="_blank"
          rel="noopener noreferrer"
          className="share-icon"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://t.me/share/url?url=https%3A%2F%2Fwww.witnesswave.com&text=Check%20out%20WitnessWave"
          target="_blank"
          rel="noopener noreferrer"
          className="share-icon"
          aria-label="Share on Telegram"
        >
          <FaTelegram size={24} />
        </a>
        <a
          href="sms:?&body=Check%20out%20WitnessWave%20https%3A%2F%2Fwww.witnesswave.com"
          className="share-icon"
          aria-label="Share via SMS"
        >
          <FaSms size={24} />
        </a>
        <a
          href="mailto:?subject=Check%20out%20WitnessWave&body=Check%20out%20this%20amazing%20platform%3A%20https%3A%2F%2Fwww.witnesswave.com"
          className="share-icon"
          aria-label="Share via Email"
        >
          <FaEnvelope size={24} />
        </a>

        {/* Social media sharing */}
        <span className="divider">|</span>
        <a
          href="https://www.instagram.com/?url=https%3A%2F%2Fwww.witnesswave.com"
          target="_blank"
          rel="noopener noreferrer"
          className="share-icon"
          aria-label="Share on Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://twitter.com/intent/tweet?text=Check%20out%20WitnessWave&url=https%3A%2F%2Fwww.witnesswave.com"
          target="_blank"
          rel="noopener noreferrer"
          className="share-icon"
          aria-label="Share on Twitter"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.tiktok.com/share?url=https%3A%2F%2Fwww.witnesswave.com"
          target="_blank"
          rel="noopener noreferrer"
          className="share-icon"
          aria-label="Share on TikTok"
        >
          <FaTiktok size={24} />
        </a>
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
