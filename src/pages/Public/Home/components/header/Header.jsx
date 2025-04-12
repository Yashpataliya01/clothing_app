import React, { useEffect } from "react";
import gsap from "gsap";

// import styles
import "./Header.css";

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
        <source
          src="https://videos.pexels.com/video-files/5743177/5743177-uhd_2732_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className={`saveText headline`}>Driven by Quality</h1>
        <h1 className="headline">Powered by Innovation.</h1>
      </div>
    </header>
  );
};

export default Header;
