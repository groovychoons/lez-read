import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import logo from '../assets/lez_read_logo.png';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image
            src={logo}
            alt="Lez Read Logo"
            width="120"
            height="auto"
          />
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/events">
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/zines">
              Zines
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
