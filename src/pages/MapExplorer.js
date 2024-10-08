import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const countries = [
  "United States", "Canada", "United Kingdom", "France", "Germany", "Australia", "India", "China", "Brazil", "South Africa"
];

const MapExplorer = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default to London
  const [searchLocation, setSearchLocation] = useState(null);

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
  const handleSearch = async () => {
    if (searchQuery) {
      const coords = await searchLocationAPI(searchQuery);
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
    <div className="map-explorer">
      {/* Country Dropdown */}
      <div className="location-picker">
        <label>Select a Country:</label>
        <select value={selectedCountry} onChange={handleCountrySelect}>
          <option value="">-- Select Country --</option>
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>

      {/* Search Input */}
      <div className="search-box">
        <label>Or Search by City, Postcode, or Street:</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter city, postcode, or street"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <MapContainer center={mapCenter} zoom={5} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {searchLocation && <Marker position={searchLocation}></Marker>}
          <SetMapCenter center={mapCenter} />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapExplorer;
