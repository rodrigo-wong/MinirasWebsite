import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container className="">
      <h2 className="text-center mb-5">Professional Summary</h2>
      <Row className="justify-content-center fs-5 fs-5 m-3 m-md-4 m-lg-5 g-3">
        
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Image
            src="/assets/IMG_5909.jpg"
            className="w-100 rounded-3 shadow"
            alt="Credentials"
          />
        </Col>
        <Col xs={12} md={6} lg={8} className="mb-4">
          <Card className="shadow border-0 h-100 rounded-3 p-3">
            <Card.Body>
              <Card.Title className="text-center fw-bold mb-3">
                Academics
              </Card.Title>
              <Card.Text>
                <strong>University of Toronto</strong>
                <br />
                <div className="ms-3">
                  <ul>
                    <li className="">Master of Music in Piano Performance</li>
                  </ul>
                </div>
                <strong>Francis Poulenc Academie</strong>
                <div className="ms-3">
                  <ul>
                    <li className="">Masterclasses in Vocal and Piano Duo</li>
                  </ul>
                </div>
                <strong>Baku Academy of Music</strong>
                <div className="ms-3">
                  <ul>
                    <li className="">
                      Master’s Degree in Solo Piano Performance
                    </li>
                    <li>Bachelor’s Degree in Piano Performance</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={12} className="mb-4">
          <Card className="shadow border-0 h-100 rounded-3 p-3">
            <Card.Body>
              <Card.Title className="text-center fw-bold mb-3">
                Work Experience
              </Card.Title>
              <Card.Text>
                <strong>University of Toronto</strong>
                <br />
                <span className="">
                  Teaching Assistant, Collaborative Pianist
                </span>
                <div className="ms-3">
                  <ul>
                    <li className="">
                      Assisting in teaching collaborative piano courses and
                      providing accompaniment for students in various
                      performance settings
                    </li>
                  </ul>
                </div>

                <strong>Pen Education</strong>
                <br />
                <span className=""> Piano Teacher</span>
                <div className="ms-3">
                  <ul>
                    <li className="">
                      Teaching piano to students of diverse skill levels,
                      focusing on technique, musical interpretation, and
                      performance preparation
                    </li>
                  </ul>
                </div>

                <strong>Walters Music Centre</strong>
                <br />
                <span className=""> Piano Teacher</span>

                <div className="ms-3">
                  <ul>
                    <li className="">
                      Teaching piano to students of diverse skill levels,
                      focusing on technique, musical interpretation, and
                      performance preparation
                    </li>
                  </ul>
                </div>

                <strong>National Conservatory of Azerbaijan</strong>
                <br />
                <span className=""> Piano Accompanist</span>

                <div className="ms-3">
                  <ul>
                    <li className="">
                      Served as an accompanist for students and faculty,
                      providing support for soloists and ensembles in rehearsals
                      and performances
                    </li>
                  </ul>
                </div>

                <strong>132-134 Educational Complex</strong>
                <br />
                <span className="">Music Teacher (IB Classes)</span>

                <div className="ms-3">
                  <ul>
                    <li className="">
                      Taught music to International Baccalaureate students,
                      incorporating elements of music theory, history, and
                      performance
                    </li>
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

export default About;
