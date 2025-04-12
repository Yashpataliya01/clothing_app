import React from "react";
import "./Contact.css";
import "../../../styles/variable.css";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="contact_container">
          <h1 className="color_white">Contact Us</h1>
        </div>
        <p className="text_center margin_top_8">
          HOME/ <span className="color_gray">CONTACT US</span>
        </p>
      </div>
      <div className="contact_info">
        <div className="full_height contact_left">
          <h1>LET'S KEEP THE CONVERSATION GOING</h1>
        </div>
        <div className="contact_right">
          <h1 className="flex_wrap">
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
            <p>Visit Us At :</p>
            <h2>
              B/5, Trade World, Kamala Mills Compound, Senapati Bapat Road,
              Lower Parel (West), Mumbai - 400 013
            </h2>
          </div>
          <div>
            <p>Email Us :</p>
            <h2>enquiries@siyaram.com</h2>
          </div>
          <div>
            <p>Call Us On :</p>
            <h2>+91 22 3040 0500/ 022 -68330500</h2>
          </div>
        </div>
      </div>
      <div className="contact_form">
        <h1>Get In Touch With Us</h1>
        <p className="color_gray">
          Simply fill the form and we will reach out to you as soon as possible.
        </p>
        <hr
          style={{
            width: "15%",
            color: "yellow",
            backgroundColor: "MenuText",
          }}
        />
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
