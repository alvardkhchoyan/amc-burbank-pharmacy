import React from "react";
import Consult from "../../components/consultation/Consult";
import ProductSection from "../../components/ProductSection/ProductSection";
import PharmacyMedicationsSection from "../../components/PharmacyMedicationsSection/PharmacyMedicationsSection";
import FirstSection from "../../components/first-section/FirstSection";
import TeleConsult from "../../components/TeleConsultation/TeleConsultation";
import "./landing.css"; // Make sure the correct path is used here

const Landing: React.FC = () => {
  return (
    <div className="landing-container">
      <FirstSection />
      <ProductSection />
      <TeleConsult />
      <PharmacyMedicationsSection />
      <Consult />
    </div>
  );
};

export default Landing;
