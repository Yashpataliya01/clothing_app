import React from "react";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    <div className="parallax-wrapper">
      {/* Fixed background image */}
      <div className="parallax-bg"></div>

      {/* Scrollable content overlay */}
      <div className="parallax-content">
        {/* Hero Section */}
        <header className="heros">
          <div className="hero-text">
            <h1>Explore Our Extensive Fabric Library</h1>
            <p>
              Experience our selection of cutting-edge designs, ensuring
              superior comfort and quality fabrics.
            </p>
          </div>
          <button>VIEW DESIGNS</button>
        </header>

        {/* Metrics Section */}
        <section className="metrics">
          <div className="metric-card">
            <h2>2.5M+</h2>
            <p>Production Capacity</p>
          </div>
          <div className="metric-card">
            <h2>20,000+</h2>
            <p>Retail Outlets</p>
          </div>
          <div className="metric-card">
            <h2>40+</h2>
            <p>Years of Expertise</p>
          </div>
        </section>

        {/* Global Operations Section */}
        <section className="global-operations">
          <h2>Global Operations</h2>
          <p>
            We operate across multiple countries, delivering premium fabrics and
            unparalleled value to customers and partners worldwide.
          </p>
          <img
            src="https://valji.in/wp-content/uploads/2024/08/Content-scaled.jpg"
            alt="Global Operations"
          />
        </section>
      </div>
    </div>
  );
};

export default InfoSection;
