import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Company logos
import company1 from "../../../../../assets/Company/company1.png";
import company2 from "../../../../../assets/Company/company2.jpg";
import company3 from "../../../../../assets/Company/company3.jpg";
import company4 from "../../../../../assets/Company/company4.png";
import company5 from "../../../../../assets/Company/company5.png";

import "./CompanySlider.css";

const CompanySlider = () => {
  const sliderRef = useRef(null);
  const images = [company1, company2, company3, company4, company5];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".slide-track", {
        xPercent: -50,
        ease: "linear",
        repeat: -1,
        duration: 50,
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="company-slider" ref={sliderRef}>
      <div className="slide-track">
        {images.concat(images).map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Company ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanySlider;
