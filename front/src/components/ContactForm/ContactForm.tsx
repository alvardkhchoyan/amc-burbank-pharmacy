import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "./contactForm.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isError, setIsError] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^(\+1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    return phoneRegex.test(phone);
  };

  const validateFields = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = "Invalid phone number format";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateFields()) {
      setIsError(true);
      setIsPopupVisible(true);
      setPopupMessage("Please correct the errors in the form.");
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/send-contact-email`, formData);
      setPopupMessage("Email sent successfully!");
      setIsError(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setPopupMessage(
        "Failed to send the message. Please try again later."
      );
      setIsError(true);
    } finally {
      setIsPopupVisible(true);
    }
  };

  useEffect(() => {
    if (isPopupVisible) {
      const timer = setTimeout(() => {
        setIsPopupVisible(false);
        setPopupMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isPopupVisible]);

  return (
    <div className="contact-form-wrapper">
      {isPopupVisible && (
        <div className={`popup-message ${isError ? "error" : ""}`}>
          {popupMessage}
        </div>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group-contact">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "input-error" : ""}
            />
            {errors.firstName && <p className="error-text">{errors.firstName}</p>}
          </div>
          <div className="form-group-contact">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "input-error" : ""}
            />
            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group-contact">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="form-group-contact">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "input-error" : ""}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>
        </div>
        <div className="form-group-contact full-width">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
          ></textarea>
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
