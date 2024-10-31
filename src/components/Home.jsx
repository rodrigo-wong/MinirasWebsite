import React from "react";
import { Container, Row, Col, Badge, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <Container className="">
      <Row className="align-items-center m-3 m-md-4 m-lg-5 g-3">
        {/* Image Column: Set order-first on smaller screens */}
        <Col
          xs={12}
          md={6}
          lg={5}
          className="text-center d-flex justify-content-center align-items-center order-lg-last order-md-last order-first mb-4 mb-lg-0"
        >
          <div
            className="rounded-circle overflow-hidden"
            style={{
              width: "40vw", // Set a responsive width based on viewport
              height: "40vw", // Keep height the same as width
              maxWidth: "450px", // Maximum width for larger screens
              maxHeight: "450px", // Maximum height for larger screens
              minWidth: "250px", // Minimum width for smaller screens
              minHeight: "250px", // Minimum height for smaller screens
            }}
          >
            <Image
              src="/assets/avatar.jpeg"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
              alt="Profile"
            />
          </div>
        </Col>

        {/* Text Column */}
        <Col xs={12} md={6} lg={7} className="text-md-start">
          <div
            style={{
              backgroundColor: "rgb(192, 166, 49)", // Replace with your RGB color
              color: "#fff", // Text color for contrast
              padding: "0.5rem 1rem", // Padding similar to the Badge
              borderRadius: "0.25rem", // Rounded corners
              display: "inline-block", // Makes it inline like a Badge
              fontSize: "1.25rem", // Font size for a larger text (fs-5 equivalent)
            }}
            className="mb-3 fw-bold"
          >
            Minira Najafzade
          </div>

          <h1 className="fw-bold mb-3">I'm a Pianist</h1>
          <p className="text-muted fs-5">
            I am a pianist with two master’s degrees in Piano Performance,
            earned from the University of Toronto and the Baku Academy of Music.
            Born into a family of musicians—my father, a woodwind professor, and
            my mother, a prominent piano teacher— I was immersed in music from a
            young age. I made my debut at six, performing with the Philharmonic
            Orchestra in Baku. By the time I was ten, I was competing
            internationally, consistently earning first and second places in
            prestigious competitions.
          </p>
          <div className="d-flex justify-content-md-start justify-content-center gap-3">
            <a
              href="https://youtube.com/@miniranajafzade5967"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-secondary" className="rounded-circle">
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="lg"
                  style={{ color: "#FF0000" }}
                />
              </Button>
            </a>
            <a href="mailto:minira.musicl@gmail.com">
              <Button variant="outline-secondary" className="rounded-circle">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                />
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
