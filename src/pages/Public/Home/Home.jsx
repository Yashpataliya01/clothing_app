import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Home.css";
import "../../../styles/typography.css";
import "../../../styles/variable.css";

import ImageSlider from "./components/imageSlider/ImageSlider";
import Header from "./components/header/Header";
import Uniforms from "./components/uniforms/Uniforms";
import InfoSection from "./components/infoSection/InfoSection";

const Home = () => {
  const mainAboutRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
            });
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home_container">
      <Header />
      <main className="main_container">
        <div className="main_about animate-on-scroll" ref={mainAboutRef}>
          <h5 style={{ fontFamily: "Poppins" }}>Est. 1998</h5>
          <h1>Empower Your Identity</h1>
          <p style={{ fontFamily: "Poppins" }}>
            Swaraj Synthetics Private Limited is a leading manufacturer of
            premium uniform fabrics under the brand Raghav Premium Suiting.
            Since 1998, we have been delivering high-quality, durable textiles
            from our state-of-the-art facility in Bhilwara, Rajasthan.
          </p>
        </div>

        <div>
          <Uniforms />
        </div>

        <div className="main_why animate-on-scroll">
          <h1>Why Customers Choose Us</h1>
          <div className="why_container">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div className="clild" key={i}>
                  <img
                    src="https://media.istockphoto.com/id/1355357978/vector/handshake-symbol-forming-a-love-heart-colored-icon-charity-help-concept-trendy-flat-isolated.jpg?s=612x612&w=0&k=20&c=RGEVEddZqw0WwmbDAhP76gano8vW3JKofai1JsEvHiA="
                    alt=""
                  />
                  <h1>Dedicated Partnerships</h1>
                  <p>
                    Valji prioritizes building long-term relationships with its
                    customers based on trust, reliability, and excellent
                    customer service.
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="animate-on-scroll">
          <ImageSlider />
        </div>

        <div className="animate-on-scroll">
          <InfoSection />
        </div>
      </main>
    </div>
  );
};

export default Home;
