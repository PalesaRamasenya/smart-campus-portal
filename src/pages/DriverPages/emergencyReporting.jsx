import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import '../../scss/Driver.scss/emergencyReporting.scss'; // Import your CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const EmergencyReporting = () => {
  const issues = [
    'Issue #1',
    'Issue #2',
    'Issue #3',
    'Issue #4',
  ];

  const handleReportClick = () => {
    alert('Redirecting to report issue page...');
  };

  return (
    <Container className="emergency-reporting-container py-5">
      {/* Header */}
      <div className="header-bar text-center text-white py-3 mb-4">
        <h2 className="m-0">EMERGENCY REPORTING</h2>
      </div>

      {/* Report Button */}
      <div className="text-center mb-4">
        <Button variant="danger" size="lg" onClick={handleReportClick}>
          Click to Report Issue
        </Button>
      </div>

      {/* Issues List */}
      <h5 className="text-primary mb-3">Reported Ongoing Issues:</h5>
      <div>
        {issues.map((issue, index) => (
          <Card key={index} className="issue-card mb-3">
            <Card.Body className="text-center">{issue}</Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default EmergencyReporting;
