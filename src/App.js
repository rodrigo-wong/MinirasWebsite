import React from "react";
import "./App.css";
import Navbar from "./components/CustomNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Summary from "./components/Summary";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import { useInView } from "react-intersection-observer";

const Section = ({ children, id, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust the threshold as needed
  });

  return (
    <div
      id={id}
      ref={ref}
      className={`${className} section ${inView ? "fade-in" : "fade-out"}`}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <>
      <Navbar className="sticky-top" />
      <div className="bg-light">
        <Section id="home" className="full-height-lg">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="summary" style={{ marginTop: "10em" }}>
          <Summary />
        </Section>
        <Section id="services" style={{ marginTop: "10em" }}>
          <Services />
        </Section>
        <Section id="contact" style={{ marginTop: "10em" }}>
          <ContactForm />
        </Section>
      </div>
    </>
  );
}

export default App;
