import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import About1 from "./picture/about-1.png";
import About2 from "./picture/about-2.png";

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
          <div className="about-us">About Us</div>
      <div className="first-section">
      <img src={About1} alt="About1" className="about-1" />

        <div className="first-section-text-info bordered-box">
          <p>
            Our pharmacy has a long history of providing excellent health care
            services. We are dedicated to offering the best in pharmaceutical
            care to our community. Whether you need advice on your medication or
            health supplements, we are here to help.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ex
            recusandae voluptatem magnam voluptatibus quo ipsa! Adipisci eveniet
            officia nostrum beatae exercitationem quis inventore expedita
            architecto aspernatur, voluptas commodi, veniam repellat doloribus
            quos ducimus est libero, asperiores accusantium consequuntur quo
            sed. Aut temporibus sequi quibusdam, placeat quisquam totam
            expedita! Unde.
          </p>
        </div>
      </div>

          <div className="about-us">Medications Developed by Our Pharmacy</div>
      <div className="second-section">
        <div className="second-section-text-info bordered-box">
          <p>
            We have a dedicated team working tirelessly to develop new and
            effective medications. Our commitment to research and development
            ensures that we are always at the forefront of innovation, offering
            our customers the best possible care.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            debitis omnis atque veniam quasi, porro totam nihil maiores velit
            nobis. Iste, fugit! Corporis adipisci neque corrupti libero sequi
            eos unde voluptas placeat quaerat deleniti modi natus nemo facilis,
            excepturi provident consequuntur at! Tempore similique eius ea natus
            dolore asperiores sapiente.
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
                "Additional details about our top-quality products and how we ensure their effectiveness...",
            },
            {
              title: "Expertly Curated Selection",
              content:
                "Additional details about our selection process and the criteria used to choose our products...",
            },
            {
              title: "Customer Satisfaction",
              content:
                "Additional information about our commitment to customer satisfaction and how we address your needs...",
            },
            {
              title: "Pharmacy Developed Medications",
              content:
                "Additional details about the medications we develop and how they cater to individual health requirements...",
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
