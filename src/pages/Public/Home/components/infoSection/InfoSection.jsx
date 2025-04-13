import React, { useEffect } from "react";
import "./InfoSection.css";
import useInView from "../../../../../components/Animation/useInView.jsx";
import CountUp from "react-countup";

const InfoSection = () => {
  // Using your custom hook to determine when the section is in view.
  const [sectionRef, isVisible] = useInView({ threshold: 0.3 });

  const citys = ["Delhi", "Kolkata", "Ahemdabad", "Dubai", "Rome"];

  useEffect(() => {
    const marker = document.createElement("div");
    marker.style.position = "absolute";
    marker.style.width = "14px";
    marker.style.height = "14px";
    marker.style.background = "red";
    marker.style.borderRadius = "50%";
    marker.style.cursor = "move";
    marker.style.zIndex = "9999";
    marker.style.top = "40%";
    marker.style.left = "40%";
    marker.draggable = true;

    document.querySelector(".global").appendChild(marker);

    marker.addEventListener("dragend", (e) => {
      const rect = marker.parentNode.getBoundingClientRect();
      const top = ((e.clientY - rect.top) / rect.height) * 100;
      const left = ((e.clientX - rect.left) / rect.width) * 100;
    });
  }, []);

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
            VIEW DESIGNS
          </button>
        </div>
        <div className="marketing fade-up delay3">
          <div className="metric_card">
            <h1 className="rajdhani-bold">
              {isVisible ? (
                <CountUp
                  start={0}
                  end={2.5}
                  duration={5}
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
                  duration={2}
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
                <CountUp start={0} end={20} duration={5} suffix="+" />
              ) : (
                "0+"
              )}
            </h1>
            <p className="paragraph">Years of Expertise</p>
          </div>
        </div>
        <div className="global">
          <div className="city-markers">
            {citys.map((city, index) => (
              <div
                key={index}
                className={`city-marker city-${city.toLowerCase()}`}
                title={city}
              >
                <span className="tooltip">{city}</span>
              </div>
            ))}
          </div>
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
