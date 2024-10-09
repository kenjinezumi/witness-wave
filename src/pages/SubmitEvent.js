import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const SubmitEvent = ({ theme }) => {
  const [position, setPosition] = useState(null);
  const [form, setForm] = useState({
    eventName: '',
    date: '',
    description: '',
    incidentType: '',
    gender: '',
    ethnicity: '',
    weaponUsed: '',
    locationType: '',
    ageGroup: '',
    timeOfDay: '',
    residentStatus: '',
    religion: '',
    sexualOrientation: '',
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
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}
          className={theme === 'dark' ? 'dark-map' : 'light-map'}>
          <TileLayer
            url={
              theme === 'dark'
                ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
                : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            }
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
        <label>
          Incident Type:
          <select name="incidentType" value={form.incidentType} onChange={handleInputChange} required>
            <option value="">Select Incident Type</option>
            <option value="physical-violence">Physical Violence</option>
            <option value="verbal-abuse">Verbal Abuse</option>
            <option value="racial-discrimination">Racial Discrimination</option>
          </select>
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={form.gender} onChange={handleInputChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label>
          Ethnicity:
          <select name="ethnicity" value={form.ethnicity} onChange={handleInputChange} required>
            <option value="">Select Ethnicity</option>
            <option value="black">Black</option>
            <option value="hispanic">Hispanic</option>
            <option value="white">White</option>
            <option value="asian">Asian</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Weapon Used:
          <select name="weaponUsed" value={form.weaponUsed} onChange={handleInputChange} required>
            <option value="">Select Weapon Used</option>
            <option value="firearm">Firearm</option>
            <option value="taser">Taser</option>
            <option value="baton">Baton</option>
            <option value="none">None</option>
          </select>
        </label>
        <br />
        <label>
          Location Type:
          <select name="locationType" value={form.locationType} onChange={handleInputChange} required>
            <option value="">Select Location Type</option>
            <option value="residential">Residential</option>
            <option value="public-space">Public Space</option>
            <option value="commercial">Commercial Area</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Age Group:
          <select name="ageGroup" value={form.ageGroup} onChange={handleInputChange} required>
            <option value="">Select Age Group</option>
            <option value="children">Children (0-17)</option>
            <option value="young-adults">Young Adults (18-35)</option>
            <option value="adults">Adults (36-60)</option>
            <option value="elderly">Elderly (60+)</option>
          </select>
        </label>
        <br />
        <label>
          Time of Day:
          <select name="timeOfDay" value={form.timeOfDay} onChange={handleInputChange} required>
            <option value="">Select Time of Day</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
            <option value="night">Night</option>
          </select>
        </label>
        <br />
        <label>
          Resident Status:
          <select name="residentStatus" value={form.residentStatus} onChange={handleInputChange} required>
            <option value="">Select Resident Status</option>
            <option value="permanent">Permanent Resident</option>
            <option value="temporary">Temporary Resident</option>
            <option value="undocumented">Undocumented</option>
          </select>
        </label>
        <br />
        <label>
          Religion:
          <select name="religion" value={form.religion} onChange={handleInputChange} required>
            <option value="">Select Religion</option>
            <option value="christian">Christian</option>
            <option value="muslim">Muslim</option>
            <option value="hindu">Hindu</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Sexual Orientation:
          <select name="sexualOrientation" value={form.sexualOrientation} onChange={handleInputChange} required>
            <option value="">Select Sexual Orientation</option>
            <option value="heterosexual">Heterosexual</option>
            <option value="homosexual">Homosexual</option>
            <option value="bisexual">Bisexual</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit Event</button>
      </form>
    </div>
  );
};

export default SubmitEvent;