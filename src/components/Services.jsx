import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Services = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">Services</h2>
      <Row className="justify-content-center fs-5 m-3 m-md-4 m-lg-5 g-3">
        
        {/* First Column: Lesson Types */}
        <Col
          xs={12}
          md={7}
          lg={8}
          className="mb-4"
        >
          <Card className="shadow border-0 h-100 rounded-3 p-3">
            <Card.Body>
              <Card.Title className="text-center fw-bold mb-3">
                Lesson Types
              </Card.Title>
              <Card.Text>
                <div className="ms-3">
                  <ul>
                    <li>Piano Lessons: Beginner to Professional Level</li>
                    <li>Music Theory: Beginner to Intermediate Level</li>
                    <li>Vocal Lessons: Beginner to Intermediate Level</li>
                    <li>Collaborative Piano Techniques: Advanced Level</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Column: Languages */}
        <Col xs={12} md={5} lg={4} className="mb-4">
          <Card className="shadow border-0 h-100 rounded-3 p-3">
            <Card.Body>
              <Card.Title className="text-center fw-bold mb-3">
                Languages
              </Card.Title>
              <Card.Text>
                <div className="ms-3">
                  <ul>
                    <li>English</li>
                    <li>Russian</li>
                    <li>Turkish</li>
                    <li>Azerbaijani</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Services;
