import React, { useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles.css';

const Home = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default map center

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

  // Function to update map based on search input
  const handleSearch = async () => {
    if (searchLocation) {
      const coords = await searchLocationAPI(searchLocation);
      if (coords) {
        setMapCenter([coords.lat, coords.lon]); // Update map center based on search result
      }
    }
  };

  // Helper component to move the map center
  const SetMapCenter = ({ coords }) => {
    const map = useMap();
    if (coords) {
      map.setView(coords, 13); // Update map center
    }
    return null;
  };

  // Example chart options for statistics
  const getOptions = () => ({
    backgroundColor: '#1e1e1e',
    textStyle: {
      color: '#f5f5f5',
    },
    title: {
      text: 'Police Violence Statistics',
      left: 'center',
      textStyle: {
        color: '#ffffff',
      },
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisLine: { lineStyle: { color: '#f5f5f5' } },
      axisLabel: { color: '#f5f5f5' },
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#f5f5f5' } },
      axisLabel: { color: '#f5f5f5' },
    },
    series: [
      {
        name: 'Incidents',
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130],
        itemStyle: {
          color: '#e63946',
        },
      },
    ],
  });

  return (
    <div className="paper">
      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-item">
          <label>Date From:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="filter-item">
          <label>Date To:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="filter-item">
          <label>Incident Type:</label>
          <select
            value={incidentType}
            onChange={(e) => setIncidentType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="physical-violence">Physical Violence</option>
            <option value="verbal-abuse">Verbal Abuse</option>
            <option value="racial-discrimination">Racial Discrimination</option>
          </select>
        </div>
        <div className="filter-item search">
          <label>Search Location:</label>
          <input
            type="text"
            placeholder="Enter location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
      <MapContainer 
  center={mapCenter} 
  minZoom={3} 
  maxZoom={8} 
  zoom={5}  // Set default zoom level
  style={{ height: '100%', width: '100%' }}
  scrollWheelZoom={false}  // Optionally disable zooming with scroll
>
        <TileLayer
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  minZoom={3}
  maxZoom={8}
/>

          <Marker position={mapCenter}>
            <Popup>
              Police Violence Incident <br /> Date: 2023-09-10.
            </Popup>
          </Marker>
          <SetMapCenter coords={mapCenter} />
        </MapContainer>
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <div className="stats-item">
          <h3>Incidents by Month</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        {/* You can add more stats items here */}
      </div>
    </div>
  );
};

export default Home;
