import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Event from "./Event";
import EventData from "../events.json";

const Events = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      {showWelcome && (
        <Alert variant="success" className="mt-3">
          Hey, welcome to Esprit Events!
        </Alert>
      )}
      <Row>
        {EventData.map(event => (
          <Col key={event.id} md={4}>
            <Event data={event} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
