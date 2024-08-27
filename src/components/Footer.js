import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row className="text-center text-md-start">
          <Col xs={12} md={6} className="mb-2 mb-md-0">
            <p className="mb-0">
              Website created by{" "}
              <a
                href="https://twitter.com/thezarasiddique"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zara Siddique
              </a>
            </p>
            <Link to="/lez_read_crowd.png" download>Download Image</Link>
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <p className="mb-0">
              &copy; Lez Read 2024
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
