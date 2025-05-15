
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EmergencyRequests = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Emergency Requests</h1>
        <p className="text-muted-foreground">Handle urgent student requests and priority boarding.</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Emergency Request Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Emergency request management interface will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyRequests;
