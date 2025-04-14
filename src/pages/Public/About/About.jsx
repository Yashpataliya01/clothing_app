import React from "react";
import "./About.css";
import "../Home/Home.css";
import "../../../styles/typography.css";
import "../../../styles/variable.css";

// import conten
import ChooseUs from "../../../components/ChooseUs/ChooseUs";
import useScrollAnimate from "../../../components/Animation/scrollAnimation.jsx";
import History from "./components/History/History.jsx";

export const About = () => {
  useScrollAnimate();
  return (
    <div className="about_container">
      <div className="about_header">
        <div className="about_overlay">
          <h1 className="fade-in-up title hero_heading">
            Leading Textile Innovation
          </h1>
          <p className="fade-in-up description paragraph">
            Raghav Premium is one of the largest manufacturers of uniform and
            business wear fabrics. With the annual production output of over 25
            million meters, we define volume and variety.
          </p>
        </div>
      </div>
      <ChooseUs />
      <div className="about_mission">
        <h2 className="rajdhani-semibold">
          Our mission is to achieve our objectives with fairness, honesty, and
          courtesy towards our clients, employees, vendors, and society.
        </h2>
      </div>
      <div>
        <History />
      </div>
    </div>
  );
};
