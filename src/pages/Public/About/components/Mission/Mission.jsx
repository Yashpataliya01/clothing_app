import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Mission.css";

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(
      ".vision-section, .mission-section, .section-header, .section-content li"
    );

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // start when element enters 80% from top
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="vision-mission-container" ref={sectionRef}>
      {/* Vision Section */}
      <div className="vision-section">
        <div className="section-header">
          <div className="icon-container">
            <svg
              className="section-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.25C7.99 5.25 4.75 8.49 4.75 12.5C4.75 16.51 7.99 19.75 12 19.75C16.01 19.75 19.25 16.51 19.25 12.5C19.25 8.49 16.01 5.25 12 5.25Z"
                stroke="#e11d48"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z"
                stroke="#e11d48"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2.5V4.5"
                stroke="#e11d48"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12.5H2"
                stroke="#e11d48"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 20.5V22.5"
                stroke="#e11d48"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12.5H22"
                stroke="#e11d48"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="rajdhani-semibold">Our Vision</h2>
        </div>

        <ul className="section-content">
          <li className="inter">
            To emerge as a global leader in the manufacturing of industrial and
            military explosives and an innovative solution provider with a focus
            on safety, quality and reliability.
          </li>
        </ul>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="section-header">
          <div className="icon-container">
            <svg
              className="section-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.5L12 2.5L5 8.5V19.5C5 20.0304 5.21071 20.5391 5.58579 20.9142C5.96086 21.2893 6.46957 21.5 7 21.5H17C17.5304 21.5 18.0391 21.2893 18.4142 20.9142C18.7893 20.5391 19 20.0304 19 19.5V8.5Z"
                stroke="#e11d48"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 21.5V11.5H15V21.5"
                stroke="#e11d48"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="rajdhani-semibold">Our Mission</h2>
        </div>

        <ul className="section-content">
          <li className="inter">
            To provide innovative technology and services through Research and
            Development.
          </li>
          <li className="inter">
            To contain product and service costs through constant re-engineering
            and improvement in all business processes.
          </li>
          <li className="inter">
            To ensure high quality delivery of services offering exemplary
            technical, safety, administrative and professional excellence with
            commitment to environmental safeguards.
          </li>
          <li className="inter">
            To forge and nurture alliances that are complimentary to the
            Company's global ambitions.
          </li>
          <li className="inter">
            To retain our responsive, efficient and effective processes and
            services to realise our vision at all times.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VisionMission;
