import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import zara_and_naz from "../assets/zara_and_naz.JPG";
import crowd from "../assets/lez_read_crowd.png";

function Welcome() {
  return (
    <div>
      <Row
        style={{
          backgroundImage: `url(${crowd})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "80vh",
          maxWidth: "100vw",
        }}
      ></Row>
      <Container className="p-5">
        <Row
          style={{
            display: "flex", // Ensures children are flex items
            alignItems: "center", // Centers the image vertically
          }}
        >
          <Col md={{ span: 5, offset: 1 }} className="text-end">
            <p>
              Nazmia and Zara set up Lez Read in March 2022 as a way to find
              queer friends in Cardiff without going to bars and nightclubs. Our
              'no pre-reading required' approach proved popular and we ended up
              with a vibrant community of more than 60 people. While the book
              club is currently on a hiatus, we still have a lively WhatsApp
              community and occassional social events.
            </p>
            <p>
              Lez Read gathered monthly at The Queer Emporium in Cardiff to
              gossip about queer authors and ask each other silly questions. We
              have created this site to provide a list of events that have taken
              place, along with an archive of the zines and posters for these
              events.
            </p>
            <p>
              We are grateful to the{" "}
              <a href="https://llyfrau.cymru/en/" target="_blank">
                Books Council of Wales
              </a>{" "}
              for funding that has helped us to create this website and fund
              other Lez Read activties/resources.
            </p>
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <Image
              alt="Lez Read Founders Naz and Zara"
              width="300"
              height="auto"
              src={zara_and_naz}
              fluid
            />
          </Col>
        </Row>
        <h2 className="text-center py-5">Our Partners and Friends</h2>
        <Row className="pb-5">
          <Col md={4} className="text-center mb-4">
            <a href="https://thequeeremporium.co.uk" target="_blank">
              <img
                src={require("../assets/logos/tqe-logo.png")}
                alt="The Queer Emporium"
                width="150"
                height="auto"
              />
            </a>
          </Col>
          <Col md={4} className="text-center mb-4">
            <a href="https://www.instagram.com/lezwritecardiff" target="_blank">
              <img
                src={require("../assets/logos/lezwrite.png")}
                alt="Lez Write"
                width="150"
                height="auto"
              />
            </a>
          </Col>
          <Col md={4} className="text-center mb-4">
            <a href="https://paned-o-ge.wales/" target="_blank">
              <img
                src={require("../assets/logos/paned.png")}
                alt="Paned o Ge"
                width="150"
                height="auto"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Welcome;
