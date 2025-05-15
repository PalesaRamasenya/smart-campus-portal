
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PassengerList = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Passenger Lists</h1>
        <p className="text-muted-foreground">View and manage passenger information.</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Passenger Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Passenger list management interface will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PassengerList;
