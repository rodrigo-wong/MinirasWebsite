import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container className="">
      <h2 className="text-center mb-5">About Me</h2>
      <Row className="justify-content-center fs-5 m-3 m-md-4 m-lg-5 g-3">
        {/* Left Column */}
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Image
            src="/assets/IMG_0716.jpeg"
            className="w-100 rounded-3 shadow"
            alt="Credentials"
          />
        </Col>

        {/* Right Column */}
        <Col md={12} lg={8} className="mb-4 ">
          <Card className="shadow border-0 h-100 rounded-3">
            <Card.Body>
              <Card.Title className="text-center fw-bold mb-3">
                My Introduction
              </Card.Title>
              <Card.Text>
                Throughout my career, I have had the honor of winning awards at
                renowned competitions, including ClaviCologne, the Malta
                International Competition, and the Gwendolyn Koldofsky
                Competition in Piano Accompanying. I’ve performed solo concerts
                in Toronto, Malta, and Azerbaijan, and I’ve appeared as both a
                soloist and collaborative pianist in France, Italy, Spain, the
                USA, the UK, Canada, Malta, Russia, Germany, and Sweden.
                <br />
                <br />
                My artistic development has been enriched through masterclasses
                with distinguished artists, such as Pavel Gililov, Arkadi
                Zenziper, Susan Graham, Will Crutchfield, Jeff Cohen, Olivier
                Godin, Lydia Wong, James Parker, and many others.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center fs-5  m-3 m-md-4 m-lg-5 g-3">
        <Col md={12} lg={5} className="mb-4">
          <Card className="shadow border-0 h-100 rounded-3">
            <Card.Body>
              <Card.Title className="text-center fw-bold mb-3">
                Teaching Philosophy
              </Card.Title>
              <Card.Text>
                I believe that every student possesses unique strengths and
                abilities, and I customize my teaching methods to align with
                their individual learning styles and personalities.
                <br/>
                <br/>
                With a steadfast commitment to music education, I prioritize the
                needs of each student, guiding them to realize their musical
                potential while nurturing their authentic love for music. To
                enhance their engagement with the music community and boost
                their confidence, I ensure that my students have the opportunity
                to participate in annual musical performances and events.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={7} className="mb-4">
          <Image
            src="/assets/IMG_0721.jpeg"
            className="w-100 rounded-3 shadow"
            alt="Credentials"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
