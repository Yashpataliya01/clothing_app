import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Product.css";
import "../../../styles/typography.css";
import "../../../styles/variable.css";

import {
  quality,
  product_segments,
  product_slider,
} from "../../../Data/Public";

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
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
          backgroundImage: `url("https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?q=80&w=2070&auto=format&fit=crop")`,
        }}
      >
        <h1 className="hero_heading orange_color">Our Collections</h1>
        <p className="paragraph">
          Smart solutions for schools, corporates, hospitals & institutions.
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
          Empowering Students with <span>Quality</span>, <span>Comfort</span>,
          and <span>Style</span> for Their Academic Journey
        </h1>
      </div>

      <div className="product_segments_hero">
        <h1 className="rajdhani-semibold">Product Segments</h1>
        <div className="product_segments">
          {product_segments.map((item, index) => (
            <div className="product_cards" key={index}>
              <img src={item.image} alt={item.title} />
              <h3 className="rajdhani-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="product_image_slider">
        {product_slider.map((item, index) => (
          <div
            className={`product_image_slider_container ${index % 2 !== 0 ? "reverse" : ""
              }`}
            key={index}
            ref={(el) => (sliderRefs.current[index] = el)}
          >
            <img src={item.img} alt="school" />
            <div className="product_image_slider_text">
              <h1 className="rajdhani-semibold orange_color" >{item.heading}</h1> <br></br>
              <p className="paragraph">{item.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
