import instagramLogo from "../../assets/instagramLogo.png";
import locationIcon from "./../../icon/location.png";
import phoneIcon from "./../../icon/phone.png";
import emailIcon from "./../../icon/email.png";
import { ROUTES } from "../../constants/paths";
import logo from "./../../assets/Logo.png";
import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-img" />
          <h2 className="footer-logo-text">Burbank Pharmacy</h2>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-about">
          <h3>About AMC</h3>
          <p>
            AMC is a pharmacy with various departments. Our mission is to
            provide high-quality healthcare products and services to our
            community.
          </p>
        </div>
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href={ROUTES.HOME}>Home</a>
            </li>
            <li>
              <a href={ROUTES.ABOUT}>About Us</a>
            </li>
            <li>
              <a href={ROUTES.PRODUCT}>Product</a>
            </li>
            <li>
              <a href={ROUTES.CONTACT}>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <a href="tel:+18188416326" className="contact-link">
              <img src={phoneIcon} alt="Phone" className="contact-icon" /> +1
              818 841 6326
            </a>
          </div>
          <div className="contact-item">
            <a href="mailto:Amcburbankpharmacy@yahoo.com" className="contact-link">
              <img src={emailIcon} alt="Email" className="contact-icon" />{" "}
              Amcburbankpharmacy@yahoo.com
            </a>
          </div>
        </div>

        <div className="footer-address">
          <h3>Address</h3>
          <span className="address-item">
            <img src={locationIcon} alt="Location" className="address-icon" />{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=2625+W+Alameda+Ave+STE110,+Burbank,+CA+91505,+United+States"
              target="_blank"
              rel="noopener noreferrer"
              className="address-link"
            >
              2625 W Alameda Ave STE110, Burbank, CA 91505, United States
            </a>
          </span>
        </div>

        <div className="footer-social">
          <h3>Social Media</h3>
          <span>
            <a
              href="https://www.instagram.com/amcburbankpharmacy?igsh=MWhtdzlsN3p0cnh5cQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramLogo}
                alt="Instagram"
                className="footer-social-icon"
              />
            </a>
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href={ROUTES.TERMS} target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          <a href={ROUTES.PRIVACY} target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
