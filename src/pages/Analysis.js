import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import * as echarts from 'echarts';
import 'leaflet/dist/leaflet.css';
import '../styles.css';
import countries from '../data/countries.json'; 
import darkTheme from '../themes/darkTheme.json';
import lightTheme from '../themes/lightTheme.json';

echarts.registerTheme('dark', darkTheme);
echarts.registerTheme('light', lightTheme);

const Analysis = ({ theme = 'light' }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default map center
  const [selectedCountry, setSelectedCountry] = useState(''); // Selected country
  const [countriesGeoJSON, setCountriesGeoJSON] = useState(null); // GeoJSON for countries
  const [countryBounds, setCountryBounds] = useState(null); // Bounding box for selected country

  // Fetch GeoJSON data for countries on component mount
  useEffect(() => {
    const fetchCountriesGeoJSON = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson');
        if (!response.ok) {
          throw new Error('Failed to fetch GeoJSON data');
        }
        const data = await response.json();
        setCountriesGeoJSON(data);
      } catch (error) {
        console.error('Error fetching countries GeoJSON:', error);
      }
    };

    fetchCountriesGeoJSON();
  }, []);

  const handleCountrySelect = async (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    // Additional functionality for selecting country will go here
  };

  return (
    <div className={`paper ${theme}`}>

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

      {/* Additional content such as charts and maps can be added here */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '48px' }}>In development</h1>
        <h1 style={{ fontSize: '48px' }}>Coming Soon!!!!</h1>
        <h1 style={{ fontSize: '48px' }}>KENJI WORKING ON IT!!!!</h1>


      </div>
    </div>
  );
};

export default Analysis;
