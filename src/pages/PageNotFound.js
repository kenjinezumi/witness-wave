import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px', padding: '20px' }}>
      <h1 style={{ fontSize: '64px', color: '#000' }}>🚨 404 - Lost in Space! 🚀</h1>
      <p style={{ fontSize: '24px', marginTop: '20px', color: '#000' }}>
        Uh-oh! It seems like the page you're looking for has drifted off into the unknown. 😕
      </p>
      <p style={{ fontSize: '22px', marginTop: '20px', color: '#000' }}>
        But don't panic! 🧑‍🚀 We've got you covered. Let's get you back on track!
      </p>
      <p style={{ fontSize: '20px', marginTop: '20px', color: '#000' }}>
        🚀 <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>Zoom back to the Home Page</Link> or explore another link!
      </p>
      <p style={{ fontSize: '18px', marginTop: '10px', color: '#000' }}>
        (P.S. Maybe grab a snack on the way 🍕)
      </p>
    </div>
  );
};

export default PageNotFound;
