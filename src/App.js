import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SubmitEvent from './pages/MapPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="paper">  {/* Main content wrapper */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitEvent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
