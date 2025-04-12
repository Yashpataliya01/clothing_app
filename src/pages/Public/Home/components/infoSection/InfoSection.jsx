import React from "react";
import "./InfoSection.css";
import useInView from "../../../../../components/Animation/useInView.jsx";

const InfoSection = () => {
  // Using your custom hook to determine when the section is in view.
  const [sectionRef, isVisible] = useInView({ threshold: 0.3 });

  return (
    <section className="info_section" ref={sectionRef}>
      <div className={`info_content ${isVisible ? "animate" : ""}`}>
        <div className="explore_part">
          <div className="text_group">
            <h1 className="fade-up delay0">Explore Our Fabric Library</h1>
            <p className="fade-up delay1">
              Discover a wide range of premium fabrics tailored for excellence
              and comfort.
            </p>
          </div>
          <button className="small_btn bg_white fade-up delay2">VIEW DESIGNS</button>
        </div>
        <div className="marketing fade-up delay3">
          <div className="metric_card">
            <h1>2.5M+</h1>
            <p>Production Capacity</p>
          </div>
          <div className="metric_card">
            <h1>20,000+</h1>
            <p>Retail Outlets</p>
          </div>
          <div className="metric_card">
            <h1>40+</h1>
            <p>Years of Expertise</p>
          </div>
        </div>
        <div className="global">
          <h1 className="global-text fade-up delay4">Global Operations</h1>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
