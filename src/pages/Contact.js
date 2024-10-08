import React, { useState } from 'react';

const Contact = () => {
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
    // Here you would handle form submission, such as sending the data to your backend or an email service
    console.log('Form submitted:', formData);
    alert('Your message has been submitted!');
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
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
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* PGP Key Section */}
      <h2>PGP Public Key</h2>
      <p>For secure communication, you can encrypt your message using our PGP public key:</p>
      
      <p>
        <a href="./public_key.asc" download>Download PGP Public Key</a>
      </p>
    </div>
  );
};

export default Contact;
