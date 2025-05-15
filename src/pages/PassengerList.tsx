
import React, { useState } from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface Passenger {
  id: string;
  studentId: string;
  name: string;
  bookingTime: string;
  checkInStatus: 'checked-in' | 'not-checked-in' | 'missed';
}

const schedules = [
  { id: '1', time: '07:15', route: 'Residence to Campus' },
  { id: '2', time: '07:45', route: 'Residence to Campus' },
  { id: '3', time: '08:10', route: 'Campus to Residence' },
  { id: '4', time: '08:45', route: 'Residence to Campus' },
  { id: '5', time: '09:10', route: 'Campus to Residence' },
];

// Mock data for passengers
const mockPassengers: Record<string, Passenger[]> = {
  '1': [
    { id: '1-1', studentId: 'TUT081234', name: 'John Doe', bookingTime: 'Yesterday, 19:45', checkInStatus: 'checked-in' },
    { id: '1-2', studentId: 'TUT092345', name: 'Jane Smith', bookingTime: 'Yesterday, 20:10', checkInStatus: 'checked-in' },
    { id: '1-3', studentId: 'TUT075678', name: 'Mike Johnson', bookingTime: 'Yesterday, 21:30', checkInStatus: 'missed' },
  ],
  '2': [
    { id: '2-1', studentId: 'TUT086543', name: 'Sarah Wilson', bookingTime: 'Yesterday, 18:20', checkInStatus: 'checked-in' },
    { id: '2-2', studentId: 'TUT097890', name: 'Robert Brown', bookingTime: 'Yesterday, 19:05', checkInStatus: 'not-checked-in' },
  ],
  '3': [
    { id: '3-1', studentId: 'TUT087654', name: 'Emily Davis', bookingTime: 'Today, 07:30', checkInStatus: 'not-checked-in' },
    { id: '3-2', studentId: 'TUT098765', name: 'Michael Wilson', bookingTime: 'Yesterday, 22:15', checkInStatus: 'not-checked-in' },
    { id: '3-3', studentId: 'TUT065432', name: 'Lisa Taylor', bookingTime: 'Yesterday, 20:45', checkInStatus: 'not-checked-in' },
  ],
};

const PassengerList = () => {
  const [selectedSchedule, setSelectedSchedule] = useState('1');
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const passengers = mockPassengers[selectedSchedule] || [];
  
  const filteredPassengers = passengers.filter(passenger => 
    passenger.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    passenger.studentId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCheckInUpdate = (passengerId: string, newStatus: 'checked-in' | 'not-checked-in' | 'missed') => {
    // In a real app, this would update the backend
    toast({
      title: "Check-in status updated",
      description: `Student status changed to ${newStatus}`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Passenger Lists</h1>
        <p className="text-muted-foreground">View and manage passenger bookings and check-ins.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="w-full md:w-auto">
          <Select 
            value={selectedSchedule}
            onValueChange={setSelectedSchedule}
          >
            <SelectTrigger className="w-full md:w-[300px]">
              <SelectValue placeholder="Select schedule" />
            </SelectTrigger>
            <SelectContent>
              {schedules.map(schedule => (
                <SelectItem key={schedule.id} value={schedule.id}>
                  {schedule.time} - {schedule.route}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-auto">
          <Input
            placeholder="Search by name or ID..."
            className="w-full md:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            {selectedSchedule && schedules.find(s => s.id === selectedSchedule)
              ? `${schedules.find(s => s.id === selectedSchedule)?.time} - ${schedules.find(s => s.id === selectedSchedule)?.route}`
              : "Select a schedule"}
          </CardTitle>
          <CardDescription>
            {filteredPassengers.length} passengers booked for this trip
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Booking Time</TableHead>
                <TableHead>Check-in Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPassengers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                    {searchQuery ? "No passengers match your search" : "No passengers for this schedule"}
                  </TableCell>
                </TableRow>
              ) : (
                filteredPassengers.map((passenger) => (
                  <TableRow key={passenger.id}>
                    <TableCell className="font-medium">{passenger.studentId}</TableCell>
                    <TableCell>{passenger.name}</TableCell>
                    <TableCell>{passenger.bookingTime}</TableCell>
                    <TableCell>
                      <Badge variant={
                        passenger.checkInStatus === 'checked-in' ? 'default' :
                        passenger.checkInStatus === 'missed' ? 'destructive' :
                        'outline'
                      }>
                        {passenger.checkInStatus === 'checked-in' ? 'Checked In' :
                         passenger.checkInStatus === 'missed' ? 'Missed' :
                         'Not Checked In'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      {passenger.checkInStatus !== 'checked-in' && (
                        <Button 
                          size="sm" 
                          onClick={() => handleCheckInUpdate(passenger.id, 'checked-in')}
                        >
                          Check In
                        </Button>
                      )}
                      {passenger.checkInStatus !== 'missed' && passenger.checkInStatus !== 'checked-in' && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleCheckInUpdate(passenger.id, 'missed')}
                        >
                          Mark as Missed
                        </Button>
                      )}
                      {passenger.checkInStatus === 'checked-in' && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleCheckInUpdate(passenger.id, 'not-checked-in')}
                        >
                          Undo Check In
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PassengerList;
