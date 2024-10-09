import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../CookieConsent.css'; // Import CSS for styling

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAccept = () => {
    setIsVisible(false);
    navigate('/'); // Redirect to home page
  };

  return (
    isVisible && (
      <div className="privacy-policy cookie-consent"> {/* Apply the same CSS class */}
        <h3>Cookie Consent</h3>
        <p>
          We are committed to ensuring that your privacy is protected. This website does not collect cookies or personal data from users. Our primary aim is to provide you with an excellent experience while you navigate through our site.
        </p>
        <p>
          While we do not actively use cookies to gather personal information, it is important to note that certain features of our site may require cookies to function effectively. These cookies may be used to enhance your user experience by remembering your preferences and settings during your visit. 
        </p>
        <p>
          Cookies are small text files placed on your device by the websites you visit. They allow the website to recognize your device and store some information about your preferences or past actions. For instance, cookies can help us keep you logged in or remember the items in your shopping cart.
        </p>
        <p>
          By continuing to use our site, you consent to the use of cookies as described above. However, if you prefer, you can modify your browser settings to decline cookies or notify you when cookies are being used. Please be aware that disabling cookies may affect your experience on our site, as some features may not function properly without them.
        </p>
        <p>
          For more details on how we handle your data and your rights, please refer to our{' '}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </p>
        <button onClick={handleAccept} className="cookie-button">
          Got it!
        </button>
      </div>
    )
  );
};

export default CookieConsent;
