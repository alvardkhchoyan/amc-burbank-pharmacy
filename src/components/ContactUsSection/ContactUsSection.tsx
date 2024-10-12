import React, { useEffect, useState } from "react";
import ContactInformation from "../ContactInformation/ContactInformation";
import "./contactUsSection.css";

const ContactUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-us-section">
      <div className="contact-us-content">
        <ContactInformation />
        <div className={`contact-text ${isVisible ? "fade-in" : ""}`}>
          <h1 className="contact-us-title">Contact Us</h1>
          <p className="contact-us-description">
            At AMC Pharmacy, we are dedicated to providing exceptional support and service to our valued customers. Whether you have questions about our extensive range of health products or require guidance on medication management, our team is here for you. We understand that your health and well-being are paramount, and we aim to address any inquiries or concerns you may have. Your satisfaction is our priority, and we look forward to assisting you!<br /><br />
            
            You can contact us via email or phone, and we will get back to you as soon as possible. We are here to help you and ensure you get the best at AMC Pharmacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
