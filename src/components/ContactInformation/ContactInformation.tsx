import React from "react";
import "./contactInformation.css";
import phoneIcon from "../../icon/phone.png";
import emailIcon from "../../icon/email.png";
import locationIcon from "../../icon/location.png";
import clockIcon from "../../icon/clock.png";
import instagramLogo from "../../assets/instagramLogo.png";
import tiktokLogo from "../../assets/TikTokLogo.png";
import faxIcon from "./fax.png";

const ContactInformation = () => {
  return (
    <div className="contact-information-container">
      <div className="background-image-wrapper">
        <img
          src="/images/background-image.png"
          alt="Background"
          className="background-image"
        />
      </div>
      <div className="contact-information">
        <h2>Contact Information</h2>
        <div className="contact-details">
          <div className="contact-item">
            <a href="tel:+18188416326" className="contact-link">
              <img src={phoneIcon} alt="Phone" className="contact-icon" /> + 1
              (818) 478-1585
            </a>
          </div>
          <div className="contact-item">
            <a
              href="mailto:Amcburbankpharmacy@yahoo.com"
              className="contact-link"
            >
              <img src={emailIcon} alt="Email" className="contact-icon" />{" "}
              Amcburbankpharmacy@yahoo.com
            </a>
          </div>
          <div className="contact-item">
            <a
              href="https://www.google.com/maps/search/?api=1&query=2625+W+Alameda+Ave+STE110,+Burbank,+CA+91505,+United+States"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <img src={locationIcon} alt="Location" className="contact-icon" />{" "}
              2625 W Alameda #110, Burbank, CA
            </a>
          </div>
        </div>
        <div className="opening-hours">
          <h3>Opening hours</h3>
          <p>
            <img src={clockIcon} alt="clock" className="clock-icon" /> Monday -
            Friday - 9am- 5:30pm
          </p>
          <p>
            <img src={clockIcon} alt="clock" className="clock-icon" /> Saturday
            - Sunday - Closed
          </p>
        </div>
        <div className="social-media-contact">
          <h3>Social Media</h3>
          <div className="social-media-link">
            <a
              href="https://www.instagram.com/amcburbankpharmacy?igsh=MWhtdzlsN3p0cnh5cQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <img
                src={instagramLogo}
                alt="Instagram"
                className="instagram-icon"
              />
              <span className="instagram-text">Follow Us on Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@amc.burbank.pharmacy?_t=8q7qms7W3cN&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="tiktok-link"
            >
              <img src={tiktokLogo} alt="tiktok" className="tiktok-icon" />
              <span className="tiktok-text">Follow Us on TikTok</span>
            </a>
          </div>
          <h3>Fax Number</h3>
          <div className="social-media-link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <img src={faxIcon} alt="Instagram" className="instagram-icon" />
              <span className="instagram-text">(818) 864-0018</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
