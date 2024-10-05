

import React, { useState, useEffect } from "react";
import { ROUTES } from "../../constants/paths";
import PhoneIcon from "./phone-icon.jpeg";
import Logo from "../../assets/Logo.png";
import "./header.css";

const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header-content");
      if (header) {
        if (window.scrollY > 25) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const logoStyle = {
    width: "60px",
    padding: "10px",
    marginLeft: "80px",
    transition: "transform 0.3s ease",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };

  return (
    <header
      className="header-content"
      style={{ height: "50px", border: "1px solid #dfcc9e" }}
      >
      <a href={ROUTES.HOME} style={{textDecoration: "none"}}>
        <img
          className="header-logo"
          src={Logo}
          alt="Logo"
          style={logoStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          />
          <span style={{position: "relative", top: "-12px", color: "#dfcc9e", fontWeight: "lighter", cursor: "auto"}}>Burbank Pharmacy</span>
      </a>
      <button
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
      <nav className={isMenuOpen ? "nav open" : "nav"}>
        <ul>
          <li className="nav-item">
            <a href={ROUTES.ABOUT}>About</a>
          </li>
          <li className="nav-item">
            <a href={ROUTES.PRODUCT}>Product</a>
          </li>
          <li className="nav-item">
            <a href={ROUTES.Compounding}>Compounding</a>
          </li>
          <li>
            <a href="tel:" className="call-section">
              <img src={PhoneIcon} alt="phone-icon" className="phone-icon" />
              + 1 (818) 841-6326
            </a>
          </li>
          <li className="nav-item">
            <a href={ROUTES.CONTACT} className="contact-us-btn">
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
