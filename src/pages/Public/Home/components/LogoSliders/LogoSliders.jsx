import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import image1 from "../../../../../assets/Company/company1.png";
import image2 from "../../../../../assets/Company/company2.jpg";
import image3 from "../../../../../assets/Company/company3.jpg";
import image4 from "../../../../../assets/Company/company4.png";
import image5 from "../../../../../assets/Company/company5.png";

import "./LogoSliders.css";

const LogoSliders = () => {
  const sliderRef = useRef(null);

  const logos = [image1, image2, image3, image4, image5];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = document.querySelector(".logo-track");
      gsap.to(track, {
        xPercent: -50,
        duration: 40,
        ease: "linear",
        repeat: -1,
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="logo-slider" ref={sliderRef}>
      <h1 className="rajdhani-semibold orange_color">
        Trusted by the best Institutions
      </h1>
      <div className="logo-track">
        {logos.concat(logos).map((logo, index) => (
          <div className="logo-slide" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSliders;
