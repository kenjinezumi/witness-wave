import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SubmitEvent from './pages/SubmitEvent';
import Contact from './pages/Contact';
import About from './pages/About';
import MapExplorer from './pages/MapExplorer';
import Developer from './pages/Developer';
// import Analysis from './pages/Analysis';
import Stories from './pages/Stories';
import CookieConsent from './pages/CookieConsent';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndServices from './pages/TermsAndServices';
import PageNotFound from './pages/PageNotFound'; 
import './styles/popup.css';
function App() {
  const [theme, setTheme] = useState('light');
  const [showPopup, setShowPopup] = useState(true); // State to handle popup visibility

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeClick = (newTheme) => {
    setTheme(newTheme);
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup when the user clicks "Close"
  };

  return (
    <Router>
      <Header />
      <div className="paper">
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Early Version</h2>

              <p>
                This is an early stage version (V.0.0.0) of the app and it's not yet connected to the backend. 
                We're using this version to validate the concept and gather initial feedback. 
                Please note that multiple languages and localization will be added in future versions.
              </p>
            
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/submit" element={<SubmitEvent theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/map-explorer" element={<MapExplorer theme={theme} />} />
          <Route path="/developer" element={<Developer theme={theme} />} />
          {/* <Route path="/analysis" element={<Analysis theme={theme} />} /> */}
          <Route path="/stories" element={<Stories theme={theme} />} />
          <Route path="/cookie-policy" element={<CookieConsent />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsAndServices />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer theme={theme} handleThemeClick={handleThemeClick} />
    </Router>
  );
}

export default App;
