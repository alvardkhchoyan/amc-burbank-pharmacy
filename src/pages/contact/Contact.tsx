import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import MapEmbed from "../../components/MapEmbed/MapEmbed";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <ContactUsSection />
      <div className="location-section">
        <h2 className="location-title">Visit Our Pharmacy</h2>
        <p className="location-description">
          Find us at our main location and explore our wide range of health
          products.
        </p>
        <div className="map-embed">
          <MapEmbed />
        </div>
      </div>
    </div>
  );
};

export default Contact;
