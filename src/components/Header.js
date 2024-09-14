import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home (Map & Stats)</Link></li>
        <li><Link to="/submit">Submit Event</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
