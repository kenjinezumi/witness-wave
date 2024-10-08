import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SubmitEvent from './pages/MapPage';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />
      <div className="paper">  {/* Main content wrapper */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitEvent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
