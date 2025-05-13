import React, { useState } from 'react';
import { Dropdown, ProgressBar, Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../../scss/Driver.scss/tripStage.scss' // Import your CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const TripStage = () => {
  const [status, setStatus] = useState('Scheduled');
  const [progress, setProgress] = useState(0);

  const handleSelect = (eventKey) => {
    setStatus(eventKey);

    // Set progress bar based on status
    if (eventKey === 'Scheduled') setProgress(0);
    else if (eventKey === 'Onboarding') setProgress(33);
    else if (eventKey === 'On Route') setProgress(66);
    else if (eventKey === 'Arrived at Destination') setProgress(100);
  };

  return (
    <Container className="mt-5">
      <Card className="shadow">
        <Card.Header className="header">
          TRIP STAGE/STATUS
        </Card.Header>
        <Card.Body>
          <Row className="mb-4 justify-content-end">
            <Col xs="auto">
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                  {status}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Scheduled">Scheduled</Dropdown.Item>
                  <Dropdown.Item eventKey="Onboarding">Onboarding</Dropdown.Item>
                  <Dropdown.Item eventKey="On Route">On Route</Dropdown.Item>
                  <Dropdown.Item eventKey="Arrived at Destination">Arrived at Destination</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col className="text-start text-danger fw-bold">Onboarding</Col>
            <Col className="text-center text-success fw-bold">On route</Col>
            <Col className="text-end text-success fw-bold">Arrived at destination</Col>
          </Row>

          <ProgressBar now={progress} className="mb-4" />

          <div className="mb-4">
            <img
              src="map-placeholder.jpg"
              alt="Map"
              className="img-fluid rounded"
            />
          </div>

          <div className="text-center">
            <Button variant="primary">Update Status</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TripStage;
