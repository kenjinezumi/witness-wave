import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import { MapContainer, TileLayer, Marker, Popup, useMap, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles.css';
import countries from './countries.json'; // List of countries

const Home = () => {
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

  // Function to query Nominatim API for country geocoding and bounding box
  const searchCountryAPI = async (country) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?country=${country}&format=json&limit=1`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch country location');
      }
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon, boundingbox } = data[0];
        const bounds = [
          [parseFloat(boundingbox[0]), parseFloat(boundingbox[2])], // SouthWest corner
          [parseFloat(boundingbox[1]), parseFloat(boundingbox[3])]  // NorthEast corner
        ];
        return { lat: parseFloat(lat), lon: parseFloat(lon), bounds };
      } else {
        alert('Country not found');
        return null;
      }
    } catch (error) {
      console.error('Error fetching country location:', error);
      return null;
    }
  };

  // Function to update map based on selected country
  const handleCountrySelect = async (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    if (country) {
      const coords = await searchCountryAPI(country);
      if (coords) {
        setMapCenter([coords.lat, coords.lon]);
        setCountryBounds(coords.bounds);
      }
    }
  };

  // Helper component to set map bounds
  const SetMapBounds = ({ bounds }) => {
    const map = useMap();
    useEffect(() => {
      if (bounds) {
        map.fitBounds(bounds);
        map.setMaxBounds(bounds);
      }
    }, [bounds, map]);
    return null;
  };

  // Highlight the selected country using GeoJSON layer
  const highlightCountry = (feature) => ({
    color: selectedCountry === feature.properties.ADMIN ? '#e63946' : '#ffffff',
    weight: selectedCountry === feature.properties.ADMIN ? 3 : 1,
    fillOpacity: selectedCountry === feature.properties.ADMIN ? 0.5 : 0.2,
  });

  // Example chart options for incidents by month
  const getOptions = () => ({
    responsive: true,
    backgroundColor: document.body.classList.contains('dark') ? '#1e1e1e' : '#ffffff',
    textStyle: {
      color: document.body.classList.contains('dark') ? '#f5f5f5' : '#333',
    },
    title: {
      text: 'Police Violence Statistics',
      left: 'center',
      textStyle: {
        color: document.body.classList.contains('dark') ? '#ffffff' : '#333',
      },
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisLine: { lineStyle: { color: document.body.classList.contains('dark') ? '#f5f5f5' : '#333' } },
      axisLabel: { color: document.body.classList.contains('dark') ? '#f5f5f5' : '#333' },
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: document.body.classList.contains('dark') ? '#f5f5f5' : '#333' } },
      axisLabel: { color: document.body.classList.contains('dark') ? '#f5f5f5' : '#333' },
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
    <div className={`paper ${document.body.classList.contains('dark') ? 'dark' : 'light'}`}>
      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-item">
          <label>Date From:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={`filter-input ${document.body.classList.contains('dark') ? 'dark' : 'light'}`}
          />
        </div>
        <div className="filter-item">
          <label>Date To:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className={`filter-input ${document.body.classList.contains('dark') ? 'dark' : 'light'}`}
          />
        </div>
        <div className="filter-item">
          <label>Incident Type:</label>
          <select
            value={incidentType}
            onChange={(e) => setIncidentType(e.target.value)}
            className={`filter-select ${document.body.classList.contains('dark') ? 'dark' : 'light'}`}
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
          <select onChange={handleCountrySelect} value={selectedCountry} className={`filter-select ${document.body.classList.contains('dark') ? 'dark' : 'light'}`}>
            <option value="">Choose a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <MapContainer 
          center={mapCenter} 
          minZoom={3} 
          maxZoom={8} 
          zoom={5} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url={
              document.body.classList.contains('dark')
                ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
                : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
            }
            attribution='&copy; OpenStreetMap contributors & CartoDB'
          />
          {countriesGeoJSON && (
            <GeoJSON data={countriesGeoJSON} style={highlightCountry} />
          )}
          <Marker position={mapCenter}>
            <Popup>
              Police Violence Incident <br /> Date: 2023-09-10.
            </Popup>
          </Marker>
          {countryBounds && <SetMapBounds bounds={countryBounds} />}
        </MapContainer>
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <div className="stats-item">
          <h3>Incidents by Month</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Distribution of Incident Types</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Incidents by Demographics</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Incidents by Time of Day</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Police Involved Violence</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Ethnicity of Victim</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Weapon Used in Incident</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Age Group of Victims</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Incident Location Types</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Injuries Severity</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Duration of Incidents</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Gender of Victims</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Declared Sexual Orientation</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Religion of Victims</h3>
          <ReactEcharts option={getOptions()} />
        </div>
        <div className="stats-item">
          <h3>Resident Status of Victims</h3>
          <ReactEcharts option={getOptions()} />
        </div>
      </div>
    </div>
  );
};

export default Home;