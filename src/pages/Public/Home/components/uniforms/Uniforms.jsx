import React, { useState, useEffect, useRef } from "react";
import "./Uniform.css";
import "../../../../../styles/variable.css";
import { productList, items } from "../../../../../Data/Public";
import { Link } from "react-router-dom";

const Uniforms = () => {
  const [selected, setSelected] = useState(0);
  const containerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    containerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      containerRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
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
            <Link
              to={item.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {item.title}
            </Link>
          </button>
        ))}
      </div>

      <div className="uniforms-content">
        {productList.map((item, i) => (
          <div
            key={i}
            className={`uniform-block ${selected === i ? "show" : ""}`}
            ref={(el) => (containerRefs.current[i] = el)}
            style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div className="uniform-image">
              <img src={item.images} alt={item.heading} />
            </div>
            <div className="uniform-text">
              <h2 className="rajdhani-semibold">{item.heading}</h2>
              <p className="paragraph">{item.subheading}</p>
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className="uniform-btn inter">
                  Explore Collection
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Uniforms;
