import React, { useRef } from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// import logo
import logo from "../../../assets/img1.png";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const Footer = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formRef.current,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          formRef.current.reset(); // Optional: clear the form
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="contact-section">
            <span className="section-label rajdhani-semibold">
              Get in touch
            </span>
            <p className="section-title">Contact us</p>
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input type="tel" name="phone" placeholder="Phone Number" />
              </div>
              <div className="form-row">
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="city" placeholder="City" />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </form>
          </div>

          <div className="links-section">
            <div className="links-group">
              <span className="section-label rajdhani-medium">Products</span>
              <ul>
                <li>
                  <Link
                    to="/product/school"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    School
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product/hospital"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Hospital
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product/institutional"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Institutional
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product/corporate"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Corporate
                  </Link>
                </li>
              </ul>
            </div>

            <div className="links-group">
              <span className="section-label rajdhani-semibold">Company</span>
              <ul>
                <li>
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="links-group">
              <span className="section-label rajdhani-semibold">
                Contact Info
              </span>
              <ul>
                <li>+91 99296 17844</li>
                <li>enquiry@raghavpremium.in</li>
                <li>
                  139, Ist Floor Jethlia Chamber, Pur Road, Bhilwara, 311001,
                  Rajasthan India
                </li>
              </ul>
            </div>
          </div>

          <div className="newsletter-section">
            <span className="section-label rajdhani-semibold">
              Stay Updated
            </span>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="btn-subscribe">
                Subscribe
              </button>
            </div>
            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
            <img src={logo} alt="Raghav Premium Logo" className="footer-logo" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2025 Raghav Premium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
