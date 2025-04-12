import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "../../../styles/navigations.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar_container ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <h1>
          <Link
            to="/"
            className={`logo-text ${isScrolled ? "scrolled-logo" : ""}`}
          >
            Logo
          </Link>
        </h1>
      </div>
      <ul className={`list ${isScrolled ? "scrolled-text" : ""}`}>
        <li
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          Products
          <ul className={`dropdown_menu ${isDropdownOpen ? "show" : ""}`}>
            <li className="dropdown_item">Product 1</li>
            <li className="dropdown_item">Product 2</li>
            <li className="dropdown_item">Product 3</li>
          </ul>
        </li>
        <li>
          <Link
            to="/about"
            className={`nav-link ${isScrolled ? "scrolled-link" : ""}`}
            style={{ textDecoration: "none" }}
          >
            About
          </Link>
        </li>
        <li className={`nav-link ${isScrolled ? "scrolled-link" : ""}`}>
          Blogs
        </li>
        <li className={`nav-link ${isScrolled ? "scrolled-link" : ""}`}>
          Catalogue
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav-link ${isScrolled ? "scrolled-link" : ""}`}
            style={{ textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <i
        className="ri-menu-3-fill menu-icon"
        style={{ color: "black", fontSize: "28px" }}
      ></i>
    </nav>
  );
};

export default Navbar;
