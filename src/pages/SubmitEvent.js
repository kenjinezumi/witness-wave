import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import Accordion from 'react-bootstrap/Accordion';
import 'leaflet/dist/leaflet.css';
import '../submitEvent.css'; // Import the CSS file for styling

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
    return position === null ? null : <Marker position={position} />;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Submitted:', { ...form, position });
    // Handle saving the event, e.g., API call to your server
  };

  return (
    <div className={`submit-event-container ${theme}`}>
      <div className="map-container">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          className={theme === 'dark' ? 'dark-map' : 'light-map'}
        >
          <TileLayer
            url={
              theme === 'dark'
                ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
                : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            }
          />
          <MapClickHandler />
          {position && <Marker position={position} />}
        </MapContainer>
      </div>

      <h3 className={`add-event-title ${theme}`}>Add an Event</h3>

      <div className={`form-card ${theme}`}>
        <Accordion defaultActiveKey="0" className={theme}>
          {/* Event Details */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Event Details</Accordion.Header>
            <Accordion.Body>
              <div className="form-group">
                <label>Event Name:</label>
                <input
                  type="text"
                  name="eventName"
                  value={form.eventName}
                  onChange={handleInputChange}
                  required
                  className={theme}
                />
              </div>
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleInputChange}
                  required
                  className={theme}
                />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleInputChange}
                  required
                  className={theme}
                />
              </div>
              <div className="form-group">
                <label>Incident Type:</label>
                <select
                  name="incidentType"
                  value={form.incidentType}
                  onChange={handleInputChange}
                  required
                  className={theme}
                >
                  <option value="">Select Incident Type</option>
                  <option value="physical-violence">Physical Violence</option>
                  <option value="verbal-abuse">Verbal Abuse</option>
                  <option value="racial-discrimination">Racial Discrimination</option>
                </select>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* Demographics */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Demographics</Accordion.Header>
            <Accordion.Body>
              <div className="form-group">
                <label>Gender:</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleInputChange}
                  required
                  className={theme}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="form-group">
                <label>Ethnicity:</label>
                <select
                  name="ethnicity"
                  value={form.ethnicity}
                  onChange={handleInputChange}
                  required
                  className={theme}
                >
                  <option value="">Select Ethnicity</option>
                  <option value="black">Black</option>
                  <option value="hispanic">Hispanic</option>
                  <option value="white">White</option>
                  <option value="asian">Asian</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* Additional Information */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Additional Information</Accordion.Header>
            <Accordion.Body>
              <div className="form-group">
                <label>Weapon Used:</label>
                <select
                  name="weaponUsed"
                  value={form.weaponUsed}
                  onChange={handleInputChange}
                  required
                  className={theme}
                >
                  <option value="">Select Weapon Used</option>
                  <option value="firearm">Firearm</option>
                  <option value="taser">Taser</option>
                  <option value="baton">Baton</option>
                  <option value="none">None</option>
                </select>
              </div>

              <div className="form-group">
                <label>Location Type:</label>
                <select
                  name="locationType"
                  value={form.locationType}
                  onChange={handleInputChange}
                  required
                  className={theme}
                >
                  <option value="">Select Location Type</option>
                  <option value="residential">Residential</option>
                  <option value="public-space">Public Space</option>
                  <option value="commercial">Commercial Area</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* Other Details */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>Other Details</Accordion.Header>
            <Accordion.Body>
              <div className="form-group">
                <label>Resident Status:</label>
                <select
                  name="residentStatus"
                  value={form.residentStatus}
                  onChange={handleInputChange}
                  required
                  className={theme}
                >
                  <option value="">Select Resident Status</option>
                  <option value="permanent">Permanent Resident</option>
                  <option value="temporary">Temporary Resident</option>
                  <option value="undocumented">Undocumented</option>
                </select>
              </div>

              <div className="form-group">
                <label>Religion:</label>
                <select
                  name="religion"
                  value={form.religion}
                  onChange={handleInputChange}
                  required
                  className={theme}
                >
                  <option value="">Select Religion</option>
                  <option value="christian">Christian</option>
                  <option value="muslim">Muslim</option>
                  <option value="hindu">Hindu</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Sexual Orientation:</label>
                <select
                  name="sexualOrientation"
                  value={form.sexualOrientation}
                  onChange={handleInputChange}
                  required
                  className={theme}
                >
                  <option value="">Select Sexual Orientation</option>
                  <option value="heterosexual">Heterosexual</option>
                  <option value="homosexual">Homosexual</option>
                  <option value="bisexual">Bisexual</option>
                </select>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="submit-button-container">
          <button type="submit" className={`submit-button ${theme}`}>
            Submit Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitEvent;
