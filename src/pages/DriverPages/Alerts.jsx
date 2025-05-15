import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/Driver.scss/alerts.scss'; // Your custom CSS file (optional)

const Alerts = () => {
  const alerts = [
    { id: 1, message: 'Bus delayed due to traffic', type: 'warning' },
    { id: 2, message: 'Maintenance scheduled for tomorrow', type: 'info' },
    { id: 3, message: 'Driver unavailable for Route 5', type: 'danger' },
  ];

  return (
    <Container className="alerts-container py-5" style={{ maxWidth: '800px' }}>
      <div className="header-bar text-white text-center py-3 mb-4" style={{ backgroundColor: '#003366', borderRadius: '5px' }}>
        <h2>ALERTS</h2>
      </div>

      <Card>
        <ListGroup variant="flush">
          {alerts.map(alert => (
            <ListGroup.Item
              key={alert.id}
              className={`alert-${alert.type}`}
              style={{
                borderLeft: `6px solid ${
                  alert.type === 'danger' ? '#dc3545' :
                  alert.type === 'warning' ? '#ffc107' :
                  alert.type === 'info' ? '#0d6efd' : '#6c757d'
                }`,
                backgroundColor: '#f8f9fa',
                fontWeight: '500',
                fontSize: '1rem'
              }}
            >
              {alert.message}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
};

export default Alerts;
