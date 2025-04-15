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
            duration: 2,
            stagger: 0.2,
            delay: 0.4,
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

        <ul
          className={`list inter black_color ${
            isScrolled ? "scrolled-text" : ""
          }`}
        >
          {/* Desktop dropdown */}
          <li
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className={`nav-link dropdown ${
              isScrolled ? "scrolled-link" : checkPath() ? "black" : "white"
            }`}
          >
            Products
            <ul className={`dropdown_menu ${isDropdownOpen ? "show" : ""}`}>
              <li className="dropdown_item">
                <Link
                  to="/product/school"
                  className={`nav-link ${isScrolled ? "scrolled-link" : ""}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  School
                </Link>
              </li>
              <li className="dropdown_item">
                <Link
                  to="/product/corporate"
                  className={`nav-link ${isScrolled ? "scrolled-link" : ""}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Corporate
                </Link>
              </li>
              <li className="dropdown_item">
                <Link
                  to="/product/hospital"
                  className={`nav-link ${isScrolled ? "scrolled-link" : ""}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Hospital
                </Link>
              </li>
              <li className="dropdown_item">
                <Link
                  to="/product/institutional"
                  className={`nav-link ${isScrolled ? "scrolled-link" : ""}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Institutional
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/about"
              className={`nav-link ${
                isScrolled ? "scrolled-link" : checkPath() ? "black" : "white"
              }`}
              style={{ textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li
            className={`nav-link ${
              isScrolled ? "scrolled-link" : checkPath() ? "black" : "white"
            }`}
          >
            <Link
              to="/blogs"
              className={`nav-link ${
                isScrolled ? "scrolled-link" : checkPath() ? "black" : "white"
              }`}
              style={{ textDecoration: "none" }}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/catalogs"
              className={`nav-link ${
                isScrolled ? "scrolled-link" : checkPath() ? "black" : "white"
              }`}
              style={{ textDecoration: "none" }}
            >
              Catalogue
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`nav-link ${
                isScrolled ? "scrolled-link" : checkPath() ? "black" : "white"
              }`}
              style={{ textDecoration: "none" }}
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
      <div className="mobile_menu" ref={mobileMenuRef}>
        <i
          className="ri-close-circle-fill close-icon"
          style={{ fontSize: "32px", cursor: "pointer" }}
          onClick={() => setMobileMenuOpen(false)}
        ></i>

        <ul className="mobile_list inter">
          {["Products", "About", "Blogs", "catalogs", "Contact Us"].map(
            (item, index) => (
              <li
                key={item}
                ref={(el) => (mobileMenuItemsRef.current[index] = el)}
                className="mobile_nav_item"
                onClick={() => {
                  if (item !== "Products") setMobileMenuOpen(false);
                }}
              >
                {item === "Products" ? (
                  <>
                    <div
                      onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      Products{" "}
                      {isMobileDropdownOpen ? (
                        <i className="ri-arrow-up-s-fill"></i>
                      ) : (
                        <i className="ri-arrow-down-s-fill"></i>
                      )}
                    </div>
                    {isMobileDropdownOpen && (
                      <ul className="dropdown_menu_mobile">
                        <li className="dropdown_item">
                          <Link
                            to="/product/school"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            School
                          </Link>
                        </li>
                        <li className="dropdown_item">
                          <Link
                            to="/product/corporate"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            Corporate
                          </Link>
                        </li>
                        <li className="dropdown_item">
                          <Link
                            to="/product/hospital"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            Hospital
                          </Link>
                        </li>
                        <li className="dropdown_item">
                          <Link
                            to="/product/institutional"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            Institutional
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={`/${
                      item === "Contact Us" ? "contact" : item.toLowerCase()
                    }`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {item}
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
