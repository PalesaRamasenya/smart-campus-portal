import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../../scss/Driver.scss/tripOverview.scss';

const TripOverview = () => {
  const trips = [
    {
      departure: 'Corridor hill',
      departureTime: '07:45 AM',
      destination: 'Campus',
      destinationTime: '08:00 AM',
    },
    {
      departure: 'Campus',
      departureTime: '08:10 AM',
      destination: 'Corridor hill',
      destinationTime: '07:45 AM',
    },
  ];

  return (
    <div className="trip-overview-container py-5 d-flex flex-column align-items-center">
      <div className="header-bar ">
        <h2 className="m-0">TRIP OVERVIEW</h2>
      </div>

      <Row className="w-75">
        {/* Left Side: Departures + Destinations */}
        <Col md={8}>
          <Card className="main-card shadow-sm mb-4">
            <Row className="mb-3 text-center">
              <Col>
                <div className="section-title">DEPARTURES:</div>
              </Col>
              <Col>
                <div className="section-title">DESTINATIONS</div>
              </Col>
            </Row>

            {trips.map((trip, index) => (
              <Row key={index} className="align-items-center mb-3">
                <Col className="d-flex justify-content-center">
                  <div className="trip-box departure-box">
                    <div>{trip.departure}</div>
                    <div>{trip.departureTime}</div>
                  </div>
                </Col>

                <Col className="d-flex justify-content-center">
                  <div className="trip-box destination-box">
                    <div>{trip.destination}</div>
                    <div>{trip.destinationTime}</div>
                  </div>
                </Col>
              </Row>
            ))}

            <div className="text-center mt-4">
              <Button className="start-trip-btn">Start Trip</Button>
            </div>
          </Card>
        </Col>

        {/* Right Side: Check-In Status */}
        <Col md={4}>
          <Card className="checkin-card shadow-sm mb-4">
            <h5 className="checkin-title">CHECK-IN STATUS</h5>
            <div className="status-box total-passengers">
              <div>Total Passengers</div>
              <div>22</div>
            </div>
            <div className="status-box to-check-in">
              <div>To check in</div>
              <div>4</div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TripOverview;
