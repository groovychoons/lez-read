import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { eventData } from "./EventData";

function Events() {
  return (
    <Container className="py-5">
      <h1>Upcoming Events</h1>
      <br />
      <p>There are no upcoming events.</p>
      <br />
      <h1>Past Events</h1>
      <Row className="mt-4">
        {eventData
          .slice()
          .reverse()
          .map((event, index) => (
            <Col
              xs={6}
              md={4}
              lg={3}
              xl={2}
              className="mb-4"
              key={index}
              style={{ display: "flex" }}
            >
              <Card
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <div style={{ height: "260px", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={event.image}
                    alt={event.alt}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <Card.Body>
                  <small>{event.date}</small>
                  <Card.Title>{event.alt}</Card.Title>
                  <Card.Text>
                    {event.description ? (
                      event.description
                    ) : (
                      <i>
                        {event.book}
                        {event.author ? "," : " "} {event.author}
                      </i>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Events;
