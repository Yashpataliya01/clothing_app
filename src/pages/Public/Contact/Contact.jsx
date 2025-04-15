import React from "react";
import "./Contact.css";
import "../../../styles/variable.css";

const Contact = () => {
  return (
    <div className="contact_Wrapper">
      <div className="contact">
        <div className="contact_container">
          <h1 className="hero_heading orange_color">Contact Us</h1>
        </div>
        <p className="text_center margin_top_8 paragraph">
          HOME / <span className="color_gray">CONTACT US</span>
        </p>
      </div>
      <div className="contact_info">
        <div className="full_height contact_left">
          <h1 className="rajdhani-semibold">
            LET'S KEEP THE CONVERSATION GOING
          </h1>
        </div>
        <div className="contact_right">
          <h1 className="flex_wrap rajdhani-semibold">
            Contact us for any queries or Brand Collaborations
          </h1>
          <hr
            style={{
              width: "15%",
              color: "yellow",
              backgroundColor: "MenuText",
            }}
          />
          <div>
            <p className="paragraph">Visit Us At :</p>
            <h2 className="rajdhani-medium">
              139, Ist Floor Jethlia Chamber, Pur Road, Bhilwara, 311001,
              Rajasthan India
            </h2>
          </div>
          <div>
            <p className="paragraph">Email Us :</p>
            <h2 className="rajdhani-medium">info@raghavpremium.in</h2>
          </div>
          <div>
            <p className="paragraph">Call Us On :</p>
            <h2 className="rajdhani-medium">+91 9833894546</h2>
          </div>
        </div>
      </div>
      <div className="contact_form">
        <div className="contact_form_header">
          <h1 className="rajdhani-semibold">Get In Touch With Us</h1>
          <p className="color_gray paragraph">
            Simply fill the form and we will reach out to you as soon as
            possible.
          </p>
        </div>
        <form action="" className="form_container">
          <div className="form_input">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Contact Number" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Message" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
