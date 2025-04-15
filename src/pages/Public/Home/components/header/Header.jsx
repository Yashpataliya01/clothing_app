import React, { useEffect } from "react";
import gsap from "gsap";

// import styles
import "./Header.css";

// import hero video
import video from "../../../../../assets/presentation.mp4";

const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      ".headline",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );
  }, []);

  return (
    <header className="hero">
      <div className="overlay"></div>
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className={`saveText headline hero_heading`}>Driven by Quality</h1>
        <h1 className="headline hero_heading">Powered by Innovation.</h1>
      </div>
    </header>
  );
};

export default Header;
