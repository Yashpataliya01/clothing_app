import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Uniform.css";
import "../../../../../styles/variable.css";
import { productList, items } from "../../../../../Data/Public";

gsap.registerPlugin(ScrollTrigger);

const Uniforms = () => {
  const [selected, setSelected] = useState(0);
  const containerRefs = useRef([]);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    containerRefs.current.forEach((container, index) => {
      const dir = index % 2 === 0 ? -150 : 150;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          container,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        )
        .fromTo(
          imageRefs.current[index],
          { x: dir, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          textRefs.current[index],
          { x: -dir, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=1"
        );
    });
  }, []);

  return (
    <section className="uniforms-section">
      <div className="uniforms-tabs">
        {items.map((item, i) => (
          <button
            key={i}
            className={`uniform-tab inter ${selected === i ? "active" : ""}`}
            onClick={() => setSelected(i)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="uniforms-content">
        {productList.map((item, i) => (
          <div
            key={i}
            className={`uniform-block ${selected === i ? "visible" : "hidden"}`}
            ref={(el) => (containerRefs.current[i] = el)}
            style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div
              className="uniform-image"
              ref={(el) => (imageRefs.current[i] = el)}
            >
              <img src={item.images} alt={item.heading} />
            </div>
            <div
              className="uniform-text"
              ref={(el) => (textRefs.current[i] = el)}
            >
              <h2 className="rajdhani-semibold">{item.heading}</h2>
              <p className="paragraph">{item.subheading}</p>
              <button className="uniform-btn inter">Explore Collection</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Uniforms;
