import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Home = () => {
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
    <div>
      {/* Map Section */}
      <div style={{ height: '400px', marginBottom: '20px' }}>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
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
