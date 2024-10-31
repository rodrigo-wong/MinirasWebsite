import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar = () => {
  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState("Home");

  // Function to handle link clicks and set the active link
  const handleLinkClick = (link, id) => {
    setActiveLink(link);

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
    >
      <Navbar.Brand href="#" className="d-flex align-items-center ms-5">
        <span className="logo-text fw-bold text-maroon fs-1">MN</span>
        <span className="dot text-secondary fw-bold fs-1">.</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 d-flex justify-content-center">
          <Nav.Link href="#home" className="nav-link mx-4">
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="nav-link mx-4">
            About
          </Nav.Link>
          <Nav.Link href="#summary" className="nav-link mx-4">
            Summary
          </Nav.Link>
          <Nav.Link href="#services" className="nav-link mx-4">
            Services
          </Nav.Link>
          <Nav.Link href="#contact" className="nav-link mx-4">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
