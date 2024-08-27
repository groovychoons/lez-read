import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container className="pt-5">
      <h1>Contact Us</h1>
      <Row className="mt-4">
        <Col md={6}>
          <p>
            Thank you for your interest in Lez Read! Please note that we are
            currently on hiatus and are not regularly checking emails. However,
            you can still reach out to us if necessary.
          </p>
          <p>
            <strong>Email:</strong>{" "}
              lezreadcardiff@gmail.com
          </p>
          <p>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://www.instagram.com/lezreadcardiff"
              target="_blank"
              rel="noopener noreferrer"
            >
              @lezreadcardiff
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
