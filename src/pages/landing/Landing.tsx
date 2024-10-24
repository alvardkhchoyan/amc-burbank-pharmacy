import React from "react";
import ProductSection from "../../components/ProductSection/ProductSection";
import PharmacyMedicationsSection from "../../components/PharmacyMedicationsSection/PharmacyMedicationsSection";
import FirstSection from "../../components/first-section/FirstSection";
import TeleConsult from "../../components/TeleConsultation/TeleConsultation";
import "./landing.css"; 

const Landing: React.FC = () => {
  return (
    <div className="landing-container">
      <FirstSection />
      <ProductSection />
      <PharmacyMedicationsSection />
      <TeleConsult />
    </div>
  );
};

export default Landing;
