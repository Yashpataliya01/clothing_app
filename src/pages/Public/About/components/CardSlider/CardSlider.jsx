import React, { useState, useRef, useEffect } from "react";
import "./CardSlider.css";

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);

  const timelineData = [
    {
      period: "2016–2022",
      points: [
        "Scaled operations with in-house looms and modern production techniques to ensure quality and volume.",
      ],
      heading: "Expansion & Infrastructure",
    },
    {
      period: "2023–Present",
      points: [
        "A trusted name in the fabric industry, known for consistency, innovation, and customer trust.",
      ],
      heading: "Raghav Premium Today",
    },
    {
      period: "1988–1998",
      points: [
        "Mr. Santosh Agal spent 10 years gaining hands-on experience across various textile domains.",
      ],
      heading: "The Learning Years",
    },
    {
      period: "1998",
      points: [
        "Mr. Santosh Agal & Miss Savita Agal established Swaraj Synthetic Pvt. Ltd. to manufacture quality suiting fabrics.",
      ],
      heading: "Foundation of Swaraj Synthetic",
    },
    {
      period: "2002",
      points: [
        "The brand `Raghav Premium`` was introduced, offering reliable and stylish fabric solutions.",
      ],
      heading: "Launch of Raghav Premium",
    },
    {
      period: "2005–2015",
      points: [
        "Introduced trendsetting fabrics like 2-way and 4-way stretch to meet evolving market needs.",
      ],
      heading: "Innovation in Fabric",
    },
  ];

  // Minimum swipe distance required (in pixels)
  const minSwipeDistance = 50;

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

  const handleTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Move to next card (right direction)
      const nextIndex = (activeIndex + 1) % timelineData.length;
      setActiveIndex(nextIndex);
    } else if (isRightSwipe) {
      // Move to previous card (left direction)
      const prevIndex =
        (activeIndex - 1 + timelineData.length) % timelineData.length;
      setActiveIndex(prevIndex);
    }
  };

  // For mouse events (desktop)
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
    // Prevent default text selection during drag
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setCurrentX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const distance = startX - currentX;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe) {
        // Move to next card (right direction)
        const nextIndex = (activeIndex + 1) % timelineData.length;
        setActiveIndex(nextIndex);
      } else if (isRightSwipe) {
        // Move to previous card (left direction)
        const prevIndex =
          (activeIndex - 1 + timelineData.length) % timelineData.length;
        setActiveIndex(prevIndex);
      }

      setIsDragging(false);
    }
  };

  // Cleanup function for mouse events
  useEffect(() => {
    const handleMouseUpOutside = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    document.addEventListener("mouseup", handleMouseUpOutside);
    return () => {
      document.removeEventListener("mouseup", handleMouseUpOutside);
    };
  }, [isDragging]);

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h2 className="rajdhani-medium">Our Journey</h2>
        <div className="red-underline"></div>
      </div>

      <div
        className="timeline-fan-container"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
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
                <h3 className="rajdhani-medium">{item.period}</h3>
                <h1 className="rajdhani-semibold">{item.heading}</h1>
                <ul>
                  {item.points.map((point, i) => (
                    <li className="paragraph" key={i}>
                      {point}
                    </li>
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
