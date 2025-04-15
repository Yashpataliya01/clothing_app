import React, { useState } from "react";
import "./CardSlider.css";

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const timelineData = [
    {
      period: "2016–2022",
      points: [
        "Scaled operations with in-house looms and modern production techniques to ensure quality and volume.",
      ],
    },
    {
      period: "2023–Present",
      points: [
        "A trusted name in the fabric industry, known for consistency, innovation, and customer trust.",
      ],
    },
    {
      period: "1988–1998",
      points: [
        "Mr. Santosh Agal spent 10 years gaining hands-on experience across various textile domains.",
      ],
    },
    {
      period: "1998",
      points: [
        "Mr. Santosh Agal & Miss Savita Agal established Swaraj Synthetic Pvt. Ltd. to manufacture quality suiting fabrics.",
      ],
    },
    {
      period: "2002",
      points: [
        "The brand “Raghav Premium” was introduced, offering reliable and stylish fabric solutions.",
      ],
    },
    {
      period: "2005–2015",
      points: [
        "Introduced trendsetting fabrics like 2-way and 4-way stretch to meet evolving market needs.",
      ],
    },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const getPositionClass = (index) => {
    const total = timelineData.length;
    const pos = (index - activeIndex + total) % total;

    if (index === activeIndex) return "position-center";
    else if ((index + total - activeIndex) % total === 1)
      return "position-1-right";
    else if ((index + total - activeIndex) % total === 2)
      return "position-2-right";
    else if ((activeIndex + total - index) % total === 1)
      return "position-1-left";
    else if ((activeIndex + total - index) % total === 2)
      return "position-2-left";
    else return "hidden";
  };

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h2>Our Journey</h2>
        <div className="red-underline"></div>
      </div>

      <div className="timeline-fan-container">
        {timelineData.map((item, index) => {
          const isActive = index === activeIndex;
          const positionClass = getPositionClass(index);

          return (
            <div
              key={index}
              className={`timeline-card-wrapper ${positionClass}`}
              onClick={() => handleCardClick(index)}
            >
              <div className={`timeline-card ${isActive ? "active" : ""}`}>
                <h3>{item.period}</h3>
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSlider;
