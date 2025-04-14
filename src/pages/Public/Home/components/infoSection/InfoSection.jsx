import React, { useEffect } from "react";
import "./InfoSection.css";
import useInView from "../../../../../components/Animation/useInView.jsx";
import CountUp from "react-countup";

import maps from "../../../../../assets/maps.jpeg";
import { Link } from "react-router-dom";

const InfoSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Using your custom hook to determine when the section is in view.
  const [sectionRef, isVisible] = useInView({ threshold: 0.3 });

  return (
    <section className="info_section" ref={sectionRef}>
      <div className={`info_content ${isVisible ? "animate" : ""}`}>
        <div className="explore_part">
          <div className="text_group">
            <h1 className="fade-up delay0 rajdhani-bold">
              Explore Our Fabric Library
            </h1>
            <p className="fade-up delay1 paragraph">
              Discover a wide range of premium fabrics tailored for excellence
              and comfort.
            </p>
          </div>
          <button className="small_btn bg_white fade-up delay2">
            <Link
              to="/catalogs"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              VIEW DESIGNS
            </Link>
          </button>
        </div>
        <div className="marketing fade-up delay3">
          <div className="metric_card">
            <h1 className="rajdhani-bold">
              {isVisible ? (
                <CountUp
                  start={0}
                  end={2.5}
                  duration={3}
                  decimals={1}
                  suffix="M+"
                />
              ) : (
                "0M+"
              )}
            </h1>
            <p className="paragraph">Production Capacity</p>
          </div>
          <div className="metric_card">
            <h1 className="rajdhani-bold">
              {isVisible ? (
                <CountUp
                  start={0}
                  end={20000}
                  duration={3}
                  separator=","
                  suffix="+"
                />
              ) : (
                "0+"
              )}
            </h1>
            <p className="paragraph">Retail Outlets</p>
          </div>
          <div className="metric_card">
            <h1 className="rajdhani-bold">
              {isVisible ? (
                <CountUp start={0} end={20} duration={3} suffix="+" />
              ) : (
                "0+"
              )}
            </h1>
            <p className="paragraph">Years of Expertise</p>
          </div>
        </div>
        <div className="global" style={{ backgroundImage: `url(${maps})` }}>
          <h1
            className="rajdhani-bold"
            style={{ textAlign: "center", marginBottom: "50px" }}
          >
            Global Operations
          </h1>
          <div className="global-text fade-up delay4"></div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
