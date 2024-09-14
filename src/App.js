import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import Header from './components/Header';
import './styles.css';  // Importing the CSS

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
