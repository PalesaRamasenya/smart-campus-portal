
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface Event {
  id: string;
  time: string;
  type: 'booking' | 'check-in' | 'departure' | 'arrival' | 'emergency' | 'system';
  description: string;
}

interface EventsActivityProps {
  events: Event[];
}

const EventsActivity: React.FC<EventsActivityProps> = ({ events }) => {
  const getEventIcon = (type: Event['type']) => {
    switch (type) {
      case 'booking':
        return <div className="bg-green-100 text-green-700 p-1 rounded-full">🎫</div>;
      case 'check-in':
        return <div className="bg-blue-100 text-blue-700 p-1 rounded-full">✓</div>;
      case 'departure':
        return <div className="bg-accent/20 text-accent-foreground p-1 rounded-full">🚌</div>;
      case 'arrival':
        return <div className="bg-primary/20 text-primary p-1 rounded-full">🏁</div>;
      case 'emergency':
        return <div className="bg-red-100 text-red-700 p-1 rounded-full">🚨</div>;
      case 'system':
        return <div className="bg-gray-100 text-gray-700 p-1 rounded-full">⚙️</div>;
      default:
        return <div className="bg-gray-100 p-1 rounded-full">•</div>;
    }
  };

  const getEventClass = (type: Event['type']) => {
    switch (type) {
      case 'emergency':
        return 'border-l-red-500';
      case 'booking':
        return 'border-l-green-500';
      case 'check-in':
        return 'border-l-blue-500';
      case 'departure':
        return 'border-l-yellow-500';
      case 'arrival':
        return 'border-l-primary';
      default:
        return 'border-l-gray-300';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div 
              key={event.id}
              className={cn(
                "p-3 border-l-4 bg-muted/30 rounded-r flex items-start gap-3",
                getEventClass(event.type)
              )}
            >
              {getEventIcon(event.type)}
              <div className="flex-1">
                <p className="text-sm">{event.description}</p>
                <p className="text-xs text-muted-foreground">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EventsActivity;
