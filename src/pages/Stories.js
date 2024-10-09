import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import countries from './countries.json'; // List of countries
import '../Stories.css';

const storiesData = [
    {
      title: "Maria: A Victim of Domestic Abuse and a Courageous Advocate",
      description: "I am Maria, a 30-year-old immigrant from Honduras. For years, I endured domestic violence at the hands of my partner. The fear of being deported kept me silent, but after a life-threatening incident, I finally found the courage to report my abuser. It was terrifying, but I knew I had to stand up for myself. Now, I advocate for other immigrant women facing similar struggles, helping them navigate the legal system and find safe havens from violence.",
      date: "March 10, 2024",
      location: "Tegucigalpa, Honduras"
    },
    {
        title: "Christine: A Yellow Vest Protester Who Lost Her Eye",
        description: "I am Christine, a 64-year-old woman who joined the yellow vest movement to stand up against injustice in France. On a chilly evening in December, while participating in a peaceful protest in Paris, the atmosphere turned chaotic. I was standing with a group of fellow protesters when police advanced, using excessive force to disperse the crowd. As I tried to shield myself from the brutality, I was struck in the face by a projectile fired by the police. The pain was immediate, and as I fell to the ground, I realized I had lost my right eye. This horrific experience did not silence me; instead, it strengthened my resolve to fight for our rights. I now speak out for those who cannot, sharing my story to shine a light on police violence and advocating for the rights of all citizens to protest peacefully.",
        date: "December 5, 2023",
        location: "Paris, France"
      },
      
    {
      title: "James: Racial Violence and the Fight for Justice",
      description: "I’m James, and on a fateful night, I was brutally attacked while walking home from my job at a grocery store. As I walked, I was confronted by a group of men who began to hurl racial slurs before physically assaulting me. The trauma of that night lingers, but it ignited a fire within me. I decided to become an activist, sharing my story and fighting against racial violence in our community, so that others wouldn't have to suffer in silence.",
      date: "January 25, 2024",
      location: "Los Angeles, California, USA"
    },
    {
      title: "Fatima: A Mother’s Fight Against Racial and Religious Hate",
      description: "I am Fatima, a Muslim immigrant and a mother. After my family and I experienced harassment in our neighborhood, I felt an overwhelming fear for my children's safety. One evening, we were verbally attacked by a group of individuals who targeted us for our faith. This experience shook me to my core, but it also inspired me to become a voice for change. I now work with local organizations to promote tolerance and understanding among diverse communities.",
      date: "February 5, 2024",
      location: "Dearborn, Michigan, USA"
    },
    {
      title: "Aisha: Overcoming Gender-Based Violence",
      description: "My name is Aisha, and I am a survivor of gender-based violence. My story began with a relationship that turned abusive. After years of physical and emotional turmoil, I found the strength to escape. The path to healing has not been easy, but I am dedicated to using my experience to empower other women. By sharing my journey, I hope to inspire others to break free from the chains of abuse and seek the help they deserve.",
      date: "April 18, 2024",
      location: "Lahore, Pakistan"
    },
    {
      title: "Carlos: Standing Tall Against Xenophobic Violence",
      description: "I am Carlos, and my journey as an undocumented immigrant in this country has been fraught with challenges. I faced a violent attack fueled by xenophobia after I was wrongly accused of a crime. The assault left me physically injured and emotionally scarred, but I refused to be a victim. Instead, I transformed my pain into purpose by advocating for immigrant rights, sharing my story to shed light on the injustices many face.",
      date: "March 15, 2024",
      location: "Phoenix, Arizona, USA"
    },
    {
      title: "Riley: The Fight for Equality in a Hostile Environment",
      description: "My name is Riley, and I am part of the LGBTQ+ community. Living in a conservative town, I faced bullying and violence for simply being myself. One night, I was attacked after leaving a local bar, leaving me not just physically injured but emotionally shattered. This experience fueled my desire to fight for equality. Now, I work tirelessly to educate others and promote acceptance, determined to create a safer world for all.",
      date: "July 22, 2024",
      location: "Fort Worth, Texas, USA"
    },
    {
      title: "Linda: The Silent Struggle of a Transgender Woman",
      description: "I’m Linda, a transgender woman who has faced unimaginable violence and discrimination. The attacks I've endured have been both physical and psychological, leaving me in fear of living my truth. After a brutal encounter in my neighborhood, I decided to share my story to raise awareness about the violence faced by transgender individuals. My hope is that by speaking out, I can help others feel less alone and inspire change.",
      date: "May 30, 2024",
      location: "Miami, Florida, USA"
    },
    {
      title: "Omar: From Hate Crime to Advocacy",
      description: "I am Omar, an Arab-American who became a victim of a hate crime simply because of my ethnicity. One night, while walking home, I was assaulted by a group of men who shouted slurs at me. The experience left me traumatized, but it also lit a fire in me to speak out against hate. I now work with community organizations to promote understanding and tolerance, sharing my experience to help others who have faced similar situations.",
      date: "February 14, 2024",
      location: "Chicago, Illinois, USA"
    },
    {
      title: "Isabella: The Unseen Struggle of Immigrant Women",
      description: "My name is Isabella, and as an immigrant woman, I have faced numerous challenges. After escaping an abusive relationship, I sought refuge but found myself struggling against a system that often ignores the plight of women like me. Sharing my story has become my lifeline, as I connect with other immigrant women to ensure we are heard and supported in our fight for justice.",
      date: "April 5, 2024",
      location: "Newark, New Jersey, USA"
    },
    {
      title: "The Rally for Change: Our Voices Together",
      description: "I participated in a rally that brought together countless voices against police violence and systemic racism. As I stood in the crowd, I felt the power of unity. Each story shared was a testament to resilience, including my own experiences with discrimination. This rally wasn’t just an event; it was a movement, and I am proud to be part of it, advocating for change and justice.",
      date: "August 12, 2024",
      location: "Washington, D.C., USA"
    }
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
          <p>"{storiesData[currentStoryIndex].description}"</p>
          <p className="date-location">
            <strong>{storiesData[currentStoryIndex].date} - {storiesData[currentStoryIndex].location}</strong></p>
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
