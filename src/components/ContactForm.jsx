import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Image,
} from "react-bootstrap";
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
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then((response) => {
        setSubmitted(true);
        setError(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setError(true);
      });
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      {submitted && (
        <Alert
          variant="success"
          className="text-center responsive-text mx-3 mx-md-4 mx-lg-5 g-3"
        >
          Thank you for your message!
        </Alert>
      )}
      {error && (
        <Alert
          variant="danger"
          className="text-center responsive-text mx-3 mx-md-4 mx-lg-5 g-3"
        >
          Oops! Something went wrong. Please try again.
        </Alert>
      )}
      <Row className="d-flex align-items-stretch responsive-text mx-3 mx-md-4 mx-lg-5 g-3">
        <Col md={8} lg={8} className="d-flex">
          <Form
            onSubmit={handleSubmit}
            className="p-4 shadow contact-form w-100"
          >
            <Container className="text-center mb-4">
              <h4>Get in touch</h4>
            </Container>
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
        <Col md={4} lg={4} className="d-none d-lg-block">
          <Image
            src="/assets/IMG_5907.jpg"
            className="w-100 rounded-3 shadow"
            alt="Credentials"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
