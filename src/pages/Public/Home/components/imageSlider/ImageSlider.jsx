import React, { useEffect, useState, useRef } from "react";
import "./ImageSlider.css";
import "../../../../../styles/global.css";

const ImageSlider = () => {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1587725943749-3d475c15c983?q=80&w=2070&auto=format&fit=crop",
      hover: "Tees & Jeans",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558171813-2ffcb3d2ea27?q=80&w=2070&auto=format&fit=crop",
      hover: "Shirts & Trousers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587725943749-3d475c15c983?q=80&w=2070&auto=format&fit=crop",
      hover: "Tees & Jeans",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558171813-2ffcb3d2ea27?q=80&w=2070&auto=format&fit=crop",
      hover: "Shirts & Trousers",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 4000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image_slider_container">
      <h4 className="text_center" style={{ margin: "20px" }}>
        What's Trending?
      </h4>
      <div className="slider-container">
        <div className="slider">
          {images.map((img, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${img.image})` }}
            >
              <div
                className="hover-overlay"
                onClick={() => console.log(img.hover)}
              >
                <h3>{img.hover}</h3>
              </div>
            </div>
          ))}

          <button className="prev flex_center" onClick={goToPrevious}>
            ❮
          </button>
          <button className="next flex_center" onClick={goToNext}>
            ❯
          </button>

          <div className="dots">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
