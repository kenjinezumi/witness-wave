import React from 'react';
import '../CookieConsent.css'; // Import CSS for styling

const CookieConsent = () => {
  return (
    <div className="cookie-consent">
      <h3>Cookie Consent</h3>
      <p>
        At WitnessWave, we value your privacy and want to be transparent about our use of cookies on our website. 
        Cookies are small text files that are placed on your device when you visit a website. They help enhance your 
        experience by allowing the website to remember your actions and preferences (such as login details and language) 
        over a period of time.
      </p>
      <p>
        <strong>We do not collect cookies or personal data.</strong> Our website is designed to function smoothly without collecting 
        any personally identifiable information. 
      </p>
      <p>However, some third-party features and integrations we use may employ 
        cookies. These might include analytics tools and social media sharing buttons, which help us understand how visitors 
        interact with our site and improve our services.
        </p>
      <p>
        By using our site, you agree to the use of cookies in accordance with this Cookie Policy. If you prefer to 
        restrict, block, or delete cookies from this site, you can do this through your browser settings. Each browser is 
        different, so please check your browser's help menu for specific instructions. 
      </p>
      <p>
        It’s important to note that blocking cookies may affect the functionality of our website and your experience 
        while using it. Some features may not work properly without cookies enabled.
      </p>
      <p>
        For more information on how we handle your data and your rights, please refer to our <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. 
        Here, you will find detailed information about the types of data we collect, how we use it, and how we protect your privacy.
      </p>
      <p>
        If you have any questions or concerns about our use of cookies or our privacy practices, please feel free to 
        contact us. We are here to help and ensure your experience with us is as smooth and enjoyable as possible.
      </p>
    </div>
  );
};

export default CookieConsent;
