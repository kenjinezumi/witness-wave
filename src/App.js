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
import Analysis from './pages/Analysis';
import Stories from './pages/Stories';
import CookieConsent from './pages/CookieConsent';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndServices from './pages/TermsAndServices';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeClick = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <Router>
      <Header />
      <div className="paper">
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/submit" element={<SubmitEvent theme={theme}/>} />
          <Route path="/contact" element={<Contact theme={theme}/>} />
          <Route path="/about" element={<About theme={theme}/>} />
          <Route path="/map-explorer" element={<MapExplorer theme={theme}/>} />
          <Route path="/developer" element={<Developer theme={theme}/>} />
          <Route path="/analysis" element={<Analysis theme={theme}/>} />
          <Route path="/stories" element={<Stories theme={theme}/>} />
          <Route path="/cookie-policy" element={<CookieConsent/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-of-service" element={<TermsAndServices/>} />


        </Routes>
      </div>
      <Footer theme={theme} handleThemeClick={handleThemeClick} />
    </Router>
  );
}

export default App;
