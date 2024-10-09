import React, { useState } from 'react';
import '../contact.css'; // Import the CSS for styling

const Contact = ({ theme = 'light' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending the data to your backend or email service
    console.log('Form submitted:', formData);
    alert('Your message has been submitted!');
  };

  return (
    <div className={`contact-container ${theme}`}>
      <h1 className="contact-title">Contact Us</h1>
      
      {/* Contact Form */}
      <div className={`form-card ${theme}`}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="submit-button-container">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>

      {/* PGP Key Section */}
      <div className={`pgp-section ${theme}`}>
        <h2>PGP Public Key</h2>
        <p>For secure communication, you can encrypt your message using our PGP public key:</p>
        <p>
          <a href="./public_key.asc" download>Download PGP Public Key</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
