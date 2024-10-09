import React from 'react';
import '../about.css'; // Import the CSS for styling

const About = ({ theme = 'light' }) => {
  return (
    <div className={`about-container ${theme}`}>
      <h1 className="about-title">About WitnessWave</h1>
      
      <p><strong>WitnessWave</strong> is a global platform dedicated to gathering and analyzing user-generated content (UGC) to document and report incidents of violence and discrimination. Our primary focus is on racial, gender, police, anti-immigration, and religious violence. The goal is not only to provide a voice to those affected but also to highlight the growing prevalence of these issues worldwide and drive meaningful change.</p>
      
      <h2 className="about-subtitle">Our Mission</h2>
      <p>In an age where marginalized communities are often left unheard, WitnessWave seeks to be a bridge between individuals and a global audience. By leveraging technology, we enable users to submit anonymous reports of the injustices they face, no matter where they are. Each submission helps paint a clearer picture of the patterns of violence and discrimination emerging across countries, whether it's systemic racism, gender-based violence, police brutality, or xenophobic acts against immigrants and religious minorities.</p>

      <h2 className="about-subtitle">Anonymity and Privacy</h2>
      <p>WitnessWave is committed to maintaining the highest levels of <strong>privacy and anonymity</strong> for our users. We understand that for many, speaking up about their experiences with violence and discrimination can come with personal risks. That’s why we’re dedicated to making the platform as safe as possible, ensuring that individuals can contribute to this crucial global narrative without fear of retaliation or exposure.</p>
      
      <h2 className="about-subtitle">A Non-Profit Initiative</h2>
      <p>As a non-profit project, our mission extends beyond data collection. We aim to use this data to shine a light on human rights violations and provide a centralized resource for policymakers, activists, researchers, and journalists. By identifying trends and patterns across countries, we can better understand the socio-political dynamics that drive these incidents and advocate for systemic reforms. WitnessWave is a tool for awareness and a call to action for global accountability and justice.</p>
      
      <h2 className="about-subtitle">Collaboration for Change</h2>
      <p>We believe that <strong>change requires collective effort</strong>. WitnessWave is working alongside human rights organizations, academic institutions, and community activists to ensure that the data gathered reaches the right channels. By sharing insights and analysis derived from the platform, we aim to support advocacy, inform policy changes, and help direct resources where they are most needed.</p>

      <h2 className="about-subtitle">Our Vision</h2>
      <p>Our long-term vision is to create a world where accountability and transparency are the norm, and where every individual has a voice in shaping a more just and equitable society. By bringing together the stories of those affected by violence and discrimination, we hope to drive conversations and actions that lead to real, lasting change.</p>
    </div>
  );
};

export default About;
