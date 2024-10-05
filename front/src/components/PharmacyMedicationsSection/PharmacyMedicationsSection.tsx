import React from "react";
import "./pharmacyMedicationsSection.css";

const PharmacyMedicationsSection: React.FC = () => {
  return (
    <section className="pharmacy-medications-section">
      <div className="medications">
        <div className="medications-content">
          <h1>Exclusive Medications Developed by AMC</h1>
          <p>
            Exclusive Medications Developed by AMC are meticulously crafted and
            processed with the highest standards of quality and care. Our
            pharmacy is dedicated to producing effective, reliable medications
            that meet rigorous safety and efficacy standards, ensuring optimal
            health outcomes for our patients.
          </p>
          {/* <button className="order-button">
          View Our Products <span className="arrow">➔</span>
        </button> */}
        </div>
        <div className="medications-image">
          <img src="./images/ourMedicines.png" alt="Pharmacy's Medicines" />
        </div>
      </div>
    </section>
  );
};

export default PharmacyMedicationsSection;
