import React from "react";
import "./pharmacyMedicationsSection.css";
import Vaccines from "./vaccines.png";

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
        </div>
        <div className="medications-image">
          <img src="./images/ourMedicines.png" alt="Pharmacy's Medicines" />
        </div>
      </div>
      <div className="medications">
        <div className="medications-image">
          <img src={Vaccines} alt="Vaccines" width="450px" />
        </div>
        <div className="medications-content">
          <h1>Vaccines</h1>
          <p>
            At AMC Burbank Pharmacy, your health is our priority. We're proud to
            offer a variety of vaccines to help keep you and your community
            safe. Our experienced team provides convenient, friendly service in
            a welcoming environment. Whether you need a flu shot, COVID-19
            vaccine, or any other immunization, we're here to assist you.
          </p>
          <p>
            Call us today to arrange an appointment or to request more
            information on vaccines. Protect yourself and your loved
            ones—because health matters!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PharmacyMedicationsSection;
