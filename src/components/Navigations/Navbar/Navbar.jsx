import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

// Import image
import logo from "../../../assets/img1.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  const checkPath = () => {
    return ["/contact", "/blogs", "/catalogs"].includes(location.pathname);
  };

  // Refs for mobile menu list items
  const mobileMenuItemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          duration: 0.5,
          right: 0,
          ease: "power3.out",
        });

        // Animate each list item in sequence
        gsap.fromTo(
          mobileMenuItemsRef.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.3,
            ease: "power3.out",
          }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          duration: 0.5,
          right: "-100%",
          ease: "power3.in",
        });
      }
    }
  }, [mobileMenuOpen]);

  // Check if the link is active
  const isActive = (path) => {
    if (path === "/products") {
      return location.pathname.includes("/product");
    }
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`navbar_container ${isScrolled ? "scrolled" : ""}`}>
        {/* Logo and desktop nav */}
        <div className="logo">
          <Link
            to="/"
            className={`logo-text ${isScrolled ? "scrolled-logo" : ""}`}
          >
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className={`nav-list ${isScrolled ? "scrolled-text" : ""}`}>
          {/* Desktop dropdown */}
          <li
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className={`nav-item ${isActive("/products") ? "active" : ""} ${
              isScrolled ? "scrolled-link" : checkPath() ? "black" : "white"
            }`}
          >
            <span className="nav-link">Products</span>
            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <li className="dropdown-item">
                <Link
                  to="/product/school"
                  className={`dropdown-link ${
                    isActive("/product/school") ? "active" : ""
                  }`}
                >
                  School
                </Link>
              </li>
              <li className="dropdown-item">
                <Link
                  to="/product/corporate"
                  className={`dropdown-link ${
                    isActive("/product/corporate") ? "active" : ""
                  }`}
                >
                  Corporate
                </Link>
              </li>
              <li className="dropdown-item">
                <Link
                  to="/product/hospital"
                  className={`dropdown-link ${
                    isActive("/product/hospital") ? "active" : ""
                  }`}
                >
                  Hospital
                </Link>
              </li>
              <li className="dropdown-item">
                <Link
                  to="/product/institutional"
                  className={`dropdown-link ${
                    isActive("/product/institutional") ? "active" : ""
                  }`}
                >
                  Institutional
                </Link>
              </li>
            </ul>
          </li>

          <li className={`nav-item ${isActive("/about") ? "active" : ""}`}>
            <Link
              to="/about"
              className={`nav-link ${
                isScrolled ? "scrolled-link" : checkPath() ? "black" : "white"
              }`}
            >
              About
            </Link>
          </li>
          <li className={`nav-item ${isActive("/blogs") ? "active" : ""}`}>
            <Link
              to="/blogs"
              className={`nav-link ${
                isScrolled ? "scrolled-link" : checkPath() ? "black" : "white"
              }`}
            >
              Blogs
            </Link>
          </li>
          <li className={`nav-item ${isActive("/catalogs") ? "active" : ""}`}>
            <Link
              to="/catalogs"
              className={`nav-link ${
                isScrolled ? "scrolled-link" : checkPath() ? "black" : "white"
              }`}
            >
              Catalogue
            </Link>
          </li>
          <li className={`nav-item ${isActive("/contact") ? "active" : ""}`}>
            <Link
              to="/contact"
              className={`nav-link ${
                isScrolled ? "scrolled-link" : checkPath() ? "black" : "white"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile menu icon */}
        <i
          className="ri-menu-3-fill menu-icon"
          onClick={() => setMobileMenuOpen(true)}
        ></i>
      </nav>

      {/* Mobile side-menu */}
      <div className="mobile-menu" ref={mobileMenuRef}>
        <i
          className="ri-close-circle-fill close-icon"
          onClick={() => setMobileMenuOpen(false)}
        ></i>

        <ul className="mobile-list">
          <li
            ref={(el) => (mobileMenuItemsRef.current[0] = el)}
            className={`mobile-nav-item ${
              location.pathname.includes("/product") ? "active" : ""
            }`}
          >
            <div
              onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
              className="mobile-dropdown-toggle"
            >
              Products{" "}
              {isMobileDropdownOpen ? (
                <i className="ri-arrow-up-s-fill"></i>
              ) : (
                <i className="ri-arrow-down-s-fill"></i>
              )}
            </div>
            {isMobileDropdownOpen && (
              <ul className="mobile-dropdown-menu">
                <li
                  className={`mobile-dropdown-item ${
                    isActive("/product/school") ? "active" : ""
                  }`}
                >
                  <Link to="/product/school">School</Link>
                </li>
                <li
                  className={`mobile-dropdown-item ${
                    isActive("/product/corporate") ? "active" : ""
                  }`}
                >
                  <Link to="/product/corporate">Corporate</Link>
                </li>
                <li
                  className={`mobile-dropdown-item ${
                    isActive("/product/hospital") ? "active" : ""
                  }`}
                >
                  <Link to="/product/hospital">Hospital</Link>
                </li>
                <li
                  className={`mobile-dropdown-item ${
                    isActive("/product/institutional") ? "active" : ""
                  }`}
                >
                  <Link to="/product/institutional">Institutional</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            ref={(el) => (mobileMenuItemsRef.current[1] = el)}
            className={`mobile-nav-item ${isActive("/about") ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            ref={(el) => (mobileMenuItemsRef.current[2] = el)}
            className={`mobile-nav-item ${isActive("/blogs") ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link to="/blogs">Blogs</Link>
          </li>
          <li
            ref={(el) => (mobileMenuItemsRef.current[3] = el)}
            className={`mobile-nav-item ${
              isActive("/catalogs") ? "active" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link to="/catalogs">Catalogue</Link>
          </li>
          <li
            ref={(el) => (mobileMenuItemsRef.current[4] = el)}
            className={`mobile-nav-item ${
              isActive("/contact") ? "active" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
