import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapPage = () => {
  const [position, setPosition] = useState(null);
  const [form, setForm] = useState({
    eventName: '',
    date: '',
    description: '',
  });

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });
    return position === null ? null : (
      <Marker position={position} />
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Submitted:', { ...form, position });
    // Here you would handle saving the event (e.g., make an API call to your server).
  };

  return (
    <div>
      <h2>Submit Event</h2>
      <div style={{ height: '400px', marginBottom: '20px' }}>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClickHandler />
          {position && (
            <Marker position={position} />
          )}
        </MapContainer>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" name="eventName" value={form.eventName} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" value={form.date} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={form.description} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Submit Event</button>
      </form>
    </div>
  );
};

export default MapPage;
