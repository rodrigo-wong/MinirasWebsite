import React from "react";
import "./App.css";
import Navbar from "./components/CustomNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Summary from "./components/Summary";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Navbar className="sticky-top" />
      <div className="bg-light">
        <div id="home" className="full-height-lg section">
          <Home />
        </div>
        <div id="about" className="section">
          <About />
        </div>
        <div id="summary" className="section" style={{ marginTop: "10em" }}>
          <Summary />
        </div>
        <div id="services" className="section" style={{ marginTop: "10em" }}>
          <Services />
        </div>
        <div id="contact" className="section" style={{ marginTop: "10em" }}>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default App;
