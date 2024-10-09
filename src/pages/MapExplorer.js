import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles.css';

const countries = [
  "United States", "Canada", "United Kingdom", "France", "Germany", "Australia", "India", "China", "Brazil", "South Africa"
];

const MapExplorer = ({ theme = 'light' }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default to London
  const [searchLocation, setSearchLocation] = useState(null);

  useEffect(() => {
    console.log('Current theme:', theme);
  }, [theme]);

  // Function to query Nominatim API for geocoding
  const searchLocationAPI = async (query) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        return { lat: parseFloat(lat), lon: parseFloat(lon) };
      } else {
        alert('Location not found');
        return null;
      }
    } catch (error) {
      console.error('Error fetching location:', error);
      return null;
    }
  };

  // Handle country selection from dropdown
  const handleCountrySelect = async (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    const coords = await searchLocationAPI(country);
    if (coords) {
      setMapCenter([coords.lat, coords.lon]); // Center the map on the selected country
      setSearchLocation(coords);
    }
  };

  // Handle search input (city, postcode, street, etc.)
  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      const coords = await searchLocationAPI(query);
      if (coords) {
        setMapCenter([coords.lat, coords.lon]); // Center the map on the search result
        setSearchLocation(coords);
      }
    }
  };

  // Helper component to update map center dynamically
  const SetMapCenter = ({ center }) => {
    const map = useMap();
    if (center) {
      map.setView(center, 10); // Update map center with zoom level
    }
    return null;
  };

  return (
    <div className={`paper ${theme}`}>
      <div className="filter-section">
        <div className="filter-item">
          <label>Date From:</label>
          <input
            type="date"
            className={`filter-input ${theme}`}
          />
        </div>
        <div className="filter-item">
          <label>Date To:</label>
          <input
            type="date"
            className={`filter-input ${theme}`}
          />
        </div>
        <div className="filter-item">
          <label>Incident Type:</label>
          <select className={`filter-select ${theme}`}>
            <option value="">All Types</option>
            <option value="physical-violence">Physical Violence</option>
            <option value="verbal-abuse">Verbal Abuse</option>
            <option value="racial-discrimination">Racial Discrimination</option>
          </select>
        </div>
        <div className="filter-item">
          <label>Select a Location:</label>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Enter city, postcode, or street"
            className={`filter-input ${theme}`}
          />
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <MapContainer center={mapCenter} zoom={5} style={{ height: '500px', width: '100%' }}
          className={theme === 'dark' ? 'dark-map' : 'light-map'}>
          <TileLayer
            url={
              theme === 'dark'
                ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
                : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            }
            attribution='&copy; OpenStreetMap contributors & CartoDB'
          />
          {searchLocation && <Marker position={searchLocation}></Marker>}
          <SetMapCenter center={mapCenter} />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapExplorer;