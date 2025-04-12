import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Home.css";
import "../../../styles/typography.css";
import "../../../styles/variable.css";

import ImageSlider from "./components/imageSlider/ImageSlider";
import Header from "./components/header/Header";
import Uniforms from "./components/uniforms/Uniforms";
import InfoSection from "./components/infoSection/InfoSection";
import ChooseUs from "../../../components/ChooseUs/ChooseUs";
import useScrollAnimate from "../../../components/Animation/scrollAnimation.jsx";

const Home = () => {
  useScrollAnimate();
  return (
    <div className="home_container">
      <Header />
      <main className="main_container">
        <div className="main_about animate-on-scroll bg_white">
          <h5 className="rajdhani-semibold">Est. 1998</h5>
          <h1 className="heading_fonts">Empower Your Identity</h1>
          <p className="paragraph">
            Swaraj Synthetics Private Limited is a leading manufacturer of
            premium uniform fabrics under the brand Raghav Premium Suiting.
            Since 1998, we have been delivering high-quality, durable textiles
            from our state-of-the-art facility in Bhilwara, Rajasthan.
          </p>
        </div>

        <div className="bg_white">
          <Uniforms />
        </div>
        <div>
          <ChooseUs />
        </div>

        <div className="animate-on-scroll bg_white">
          <ImageSlider />
        </div>
      </main>
      <div className="sub">
        <div className="animate-on-scroll info">
          <InfoSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
