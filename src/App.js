import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SubmitEvent from './pages/SubmitEvent';
import Contact from './pages/Contact';
import About from './pages/About';
import MapExplorer from './pages/MapExplorer';

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/map-explorer" element={<MapExplorer theme={theme}/>} />
        </Routes>
      </div>
      <Footer theme={theme} handleThemeClick={handleThemeClick} />
    </Router>
  );
}

export default App;
