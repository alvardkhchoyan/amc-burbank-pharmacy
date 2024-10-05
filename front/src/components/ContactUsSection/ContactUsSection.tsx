import React from "react";
import ContactInformation from "../ContactInformation/ContactInformation";
import ContactForm from "../ContactForm/ContactForm";
import "./contactUsSection.css";

const ContactUsSection = () => {
  return (
    <div className="contact-us-section">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-description">
        We're here to help! Whether you have a question about our products, need assistance with an order, or just want to say hello, feel free to reach out to us.
      </p>
      <div className="contact-us-content">
        <ContactInformation />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUsSection;