import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Home = () => {
  const getOptions = () => ({
    title: {
      text: 'Statistics of Police Violence',
    },
    tooltip: {},
    xAxis: {
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    yAxis: {},
    series: [{
      name: 'Incidents',
      type: 'bar',
      data: [120, 200, 150, 80, 70, 110, 130],
    }],
  });

  return (
    <div>
      {/* Map Section */}
      <div style={{ height: '400px', marginBottom: '20px' }}>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              Police Violence Incident <br /> Date: 2023-09-10.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Statistics Section */}
      <div>
        <h2>Statistics of Incidents</h2>
        <ReactEcharts option={getOptions()} />
      </div>
    </div>
  );
};

export default Home;
