import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import { imageData } from "./ImageData";
import pdf1 from "../assets/zines/2022 Xmas Zine.pdf";
import pdf2 from "../assets/zines/2023 Xmas Zine.pdf";

function Archive() {
  return (
    <Container className="pt-5">
      <h1>The Zine Archive</h1>
      <br />
      <p className="col-md-6">
        Each Lez Read book club was accompanied by a mini-zine made by either
        Nazmia or Zara with additional information about the writer we were
        reading that month.
      </p>
      <p className="col-md-6">
        Our Christmas events featured expanded zines which reviewed the year in
        Lez Read, which you can download below. Click on the zines to zoom in or
        download them.
      </p>
      <p>
        <a href={pdf1} target="_blank" rel="noreferrer">
          Download the Christmas Zine 2022
        </a>
      </p>
      <p>
        <a href={pdf2} target="_blank" rel="noreferrer">
          Download the Christmas Zine 2023
        </a>
      </p>
      <br />
      <SRLWrapper>
        <Row className="pb-5">
          {imageData.map((image) => (
            <Col key={image.id} xs={6} md={4} lg={3} xl={2} className="mb-4">
              <a href={image.href}>
                <img src={image.src} alt={image.alt} className="img-fluid" />
              </a>
            </Col>
          ))}
        </Row>
      </SRLWrapper>
    </Container>
  );
}

export default Archive;
