import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="contact-form">
          <h5 className="highlight">Contact Us</h5>
          <h2>Get a personalized call from our team.</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email ID" />
            <input type="text" placeholder="City" />
            <textarea placeholder="Message"></textarea>
            <div className="captcha-placeholder">[reCAPTCHA]</div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>

        <div className="footer-links">
          <div>
            <h5 className="highlight">Products</h5>
            <ul>
              <li>School</li>
              <li>Hospital</li>
              <li>Institutional</li>
              <li>Corporate</li>
            </ul>
          </div>

          <div>
            <h5 className="highlight">About Us</h5>
            <ul>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="highlight">Contact Us</h5>
            <ul>
              <li>+91 9833894546</li>
              <li>info@raghavpremium.in</li>
              <li>Marine Lines, Mumbai</li>
            </ul>
          </div>

          <div className="newsletter">
            <h5 className="highlight">Newsletter</h5>
            <div className="email-box">
              <input type="email" placeholder="E-mail" />
              <button>➤</button>
            </div>
            <img
              src="/assets/valji-logo.png"
              alt="raghavpremium Logo"
              className="footer-logo"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="socials">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
        <p>© 2024 — Copyright</p>
      </div>
    </footer>
  );
};

export default Footer;
