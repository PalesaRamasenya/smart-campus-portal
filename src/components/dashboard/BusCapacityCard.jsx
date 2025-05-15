
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BusCapacityCard = ({
  time,
  origin,
  destination,
  capacity,
  maxCapacity,
  departureTime,
  status = 'scheduled'
}) => {
  const capacityPercentage = (capacity / maxCapacity) * 100;
  const statusColor = 
    status === 'in-progress' ? 'text-blue-500' : 
    status === 'completed' ? 'text-muted-foreground' : 
    'text-green-500';

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted/30 pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base font-medium">{time}</CardTitle>
          <span className={`text-xs font-medium ${statusColor}`}>
            {status === 'in-progress' ? 'In Progress' : 
             status === 'completed' ? 'Completed' : 
             'Scheduled'}
          </span>
        </div>
        <CardDescription className="text-xs">
          {origin} → {destination}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Capacity</span>
            <span className="font-medium">{capacity}/{maxCapacity} seats</span>
          </div>
          <Progress 
            value={capacityPercentage} 
            className={`h-2 ${
              capacityPercentage > 90 ? 'bg-red-100' : 
              capacityPercentage > 70 ? 'bg-yellow-100' : 
              'bg-muted'
            }`} 
            indicatorClassName={
              capacityPercentage > 90 ? 'bg-red-500' : 
              capacityPercentage > 70 ? 'bg-yellow-500' : 
              'bg-green-500'
            }
          />
          {departureTime && (
            <div className="text-xs text-muted-foreground">
              Departure: {departureTime}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BusCapacityCard;
