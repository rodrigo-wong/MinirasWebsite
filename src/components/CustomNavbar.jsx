import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [expanded, setExpanded] = useState(false);

  // Function to handle link clicks, set the active link, and close the menu
  const handleLinkClick = (link, id) => {
    setActiveLink(link);
    setExpanded(false);

    // Scroll to the section with the specified id
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to update the active link based on scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setActiveLink(id.charAt(0).toUpperCase() + id.slice(1));
            }
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold to fine-tune when the active link changes
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Clean up the observer on component unmount
  }, []);

  return (
    <Navbar
      expand="lg"
      className="shadow-sm px-4 bg-light sticky-top custom-navbar "
      expanded={expanded}
    >
      <Navbar.Brand href="#" className="d-flex align-items-center ms-lg-5 ms-md-2">
        <span className="logo-text fw-bold text-maroon fs-1">M<span style={{color:'rgb(192, 166, 49)'}}>N</span></span>
        <span className="dot text-secondary fw-bold fs-1">.</span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 d-flex justify-content-center">
          <Nav.Link
            href="#home"
            className={`nav-link mx-4 ${activeLink === "Home" ? "active" : ""}`}
            onClick={() => handleLinkClick("Home", "home")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#about"
            className={`nav-link mx-4 ${
              activeLink === "About" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("About", "about")}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#summary"
            className={`nav-link mx-4 ${
              activeLink === "Summary" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("Summary", "summary")}
          >
            Summary
          </Nav.Link>
          <Nav.Link
            href="#services"
            className={`nav-link mx-4 ${
              activeLink === "Services" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("Services", "services")}
          >
            Services
          </Nav.Link>
          <Nav.Link
            href="#contact"
            className={`nav-link mx-4 ${
              activeLink === "Contact" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("Contact", "contact")}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
