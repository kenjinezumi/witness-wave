import React from 'react';
import '../TermsAndServices.css'; // Import CSS for styling

const TermsAndServices = () => {
  const handleAccept = () => {
    // Redirect to home or handle the acceptance logic
    window.location.href = '/'; // Redirect to home page
  };

  return (
    <div className="privacy-policy terms-and-services">
      <h1>Terms and Services</h1>

      <p>
        Welcome to WitnessWave! These Terms and Conditions outline the rules and regulations for the use of our website and services. By accessing or using our site, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, you must not use our site.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using our website, you confirm that you are at least 18 years old, or you are using the website under the supervision of a parent or guardian. You agree to abide by all applicable laws and regulations regarding your use of the site.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        All content, trademarks, and other intellectual property on this site are the property of WitnessWave or our licensors. You are granted a limited license to access and use the site for personal, non-commercial use. Any unauthorized use of the content is prohibited.
      </p>

      <h2>3. User Responsibilities</h2>
      <p>
        As a user, you agree to provide accurate and truthful information when using our services. You are solely responsible for any content you submit to our site, including but not limited to comments, reviews, and reports. You agree not to submit any content that is defamatory, obscene, abusive, or violates any applicable laws.
      </p>

      <h2>4. Third-Party Links</h2>
      <p>
        Our site may contain links to third-party websites. These links are provided for your convenience and do not imply endorsement by WitnessWave of the linked sites. We are not responsible for the content or practices of these sites.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        WitnessWave is not liable for any direct, indirect, incidental, or consequential damages arising from your use of or inability to use our site or services. This includes any damages resulting from loss of data or profits, or any other losses arising out of or in connection with your use of our site.
      </p>

      <h2>6. Modifications to Terms</h2>
      <p>
        WitnessWave reserves the right to modify these Terms and Conditions at any time. We will notify users of any changes by updating the date at the top of this document. Your continued use of the site after any changes indicates your acceptance of the new terms.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which WitnessWave operates, without regard to its conflict of law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in that jurisdiction.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions or concerns regarding these Terms and Conditions, please contact us at{' '}
        <a href="mailto:kenjitsuchiya1@gmail.com">kenjitsuchiya1@gmail.com</a>.
      </p>

      <p>
        Thank you for using WitnessWave! We appreciate your commitment to creating a safer and more inclusive environment.
      </p>

      <div className="accept-button-container">
        <button onClick={handleAccept} className="accept-button">
          Got it!
        </button>
      </div>
    </div>
  );
};

export default TermsAndServices;
