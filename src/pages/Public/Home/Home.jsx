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
      {/* Header Section */}
      <Header />
      <main className="main_container">
        {/* About Section */}
        <div className="main_about animate-on-scroll bg_white">
          <h5 className="rajdhani-semibold">Est. 1998</h5>
          <h1 className="rajdhani-semibold">Woven to Represent. Built to Last.</h1>
          <p className="paragraph">
            Founded in 1998, Swaraj Synthetics Pvt. Ltd. produces premium-grade uniform fabrics under the brand Raghav Premium Suiting. Based in Bhilwara, Rajasthan, our modern facility powers consistency, comfort, and strength in every meter we weave.
          </p>
        </div>

        {/* Uniforms Section */}
        <div className="bg_white">
          <Uniforms />
        </div>

        {/* Why Choose Us Section */}
        <div>
          <ChooseUs />
        </div>

        {/* Image Slider Section */}
        {/*<div className="animate-on-scroll bg_white">
          <ImageSlider />
        </div>*/}
      </main>

      {/* Info Section with Background Image */}
      <div className="sub" style={{ backgroundImage: `url(${scrollImage})` }}>
        <div className="animate-on-scroll">
          <InfoSection />
        </div>
      </div>

      {/* Company Reviews Section */}
      <div className="company_reviews">
        <LogoSliders />
      </div>
    </div>
  );
};

export default Home;
