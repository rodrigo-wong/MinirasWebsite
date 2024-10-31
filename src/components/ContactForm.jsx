import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_API_KEY);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitted(true);
        setError(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setError(true);
      });
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      {submitted && (
        <Alert
          variant="success"
          className="text-center fs-5 mx-3 mx-md-4 mx-lg-5 g-3"
        >
          Thank you for your message!
        </Alert>
      )}
      {error && (
        <Alert
          variant="danger"
          className="text-center fs-5 mx-3 mx-md-4 mx-lg-5 g-3"
        >
          Oops! Something went wrong. Please try again.
        </Alert>
      )}
      <Row className="justify-content-center fs-5 mx-3 mx-md-4 mx-lg-5 g-3">
        <Col md={6} lg={8}>
          <Form onSubmit={handleSubmit} className="p-4 shadow contact-form">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Type your message here"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="input-field"
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="dark" type="submit" className="submit-btn">
                Send Message
              </Button>
            </div>
          </Form>
        </Col>

        {/* New Column for Contact Information with Enhanced Styling */}
        <Col md={6} lg={4} className="d-flex align-items-center">
          <div className="contact-info-card p-4 shadow rounded-3">
            <h5 className="fw-bold mb-3 text-center">Or reach me at:</h5>
            <p className="contact-info-text">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              <strong>Phone:</strong> (437) 242-1689
            </p>
            <p className="contact-info-description">
              Feel free to reach out via phone if you have any
              questions or need immediate assistance.
            </p>
          </div>
        </Col>
      </Row>

    </Container>
  );
};

export default ContactForm;
