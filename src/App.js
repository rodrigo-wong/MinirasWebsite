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
      <div id="home" className="d-flex justify-content-center align-items-center mx-3 full-height-lg">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="summary" style={{ marginTop: "10em" }}>
        <Summary />
      </div>
      <div id="services" style={{ marginTop: "10em" }}>
        <Services />
      </div>
      <div id="contact" style={{ marginTop: "10em" }}>
        <ContactForm />
      </div>
    </>
  );
}

export default App;
