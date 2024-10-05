import InputField from "../shared/InputField/InputField";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./consult.css";

const Consult: React.FC = () => {
  const [consultationInfo, setConsultationInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneRegex =/^(\+1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };
  const validateFields = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
      message: "",
    };
    if (!consultationInfo.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!consultationInfo.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!consultationInfo.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(consultationInfo.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!consultationInfo.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!validatePhoneNumber(consultationInfo.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format";
    }
    if (!consultationInfo.country.trim()) {
      newErrors.country = "Country is required";
    }
    if (!consultationInfo.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setConsultationInfo({
      ...consultationInfo,
      [name]: value,
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
      await axios.post(
        `${process.env.REACT_APP_API_URL}/send-consultation-email`,
        consultationInfo
      );
      setPopupMessage("Email sent successfully!");
      setIsError(false);
      setConsultationInfo({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "",
        message: "",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setPopupMessage(`Failed to send the message. Error: ${error.message}`);
      } else {
        setPopupMessage(
          "Failed to send the message. An unexpected error occurred."
        );
      }
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
    <div className="consult-container">
      {isPopupVisible && (
        <div className={`popup-message ${isError ? "error" : ""}`}>
          {popupMessage}
        </div>
      )}
      <div className="consult-image-wrapper">
        <img
          src="./images/consultBackground.png"
          alt="Consult Background"
          className="consult-image"
        />
        <div className="consult-content">
          <div className="consult-form-container">
            <h2>Consult with Our Pharmacy Experts</h2>
            <form className="consult-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <InputField
                  type="text"
                  placeholder="First Name"
                  className={`form-input ${errors.firstName ? "input-error" : ""}`}
                  name="firstName"
                  value={consultationInfo.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className="error-text">{errors.firstName}</p>}
                <InputField
                  type="text"
                  placeholder="Last Name"
                  className={`form-input ${errors.lastName ? "input-error" : ""}`}
                  name="lastName"
                  value={consultationInfo.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="error-text">{errors.lastName}</p>}
              </div>
              <div className="form-group">
                <InputField
                  type="email"
                  placeholder="Email ID"
                  className={`form-input ${errors.email ? "input-error" : ""}`}
                  name="email"
                  value={consultationInfo.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
                <InputField
                  type="text"
                  placeholder="Mobile Number"
                  className={`form-input ${errors.phoneNumber ? "input-error" : ""}`}
                  name="phoneNumber"
                  value={consultationInfo.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && <p className="error-text">{errors.phoneNumber}</p>}
              </div>
              <div className="form-group full-width">
                <InputField
                  type="text"
                  placeholder="Country"
                  className={`form-input full-width-input ${errors.country ? "input-error" : ""}`}
                  name="country"
                  value={consultationInfo.country}
                  onChange={handleChange}
                />
                {errors.country && <p className="error-text">{errors.country}</p>}
              </div>
              <div className="form-group full-width">
                <textarea
                  placeholder="Message"
                  className={`form-textarea ${errors.message ? "input-error" : ""}`}
                  name="message"
                  value={consultationInfo.message}
                  onChange={handleChange}></textarea>
                {errors.message && <p className="error-text">{errors.message}</p>}
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Consult;