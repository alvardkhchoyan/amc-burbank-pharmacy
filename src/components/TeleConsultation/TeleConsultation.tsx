import React from "react";
import "./teleConsultation.css";

const Teleconsultation: React.FC = () => {
  return (
    <div className="teleconsult-container">
      <div className="teleconsult-content">
        <h2 className="teleconsult-header">Teleconsult Our Patient Advisors</h2>
        <button className="call-now-button">
          <a href="tel:+18188416326" className="tele-call-now">
            <span className="call-icon">📞</span> Call now
          </a>{" "}
        </button>
        <div className="teleconsult-hours">
          <h3>Opening hours</h3>
          <ul>
            <li>🕒 Monday - Friday - 9:00 am - 5:30 pm</li>
          </ul>
        </div>
      </div>
      <div className="teleconsult-icon-wrapper">
        <img
          src="./images/consultTel.png"
          alt="Teleconsult Icon"
          className="teleconsult-icon"
        />
      </div>
      <div className="teleconsult-image">
        <img src="./images/pillsTeleConsult.png" alt="Pills and Leaves" />
      </div>
    </div>
  );
};

export default Teleconsultation;
