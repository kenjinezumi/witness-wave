import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import countries from './countries.json'; // List of countries
import '../styles.css';

const Stories = ({ theme = 'light' }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(''); // Selected country

  const handleCountrySelect = async (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    // Additional functionality for selecting country can go here
  };

  return (
    <div className={`paper ${theme}`}>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Stories</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-item">
          <label>Date From:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={`filter-input ${theme}`}
          />
        </div>
        <div className="filter-item">
          <label>Date To:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className={`filter-input ${theme}`}
          />
        </div>
        <div className="filter-item">
          <label>Incident Type:</label>
          <select
            value={incidentType}
            onChange={(e) => setIncidentType(e.target.value)}
            className={`filter-select ${theme}`}
          >
            <option value="">All Types</option>
            <option value="physical-violence">Physical Violence</option>
            <option value="verbal-abuse">Verbal Abuse</option>
            <option value="racial-discrimination">Racial Discrimination</option>
          </select>
        </div>
        {/* Country Dropdown */}
        <div className="filter-item">
          <label>Select Country:</label>
          <select onChange={handleCountrySelect} value={selectedCountry} className={`filter-select ${theme}`}>
            <option value="">Choose a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Placeholder text for development */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '48px' }}>In development</h1>
      </div>
    </div>
  );
};

export default Stories;
