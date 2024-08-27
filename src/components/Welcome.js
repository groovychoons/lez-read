import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import zara_and_naz from "../assets/zara_and_naz.JPG";
import crowd from "../assets/crowd2.png";

function Welcome() {
  return (
    <div>
      <Row
        style={{
          backgroundImage: `url(${crowd})`,
          backgroundSize: "cover",
          backgroundPosition: "top center", // Aligns the top of the image with the top of the container
          backgroundAttachment: "fixed", // Keeps the background fixed when scrolling
          minHeight: "80vh",
          display: "flex", // Ensures children are flex items
          justifyContent: "center", // Centers the image horizontally
          alignItems: "center", // Centers the image vertically
          alignContent: "center",
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
          <Col md={{ span: 5, offset: 1}} className="text-end">
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
      </Container>
    </div>
  );
}

export default Welcome;
