import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SubmitEvent from './pages/MapPage';
import Contact from './pages/Contact';
import About from './pages/About';
import MapExplorer from './pages/MapExplorer'; 

function App() {
  return (
    <Router>
      <Header />
      <div className="paper">  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitEvent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/map-explorer" element={<MapExplorer />} /> 

        </Routes>
      </div>
      <Footer />

    </Router>
  );
}

export default App;
