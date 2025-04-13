import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Product.css";
import "../../../../styles/typography.css";
import "../../../../styles/variable.css";

import img from "../../../../assets/Products/Hopitals.png";

import { quality, student_segments } from "../../../../Data/Public";
gsap.registerPlugin(ScrollTrigger);

const School = () => {
  const sliderRefs = useRef([]);

  useEffect(() => {
    // For each slider container, add a more dramatic GSAP timeline
    sliderRefs.current.forEach((el, index) => {
      // Alternate direction for odd/even slides:
      const direction = index % 2 === 0 ? -150 : 150;

      // Create a GSAP timeline with ScrollTrigger that reverses on scroll-up.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
          scrub: 0.5,
        },
      });

      // Animate the entire container for an overall entrance (opacity, y, scale, rotation)
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

      // Image animation: slide in from side, add rotation and scale effects
      tl.fromTo(
        sliderRefs.current[index].querySelector("img"),
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
        "-=1.2" // overlap with container animation
      );

      // Text animation: slide in from the opposite side with a skew effect
      tl.fromTo(
        sliderRefs.current[index].querySelector(".product_image_slider_text"),
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
    });
  }, []);
  return (
    <div className="products">
      <div
        className="products_hero"
        style={{
          backgroundImage: img,
        }}
      >
        <h1 className="hero_heading orange_color">Inspiring Future Leaders</h1>
        <p className="paragraph">
          Quality uniforms that empower young minds and foster a spirit of
          excellence in education.
        </p>
      </div>

      <div className="qualitys">
        {quality.map((item, index) => (
          <div className="quality" key={index}>
            <img src={item.icons} alt={item.title} />
            <h3 className="rajdhani-bold">{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="product_tagline">
        <p>"</p>
        <h1 className="rajdhani-semibold">
          Empowering Students with <span>Uncompromising Comfort</span>,{" "}
          <span>Enhanced Productivity</span>, and{" "}
          <span>Lasting Impression</span> for Their Academic Journey
        </h1>
      </div>

      <div className="product_segments_hero">
        <h1 className="rajdhani-semibold">Product Segments</h1>
        <div className="product_segments">
          {product_segments.map((item, index) => (
            <div className="product_cards" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="product_image_slider">
        {Array(3)
          .fill("")
          .map((_, index) => (
            <div
              className={`product_image_slider_container ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
              key={index}
              ref={(el) => (sliderRefs.current[index] = el)}
            >
              <img
                src="https://images.unsplash.com/photo-1603207757545-de4fffdb404c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGltYWdlc3xlbnwwfDF8MHx8fDA%3D"
                alt="Product"
              />
              <div className="product_image_slider_text">
                <h1 className="rajdhani-semibold orange_color">
                  Heading {index + 1}
                </h1>
                <p className="paragraph">
                  Soft, gentle fabrics that are kind to delicate skin of the
                  young generation. Our kindergarten fabrics are designed to be
                  comfortable and durable, ensuring that young learners can
                  focus on play and learning.
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default School;
