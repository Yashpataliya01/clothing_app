import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Product.css";
import "../../../../styles/typography.css";
import "../../../../styles/variable.css";

// Import Hero Image
import heroImage from "../../../../assets/Products/ProductHero/school.png";

import { quality, school_slider } from "../../../../Data/Public";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const School = () => {
  const sliderRefs = useRef([]);

  useEffect(() => {
    // Initialize animations for each slider element
    initializeSliderAnimations();
  }, []);

  const initializeSliderAnimations = () => {
    sliderRefs.current.forEach((el, index) => {
      if (!el) return; // Skip if element reference is null

      // Alternate direction for odd/even slides
      const direction = index % 2 === 0 ? -150 : 150;

      // Create GSAP timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
          scrub: 0.5,
        },
      });

      // Container animation
      tl.fromTo(
        el,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
          rotation: 5,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.6,
          ease: "power4.out",
        }
      );

      // Image animation
      const imageEl = el.querySelector("img");
      if (imageEl) {
        tl.fromTo(
          imageEl,
          {
            x: direction,
            opacity: 0,
            scale: 1.2,
            rotation: -5,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.8,
            ease: "expo.out",
          },
          "-=1.2" // Overlap with container animation
        );
      }

      // Text animation
      const textEl = el.querySelector(".product_image_slider_text");
      if (textEl) {
        tl.fromTo(
          textEl,
          {
            x: -direction,
            opacity: 0,
            skewX: 10,
          },
          {
            x: 0,
            opacity: 1,
            skewX: 0,
            duration: 1.8,
            ease: "expo.out",
          },
          "-=1.5"
        );
      }
    });
  };

  return (
    <div className="products">
      {/* Hero Section with Layout Overlay */}
      <div className="hero-section">
        <div className="layout"></div>
        <div
          className="products_hero"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <h1 className="hero_heading">Inspiring Future Leaders</h1>
        </div>
      </div>

      {/* Quality Cards Section */}
      <div className="qualitys">
        {quality.map((item, index) => (
          <div className="quality" key={index}>
            <img src={item.icons} alt={item.title} />
            <h3 className="rajdhani-bold">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Tagline Section */}
      <div className="product_tagline">
        <p>"</p>
        <h1 className="rajdhani-semibold">
          Empowering Students with <span>Uncompromising Comfort</span>,{" "}
          <span>Enhanced Productivity</span>, and{" "}
          <span>Lasting Impression</span> for Their Academic Journey
        </h1>
      </div>

      {/* Product Image Slider Section */}
      <div className="product_image_slider">
        {school_slider.map((item, index) => (
          <div
            className={`product_image_slider_container ${index % 2 !== 0 ? "reverse" : ""
              }`}
            key={index}
            ref={(el) => (sliderRefs.current[index] = el)}
          >
            <img src={item.img} alt={item.heading} />
            <div className="product_image_slider_text">
              <h1 className="rajdhani-semibold orange_color" style={{ lineHeight: 1 }}>{item.heading}</h1>
              <p className="paragraph">{item.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default School;
