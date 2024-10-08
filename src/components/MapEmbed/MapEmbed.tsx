import React from "react";

const MapEmbed: React.FC = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.34657919321444!2d-118.33002566627042!3d34.157974250001665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bfc4bedde287%3A0x6b61e6905de235!2sAMC%20Pharmacy!5e0!3m2!1sen!2sam!4v1723479223408!5m2!1sen!2sam"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
