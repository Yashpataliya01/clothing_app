import React, { useState, useRef, useEffect } from "react";
import "./CardSlider.css";

// import data
import { timelineData } from "../../../../../Data/Public";
const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);
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
