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

// import image
import scrollImage from "../../../assets/Home/HomeScrollerImage.jpeg";
import LogoSliders from "./components/LogoSliders/LogoSliders.jsx";
const Home = () => {
  useScrollAnimate();
  return (
    <div className="home_container">
      <Header />
      <main className="main_container">
        <div className="main_about animate-on-scroll bg_white">
          <h5 className="rajdhani-semibold">Est. 1998</h5>
          <h1 className="rajdhani-semibold">Empower Your Identity</h1>
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
      <div className="sub" style={{ backgroundImage: `url(${scrollImage})` }}>
        <div className="animate-on-scroll">
          <InfoSection />
        </div>
      </div>
      <div className="company_reviews">
        <LogoSliders />
      </div>
    </div>
  );
};

export default Home;
