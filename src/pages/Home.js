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
  const [searchLocation, setSearchLocation] = useState('');
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default map center
  const [selectedCountry, setSelectedCountry] = useState(''); // Selected country
  const [countriesGeoJSON, setCountriesGeoJSON] = useState(null); // GeoJSON for countries
  const [countryBounds, setCountryBounds] = useState(null); // Bounding box for selected country

  // Fetch GeoJSON data for countries on component mount
  useEffect(() => {
    const fetchCountriesGeoJSON = async () => {
      const response = await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson');
      const data = await response.json();
      setCountriesGeoJSON(data);
    };

    fetchCountriesGeoJSON();
  }, []);

  // Function to query Nominatim API for country geocoding and bounding box
  const searchCountryAPI = async (country) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?country=${country}&format=json&limit=1`
      );
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
    const coords = await searchCountryAPI(country);
    if (coords) {
      setMapCenter([coords.lat, coords.lon]); // Update map center
      setCountryBounds(coords.bounds); // Set country bounds for zoom/panning restriction
    }
  };

  // Helper component to set map bounds
  const SetMapBounds = ({ bounds }) => {
    const map = useMap();
    if (bounds) {
      map.fitBounds(bounds); // Fit the map to the selected country's bounds
      map.setMaxBounds(bounds); // Restrict panning outside the bounds
    }
    return null;
  };

  // Highlight the selected country using GeoJSON layer
  const highlightCountry = (feature) => {
    return {
      color: selectedCountry === feature.properties.ADMIN ? '#e63946' : '#ffffff',
      weight: selectedCountry === feature.properties.ADMIN ? 3 : 1,
      fillOpacity: selectedCountry === feature.properties.ADMIN ? 0.5 : 0.2,
    };
  };

  // Example chart options for incidents by month
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

  // Chart options for additional statistics
  const getIncidentTypeOptions = () => ({
    title: { text: 'Incident Type Distribution', left: 'center', textStyle: { color: '#ffffff' } },
    backgroundColor: '#1e1e1e',
    textStyle: { color: '#f5f5f5' },
    series: [
      {
        name: 'Incident Type',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 335, name: 'Physical Violence' },
          { value: 310, name: 'Verbal Abuse' },
          { value: 234, name: 'Racial Discrimination' },
        ],
        itemStyle: {
          color: (params) => {
            const colors = ['#e63946', '#f5b041', '#76d7c4'];
            return colors[params.dataIndex];
          },
        },
      },
    ],
  });

  const getDemographicsOptions = () => ({
    title: { text: 'Incidents by Demographics', left: 'center', textStyle: { color: '#ffffff' } },
    backgroundColor: '#1e1e1e',
    textStyle: { color: '#f5f5f5' },
    series: [
      {
        type: 'pie',
        data: [
          { value: 60, name: 'Men' },
          { value: 40, name: 'Women' },
        ],
      },
    ],
  });

  const getTimeOfDayOptions = () => ({
    title: { text: 'Incidents by Time of Day', left: 'center', textStyle: { color: '#ffffff' } },
    backgroundColor: '#1e1e1e',
    textStyle: { color: '#f5f5f5' },
    xAxis: {
      type: 'category',
      data: ['Morning', 'Afternoon', 'Evening', 'Night'],
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
        data: [50, 100, 150, 75],
        itemStyle: {
          color: '#e63946',
        },
      },
    ],
  });

  // Chart options for police involved violence, ethnicity of the victim, and weapon used
  const getPoliceInvolvedOptions = () => ({
    title: { text: 'Police Involved Violence', left: 'center', textStyle: { color: '#ffffff' } },
    backgroundColor: '#1e1e1e',
    textStyle: { color: '#f5f5f5' },
    series: [
      {
        type: 'pie',
        data: [
          { value: 70, name: 'Involving Police' },
          { value: 30, name: 'Not Involving Police' },
        ],
      },
    ],
  });

  const getEthnicityOptions = () => ({
    title: { text: 'Ethnicity of Victim', left: 'center', textStyle: { color: '#ffffff' } },
    backgroundColor: '#1e1e1e',
    textStyle: { color: '#f5f5f5' },
    series: [
      {
        type: 'pie',
        data: [
          { value: 40, name: 'Black' },
          { value: 30, name: 'Hispanic' },
          { value: 20, name: 'White' },
          { value: 10, name: 'Asian' },
        ],
      },
    ],
  });

  const getWeaponUsedOptions = () => ({
    title: { text: 'Weapon Used in Incident', left: 'center', textStyle: { color: '#ffffff' } },
    backgroundColor: '#1e1e1e',
    textStyle: { color: '#f5f5f5' },
    series: [
      {
        type: 'pie',
        data: [
          { value: 50, name: 'Firearm' },
          { value: 25, name: 'Taser' },
          { value: 15, name: 'Baton' },
          { value: 10, name: 'None' },
        ],
      },
    ],
  });

  // Chart options for age group of victims, incident location types, injuries severity, and duration of incidents
  const getAgeGroupOptions = () => ({
    title: { text: 'Age Group of Victims', left: 'center', textStyle: { color: '#ffffff' } },
    backgroundColor: '#1e1e1e',
    textStyle: { color: '#f5f5f5' },
    series: [
      {
        type: 'pie',
        data: [
          { value: 20, name: 'Children (0-17)' },
          { value: 40, name: 'Young Adults (18-35)' },
          { value: 25, name: 'Adults (36-60)' },
          { value: 15, name: 'Elderly (60+)' },
        ],
      },
    ],
  });

  const getLocationTypeOptions = () => ({
    title: { text: 'Incident Location Types', left: 'center', textStyle: { color: '#ffffff' } },
    backgroundColor: '#1e1e1e',
    textStyle: { color: '#f5f5f5' },
    series: [
      {
        type: 'pie',
        data: [
          { value: 30, name: 'Residential' },
          { value: 25, name: 'Public Space' },
          { value: 20, name: 'Commercial Area' },
          { value: 25, name: 'Other' },
        ],
      },
    ],
  });

  const getInjuriesSeverityOptions = () => ({
    title: { text: 'Injuries Severity', left: 'center', textStyle: { color: '#ffffff' } },
    backgroundColor: '#1e1e1e',
    textStyle: { color: '#f5f5f5' },
    series: [
      {
        type: 'pie',
        data: [
          { value: 50, name: 'Minor' },
          { value: 30, name: 'Severe' },
          { value: 20, name: 'Fatal' },
        ],
      },
    ],
  });

  const getDurationOptions = () => ({
    title: { text: 'Duration of Incidents', left: 'center', textStyle: { color: '#ffffff' } },
    backgroundColor: '#1e1e1e',
    textStyle: { color: '#f5f5f5' },
    xAxis: {
      type: 'category',
      data: ['<10 mins', '10-30 mins', '>30 mins'],
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
        data: [80, 100, 50],
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
        {/* Country Dropdown */}
        <div className="filter-item">
          <label>Select Country:</label>
          <select onChange={handleCountrySelect}>
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
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
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
          <ReactEcharts option={getIncidentTypeOptions()} />
        </div>
        <div className="stats-item">
          <h3>Incidents by Demographics</h3>
          <ReactEcharts option={getDemographicsOptions()} />
        </div>
        <div className="stats-item">
          <h3>Incidents by Time of Day</h3>
          <ReactEcharts option={getTimeOfDayOptions()} />
        </div>
        <div className="stats-item">
          <h3>Police Involved Violence</h3>
          <ReactEcharts option={getPoliceInvolvedOptions()} />
        </div>
        <div className="stats-item">
          <h3>Ethnicity of Victim</h3>
          <ReactEcharts option={getEthnicityOptions()} />
        </div>
        <div className="stats-item">
          <h3>Weapon Used in Incident</h3>
          <ReactEcharts option={getWeaponUsedOptions()} />
        </div>
        <div className="stats-item">
          <h3>Age Group of Victims</h3>
          <ReactEcharts option={getAgeGroupOptions()} />
        </div>
        <div className="stats-item">
          <h3>Incident Location Types</h3>
          <ReactEcharts option={getLocationTypeOptions()} />
        </div>
        <div className="stats-item">
          <h3>Injuries Severity</h3>
          <ReactEcharts option={getInjuriesSeverityOptions()} />
        </div>
        <div className="stats-item">
          <h3>Duration of Incidents</h3>
          <ReactEcharts option={getDurationOptions()} />
        </div>
      </div>
    </div>
  );
};

export default Home;