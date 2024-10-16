import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import About1 from "./picture/about-1.png";
import About2 from "./picture/about-2.png";
import AboutVideo from "./video-for-about.mp4";

const About = () => {
  const imagesRef = useRef<HTMLDivElement | null>(null);
  const [openPopup, setOpenPopup] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = imagesRef.current?.querySelectorAll(
      "img, video, .team-info"
    );
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const toggleContent = (index: number) => {
    setOpenPopup(openPopup === index ? null : index);
  };

  return (
    <div className="about-us-content" ref={imagesRef}>
      <div className="about-us">Consulting at AMC Burbank Pharmacy</div>
      <div className="first-section">
        {/* <img src={About1} alt="About1" className="about-1" /> */}
        <video autoPlay muted loop preload="auto" playsInline className="video">
          <source src={AboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="first-section-text-info bordered-box">
          <p className="aboutText">
            At AMC Burbank Pharmacy, we believe that personalized care is
            essential for optimal health. Our customized consulting services are
            designed to meet the unique needs of each individual, providing
            tailored advice and support for various health concerns. Our
            experienced pharmacists take the time to understand your specific
            health goals and challenges, offering expert guidance on medication
            management, lifestyle changes, and wellness strategies. Whether you
            need assistance with chronic condition management, medication
            interactions, or nutritional advice, our team is dedicated to
            empowering you with the knowledge and tools you need to thrive.
          </p>
          <p className="aboutText">
            We also offer specialized consultations for areas such as dietary
            supplements, preventive care, and post-surgical recovery, ensuring
            that you receive comprehensive support every step of the way. At AMC
            Burbank Pharmacy, your health is our priority. Experience the
            benefits of customized consulting and take charge of your wellness
            journey with confidence!
          </p>
        </div>
      </div>

      <div className="about-us">
        Prescription Medications at AMC Burbank Pharmacy
      </div>
      <div className="second-section">
        <div className="second-section-text-info bordered-box">
          <p className="aboutText">
            At AMC Burbank Pharmacy, we are dedicated to providing our community
            with a comprehensive range of prescription medications tailored to
            meet individual health needs. Our experienced pharmacists work
            closely with healthcare providers to ensure that patients receive
            the highest quality medications, along with personalized care and
            support.
          </p>
          <p className="aboutText">
            At AMC Burbank Pharmacy, we prioritize patient education and safety.
            Our pharmacists are always available to answer questions about
            medications, potential side effects, and interactions with other
            drugs. We also provide convenient services such as medication
            synchronization, and refill reminders to help you stay on track with
            your treatment, as well as a free complimentary delivery service
            with your prescription medication.
          </p>
        </div>
        <img src={About2} alt="About2" className="about-2" />
      </div>

      <img
        src="./images/cardiogramma.png"
        alt="cardiogramma"
        className="cardiogramma"
      />

      <div className="team-section">
        <h2 className="team-title">Why Choose Us</h2>
        <div className="team-info popup-columns">
          {[
            {
              title: "Top-Quality Products",
              content:
                "At our pharmacy, we pride ourselves on offering only the highest quality products. Each item is carefully selected and rigorously tested to ensure it meets our strict standards.",
            },
            {
              title: "Expertly Curated Selection",
              content:
                "Our team of professionals curates a diverse range of products tailored to meet your unique needs. We understand that every customer is different, and we strive to offer selections that address various health concerns, preferences, and lifestyles.",
            },
            {
              title: "Customer Satisfaction",
              content:
                "Your satisfaction is our mission, and we continually seek feedback to improve our services and offerings.",
            },
            {
              title: "Pharmacy Developed Medications",
              content:
                "Our pharmacy specializes in developing personalized medications to meet your specific health needs.",
            },
          ].map((item, index) => (
            <div className="popup-item" key={index}>
              <p>
                <strong className="definitions">{item.title}</strong>
              </p>
              <span
                className="plus-button"
                onClick={() => toggleContent(index)}
              >
                +
              </span>
              <div
                className={`popup-content ${openPopup === index ? "open" : ""}`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
