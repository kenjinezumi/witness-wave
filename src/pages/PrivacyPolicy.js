import React from 'react';
import '../styles/PrivacyPolicy.css'; // Import CSS for styling

const PrivacyPolicy = () => {
  const handleAccept = () => {
    // Redirect to home or handle the acceptance logic
    window.location.href = '/'; // Redirect to home page
  };

  return (
    <div className="privacy-policy">
      <h1>Privacy Policy for WitnessWave</h1>
      <p>Last updated: 09/10/2024</p>

      <p>
        At WitnessWave, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We do not collect personal data unless you voluntarily provide it to us. However, we may collect and process the following data about you:
      </p>
      <ul>
        <li><strong>Personal Data:</strong> Information that you provide directly to us, such as your name, email address, and any other details you provide when you contact us or submit information.</li>
        <li><strong>Usage Data:</strong> Information about how you use our website, products, and services, which may include your IP address, browser type, pages visited, and the time and date of your visits.</li>
        <li><strong>Technical Data:</strong> Internet Protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We use your personal data for the following purposes:
      </p>
      <ul>
        <li>To provide, maintain, and improve our website and services.</li>
        <li>To notify you about changes to our website or services.</li>
        <li>To allow you to participate in interactive features of our service when you choose to do so.</li>
        <li>To provide customer support and respond to your inquiries.</li>
        <li>To monitor the usage of our website and analyze trends to improve user experience.</li>
        <li>To comply with legal obligations and protect our rights.</li>
      </ul>

      <h2>Data Protection Rights</h2>
      <p>
        Under the General Data Protection Regulation (GDPR) and UK data protection laws, you have certain rights regarding your personal data:
      </p>
      <ul>
        <li>The right to access your personal data.</li>
        <li>The right to request correction of your personal data.</li>
        <li>The right to request deletion of your personal data.</li>
        <li>The right to object to processing your personal data.</li>
        <li>The right to request the transfer of your personal data.</li>
        <li>The right to withdraw consent.</li>
      </ul>

      <h2>Disclosure of Your Information</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personal data to third parties without your consent, except as required by law or to protect our rights.
      </p>

      <h2>Security of Your Information</h2>
      <p>
        We use administrative, technical, and physical security measures to help protect your personal data. While we have taken reasonable steps to secure the personal data you provide to us, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:kenjitsuchiya1@gmail.com">kenjitsuchiya1@gmail.com</a>.
      </p>

      <div className="accept-button-container">
        <button onClick={handleAccept} className="accept-button">
          Got it!
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
