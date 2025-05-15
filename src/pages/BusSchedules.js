
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BusSchedules = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bus Schedules</h1>
        <p className="text-muted-foreground">Manage and monitor bus routes and schedules.</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Schedule Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Bus schedule management interface will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusSchedules;
