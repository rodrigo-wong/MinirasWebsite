import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar = () => {
  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState("Home");
  const [expanded, setExpanded] = useState(false); // State to control the Navbar collapse

  // Function to handle link clicks, set the active link, and close the menu
  const handleLinkClick = (link, id) => {
    setActiveLink(link);
    setExpanded(false); // Close the menu

    // Scroll to the section with the specified id
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expand="lg"
      className="shadow-sm px-4 bg-light sticky-top custom-navbar"
      expanded={expanded} // Bind the state to the Navbar
    >
      <Navbar.Brand href="#" className="d-flex align-items-center ms-5">
        <span className="logo-text fw-bold text-maroon fs-1">MN</span>
        <span className="dot text-secondary fw-bold fs-1">.</span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)} // Toggle the menu
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 d-flex justify-content-center">
          <Nav.Link
            href="#home"
            className="nav-link mx-4"
            onClick={() => handleLinkClick("Home", "home")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#about"
            className="nav-link mx-4"
            onClick={() => handleLinkClick("About", "about")}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#summary"
            className="nav-link mx-4"
            onClick={() => handleLinkClick("Summary", "summary")}
          >
            Summary
          </Nav.Link>
          <Nav.Link
            href="#services"
            className="nav-link mx-4"
            onClick={() => handleLinkClick("Services", "services")}
          >
            Services
          </Nav.Link>
          <Nav.Link
            href="#contact"
            className="nav-link mx-4"
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
