import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PassengerManifest from './pages/DriverPages/passengerManifest';
import TripStage from './pages/DriverPages/tripStage';
import TripOverview from './pages/DriverPages/tripOverview';
import EmergencyReporting from './pages/DriverPages/emergencyReporting';
import ScanQRCodePage from './pages/DriverPages/ScanQRCodePage';
import Alerts from './pages/DriverPages/Alerts';


function App() {
  return (
    <Router>
    <Routes>
      {/*Driver routes/paths*/}
      <Route path="/" element={<ScanQRCodePage />} />
      <Route path="/trip-overview" element={<TripOverview />} />
      <Route path="/emergency-reporting" element={<EmergencyReporting />} />
      <Route path="/trip-stage" element={<TripStage />} />
      <Route path="/passenger-manifest" element={<PassengerManifest />} />
      <Route path="/alerts" element={<Alerts />} />
      {/* Add other routes here */}
    </Routes>
  </Router>
  );
}

export default App;
// This is the main entry point of your React application.