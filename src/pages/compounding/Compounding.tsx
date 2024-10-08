import React, { useState } from "react";
import "./compounding.css";
import Dermatology from "./images/dermatology.png";
import HairLoss from "./images/hairLoss.jpeg";
import Dental from "./images/dental.jpeg";
import HormoneTherapy from "./images/hormoneTherapy.jpg";
import PainManagement from "./images/painManagement.jpeg";
import Veterinary from "./images/veterinary.jpeg";

const Compounding: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const openPopup = (product: string) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  const getPopupContent = () => {
    switch (selectedProduct) {
      case "Dermatology":
        return (
          <div>
            <h2>Dermatology</h2>
            <ul>
              <li>
                Aesthetic Treatments: Products used to enhance the appearance of
                the skin.
              </li>
              <li>
                Lightening Agents: Products aimed at reducing hyperpigmentation.
              </li>
              <li>
                Chemical Peels: Treatments to exfoliate the skin, improving
                texture.
              </li>
              <li>Acne Treatments: Includes topical and oral medications.</li>
              <li>
                Keratosis and Wart Treatments: Addressing conditions like
                actinic keratosis.
              </li>
            </ul>
          </div>
        );
      case "Hair Loss":
        return (
          <div>
            <h2>Hair Loss</h2>
            <ul>
              <li>
                Capsules: Ingredients that support hair health and growth.
              </li>
              <li>
                Hair Solutions: Topical treatments to stimulate hair growth.
              </li>
            </ul>
          </div>
        );
      case "Dental":
        return (
          <div>
            <h2>Dental</h2>
            <ul>
              <li>Topical Anesthetics: Gels applied to numb the gums.</li>
              <li>Bone Binder: Used in dental implant procedures.</li>
              <li>
                Specialized Numbing Gels: Formulations for targeted pain relief.
              </li>
            </ul>
          </div>
        );
      case "Hormone Therapy":
        return (
          <div>
            <h2>Hormone Therapy</h2>
            <ul>
              <li>Men's and Women's Health: Hormone replacement therapies.</li>
              <li>
                Sexual Enhancement: Treatments for improving libido and
                function.
              </li>
            </ul>
          </div>
        );
      case "Pain Management":
        return (
          <div>
            <h2>Pain Management</h2>
            <ul>
              <li>
                Numbing Creams: Topical formulations for localized pain relief.
              </li>
              <li>
                Gels and BLT: Combinations of local anesthetics for effective
                pain relief.
              </li>
            </ul>
          </div>
        );
      case "Veterinary":
        return (
          <div>
            <h2>Veterinary</h2>
            <ul>
              <li>Feline and Canine Medications: Pharmaceuticals for pets.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="compounding-container">
      <div className="title">Compounding</div>
      <div className="additional-info">
        <p>
          For detailed information on specific medications, treatments, and
          protocols, you can sign up for access. Explore tailored solutions for
          specific medical needs through our compounding services. Whether
          you're seeking treatments for dermatology, dental care, hormone
          therapy, or hair loss, we provide customized medication solutions to
          fit your requirements. For full access to protocols, treatments, and
          detailed medication information, please sign up.
        </p>
      </div>
      <div className="product-grid">
        <div className="product-item">
          <img src={Dermatology} alt="Dermatology" />
          <p>Dermatology</p>
          <button onClick={() => openPopup("Dermatology")}>LEARN MORE</button>
        </div>
        <div className="product-item">
          <img src={HairLoss} alt="Hair Loss" />
          <p>Hair Loss</p>
          <button onClick={() => openPopup("Hair Loss")}>LEARN MORE</button>
        </div>
        <div className="product-item">
          <img src={Dental} alt="Dental" />
          <p>Dental</p>
          <button onClick={() => openPopup("Dental")}>LEARN MORE</button>
        </div>
        <div className="product-item">
          <img src={HormoneTherapy} alt="Hormone Therapy" />
          <p>Hormone Therapy</p>
          <button onClick={() => openPopup("Hormone Therapy")}>
            LEARN MORE
          </button>
        </div>
        <div className="product-item">
          <img src={PainManagement} alt="Pain Management" />
          <p>Pain Management</p>
          <button onClick={() => openPopup("Pain Management")}>
            LEARN MORE
          </button>
        </div>
        <div className="product-item">
          <img src={Veterinary} alt="Veterinary" />
          <p>Veterinary</p>
          <button onClick={() => openPopup("Veterinary")}>LEARN MORE</button>
        </div>
      </div>

      {selectedProduct && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            {getPopupContent()}
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compounding;
