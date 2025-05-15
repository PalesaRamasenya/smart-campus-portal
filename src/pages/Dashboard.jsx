
import React from 'react';
import { Bus, CalendarDays, User, AlertTriangle } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard.jsx';
import BusCapacityCard from '@/components/dashboard/BusCapacityCard.jsx';
import EventsActivity from '@/components/dashboard/EventsActivity.jsx';
import EmergencyRequestsTable from '@/components/dashboard/EmergencyRequestsTable.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock data
const recentEvents = [
  { id: '1', time: 'Just now', type: 'emergency', description: 'Emergency priority boarding request for student with disability' },
  { id: '2', time: '5 minutes ago', type: 'departure', description: 'Bus #102 departed from Residence to Campus at 07:15' },
  { id: '3', time: '15 minutes ago', type: 'check-in', description: '10 students checked in for the 07:45 bus' },
  { id: '4', time: '30 minutes ago', type: 'booking', description: '25 new bookings received for afternoon buses' },
  { id: '5', time: '1 hour ago', type: 'system', description: 'System maintenance completed successfully' },
];

const emergencyRequests = [
  { id: '1', requestType: 'Priority Boarding', studentId: 'TUT081234', status: 'pending', time: '10 mins ago', route: 'Res to Campus' },
  { id: '2', requestType: 'Late Booking', studentId: 'TUT092345', status: 'in-review', time: '25 mins ago', route: 'Campus to Res' },
  { id: '3', requestType: 'Missed Check-in', studentId: 'TUT075678', status: 'resolved', time: '1 hour ago', route: 'Res to Campus' },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the TUT Bus Administration System.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Bookings Today" 
          value="247" 
          icon={CalendarDays} 
          trend={{ value: "12%", positive: true }}
          iconClassName="text-blue-500"
        />
        <StatCard 
          title="Active Buses" 
          value="8" 
          icon={Bus} 
          iconClassName="text-red-500"
        />
        <StatCard 
          title="Students Transported" 
          value="1,423" 
          icon={User} 
          trend={{ value: "5%", positive: true }}
          iconClassName="text-blue-500" 
        />
        <StatCard 
          title="Emergency Requests" 
          value="3" 
          icon={AlertTriangle} 
          trend={{ value: "2", positive: false }}
          iconClassName="text-red-500"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Current Bus Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <BusCapacityCard 
                  time="07:45" 
                  origin="Residence" 
                  destination="Campus" 
                  capacity={42} 
                  maxCapacity={50}
                  departureTime="Departed at 07:47"
                  status="in-progress"
                />
                <BusCapacityCard 
                  time="08:45" 
                  origin="Residence" 
                  destination="Campus" 
                  capacity={28} 
                  maxCapacity={50}
                  departureTime="Departs in 24 min"
                />
                <BusCapacityCard 
                  time="09:10" 
                  origin="Campus" 
                  destination="Residence" 
                  capacity={45} 
                  maxCapacity={50}
                  departureTime="Departs in 49 min"
                />
              </div>
            </CardContent>
          </Card>
          
          <EventsActivity events={recentEvents} />
        </div>
        
        <div className="col-span-1 lg:col-span-2">
          <EmergencyRequestsTable requests={emergencyRequests} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
