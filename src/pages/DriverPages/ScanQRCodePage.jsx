import React from 'react';
import { Container, Button, Image, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/Driver.scss/scanQRCodePage.scss'; // Your custom styles (see below)
import { Link } from 'react-router-dom'; // Import Link for navigation

const ScanQRCodePage = () => {
  const handleRefresh = () => {
    alert('Refreshing QR Code...');
  };

  return (
    <Container fluid className="qr-page bg-light vh-100">
      {/* Navigation bar */}
      <div className="header">
        <div className="circle me-3"></div>
        <h5 className="mb-0">Bus Driver</h5>
        <Nav className="ms-auto">
        <Nav.Link as={Link} to="/trip-overview">Trip Overview</Nav.Link>
          <Nav.Link as={Link} to="/trip-stage">Trip Status</Nav.Link>
          <Nav.Link as={Link} to="/passenger-manifest">Passenger Manifest</Nav.Link>
          {/*<Nav.Link as={Link} to="/alerts">Alerts</Nav.Link>*/}
          <Nav.Link as={Link} to="/emergency-reporting">Emergency Reporting</Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="text-center py-5">
        <h4 className="mb-4">SCAN QR CODE TO BOARD BUS.</h4>

        <div className="qr-box">
          <Image
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=BoardBus"
            alt="QR Code"
            fluid
          />
        </div>

        <Button variant="danger" onClick={handleRefresh}>
          REFRESH
        </Button>
      </div>
    </Container>
  );
};

export default ScanQRCodePage;
