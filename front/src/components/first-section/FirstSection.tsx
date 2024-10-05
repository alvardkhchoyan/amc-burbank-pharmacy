import React from "react";
import "./first-section.css";
import HomePicture from "./img-first-section/home-picture.png";
import { ROUTES } from "../../constants/paths";
import { Link } from "react-router-dom";

const FirstSection: React.FC = () => {
  return (
    <div className="general-first-section">
      <div className="text-container">
        <h1 className="title">Amc Burbank Pharmacy</h1>
        <p className="description">
          Your trusted neighborhood pharmacy, committed to providing
          personalized care and quality healthcare solutions for the Burbank
          community.
        </p>
        <div className="button-container">
          <Link to={ROUTES.PRODUCT}>
            <button className="action-button">Our Product </button>
          </Link>
          <Link to={ROUTES.CONTACT}>
            <button className="action-button">Contact Us</button>
          </Link>
        </div>
      </div>
      <img src={HomePicture} alt="home-picture" className="home-picture" />
    </div>
  );
};

export default FirstSection;
