import React from "react";
import "./About.css";
import "../Home/Home.css";

export const About = () => {
  return (
    <div className="about_container">
      <div className="about_header">
        <div className="about_overlay">
          <h1 className="fade-in-up title">Leading Textile Innovation</h1>
          <p className="fade-in-up description">
            Valji is one of the largest manufacturers of uniform and business
            wear fabrics. With the annual production output of over 25 million
            meters, we define volume and variety.
          </p>
        </div>
      </div>
      <div className="main_why">
        <h1>Why Customers Choose Us</h1>
        <div className="why_container">
          <div className="clild">
            <img
              src="https://media.istockphoto.com/id/1355357978/vector/handshake-symbol-forming-a-love-heart-colored-icon-charity-help-concept-trendy-flat-isolated.jpg?s=612x612&w=0&k=20&c=RGEVEddZqw0WwmbDAhP76gano8vW3JKofai1JsEvHiA="
              alt=""
            />
            <h1>Dedicated Partnerships</h1>
            <p>
              Valji prioritizes building long-term relationships with its
              customers based on trust, reliability, and excellent customer
              service.
            </p>
          </div>
          <div className="clild">
            <img
              src="https://media.istockphoto.com/id/1355357978/vector/handshake-symbol-forming-a-love-heart-colored-icon-charity-help-concept-trendy-flat-isolated.jpg?s=612x612&w=0&k=20&c=RGEVEddZqw0WwmbDAhP76gano8vW3JKofai1JsEvHiA="
              alt=""
            />
            <h1>Dedicated Partnerships</h1>
            <p>
              Valji prioritizes building long-term relationships with its
              customers based on trust, reliability, and excellent customer
              service.
            </p>
          </div>
          <div className="clild">
            <img
              src="https://media.istockphoto.com/id/1355357978/vector/handshake-symbol-forming-a-love-heart-colored-icon-charity-help-concept-trendy-flat-isolated.jpg?s=612x612&w=0&k=20&c=RGEVEddZqw0WwmbDAhP76gano8vW3JKofai1JsEvHiA="
              alt=""
            />
            <h1>Dedicated Partnerships</h1>
            <p>
              Valji prioritizes building long-term relationships with its
              customers based on trust, reliability, and excellent customer
              service.
            </p>
          </div>
        </div>
      </div>
      <div className="about_mission">
        <h2>
          Our mission is to achieve our objectives with fairness, honesty, and
          courtesy towards our clients, employees, vendors, and society.
        </h2>
      </div>
    </div>
  );
};
