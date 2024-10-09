import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import countries from './countries.json'; // List of countries
import '../Stories.css';

const storiesData = [
  {
    title: "The Stand Against Injustice",
    description: "On a cold November evening, a group of protesters gathered to challenge systemic racism. Their chants echoed through the streets, pushing against the barriers of injustice. This is their story of resilience and hope.",
  },
  {
    title: "A Voice Silenced",
    description: "In the wake of growing unrest, this story highlights the bravery of a young woman who stood up for her rights, despite the overwhelming oppression. Her courage sparked change in her community.",
  },
  {
    title: "The Fight for Equality",
    description: "This powerful account details the struggles of a marginalized group in their fight against discrimination. Their persistence, even when ignored, serves as a reminder of the importance of equality.",
  },
  // Add more stories as needed...
];

const Stories = ({ theme = 'light' }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handleCountrySelect = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
  };

  // Swipe handlers for navigating stories
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
  });

  const handleNext = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === storiesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === 0 ? storiesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`paper ${theme}`}>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-item">
          <label>Date From:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={`filter-input ${theme}`}
          />
        </div>
        <div className="filter-item">
          <label>Date To:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className={`filter-input ${theme}`}
          />
        </div>
        <div className="filter-item">
          <label>Incident Type:</label>
          <select
            value={incidentType}
            onChange={(e) => setIncidentType(e.target.value)}
            className={`filter-select ${theme}`}
          >
            <option value="">All Types</option>
            <option value="physical-violence">Physical Violence</option>
            <option value="verbal-abuse">Verbal Abuse</option>
            <option value="racial-discrimination">Racial Discrimination</option>
          </select>
        </div>
        <div className="filter-item">
          <label>Select Country:</label>
          <select onChange={handleCountrySelect} value={selectedCountry} className={`filter-select ${theme}`}>
            <option value="">Choose a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Swipeable Stories Section */}
      <div {...handlers} className="stories-container">
        <div className="story-card">
          <h2>{storiesData[currentStoryIndex].title}</h2>
          <p>{storiesData[currentStoryIndex].description}</p>
        </div>
        <div className="story-navigation">
          <button onClick={handlePrevious} className={`nav-button prev-button ${theme}`}>
            &#8592; Previous
          </button>
          <button onClick={handleNext} className={`nav-button next-button ${theme}`}>
            Next &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stories;
