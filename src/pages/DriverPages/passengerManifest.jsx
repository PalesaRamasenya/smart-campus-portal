import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import '../../scss/Driver.scss/passengerManifest.scss';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


const PassengerManifest = () => {
  const passengers = [
    { name: 'Jean Francis', studentNumber: '20231234' },
    { name: 'Jean Francis', studentNumber: '20231235' },
    { name: 'Jean Francis', studentNumber: '20231236' },
    { name: 'Jean Francis', studentNumber: '20231237' },
    { name: 'Jean Francis', studentNumber: '20231238' },
    { name: 'Jean Francis', studentNumber: '20231239' },
    { name: 'Jean Francis', studentNumber: '20231240' },
    { name: 'Jean Francis', studentNumber: '20231241' },
    { name: 'Jean Francis', studentNumber: '20231242' },
  ];

  return (
    <Container className="passenger-manifest-container py-5">
      {/* Header */}
      <div className="header-bar text-center text-white py-3 mb-4">
        <h2 className="m-0">PASSENGER MANIFEST</h2>
      </div>

      {/* Grid */}
      <Row>
        {passengers.map((passenger, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center">
            <Card className="passenger-card text-center">
              <Card.Body>
                <Card.Title className="passenger-name">{passenger.name}</Card.Title>
                <div className="avatar-placeholder my-3">
                  <i className="bi bi-person-circle" style={{ fontSize: '50px' }}></i>
                </div>
                <Card.Text className="student-number">{passenger.studentNumber}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PassengerManifest;
