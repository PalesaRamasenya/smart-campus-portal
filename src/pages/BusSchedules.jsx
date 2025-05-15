
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Bus, Clock, MapPin, Plus } from "lucide-react";
import AddBusForm from '@/components/bus/AddBusForm';

// Initial schedule data
const initialScheduleData = [
  { 
    id: '1', 
    time: '07:15', 
    origin: 'Residence', 
    destination: 'Campus',
    capacity: 42,
    maxCapacity: 50,
    status: 'in-progress',
    driver: 'John Smith',
    busNumber: 'TUT-101'
  },
  { 
    id: '2', 
    time: '07:45', 
    origin: 'Residence', 
    destination: 'Campus',
    capacity: 28,
    maxCapacity: 50,
    status: 'scheduled',
    driver: 'Michael Brown',
    busNumber: 'TUT-102'
  },
  { 
    id: '3', 
    time: '08:10', 
    origin: 'Campus', 
    destination: 'Residence',
    capacity: 45,
    maxCapacity: 50,
    status: 'scheduled',
    driver: 'Sarah Johnson',
    busNumber: 'TUT-103'
  },
  { 
    id: '4', 
    time: '08:45', 
    origin: 'Residence', 
    destination: 'Campus',
    capacity: 35,
    maxCapacity: 50,
    status: 'scheduled',
    driver: 'Robert Williams',
    busNumber: 'TUT-104'
  },
  { 
    id: '5', 
    time: '09:10', 
    origin: 'Campus', 
    destination: 'Residence',
    capacity: 20,
    maxCapacity: 50,
    status: 'scheduled',
    driver: 'Jennifer Davis',
    busNumber: 'TUT-105'
  },
  { 
    id: '6', 
    time: '09:45', 
    origin: 'Residence', 
    destination: 'Campus',
    capacity: 15,
    maxCapacity: 50,
    status: 'scheduled',
    driver: 'David Miller',
    busNumber: 'TUT-106'
  },
  { 
    id: '7', 
    time: '10:10', 
    origin: 'Campus', 
    destination: 'Residence',
    capacity: 30,
    maxCapacity: 50,
    status: 'scheduled',
    driver: 'Lisa Wilson',
    busNumber: 'TUT-107'
  },
];

const BusSchedules = () => {
  const [scheduleData, setScheduleData] = useState(initialScheduleData);
  const [selectedDay, setSelectedDay] = useState("today");
  const [selectedRoute, setSelectedRoute] = useState("all");
  const [isAddBusOpen, setIsAddBusOpen] = useState(false);
  const { toast } = useToast();

  const filteredSchedules = scheduleData.filter(schedule => {
    if (selectedRoute === "all") return true;
    if (selectedRoute === "to-campus") return schedule.destination === "Campus";
    if (selectedRoute === "to-residence") return schedule.destination === "Residence";
    return true;
  });

  const handleAddBus = (newBus) => {
    setScheduleData(prev => [...prev, newBus]);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <Badge variant="outline">Completed</Badge>;
      case 'in-progress':
        return <Badge variant="default">In Progress</Badge>;
      case 'scheduled':
        return <Badge variant="secondary">Scheduled</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getCapacityColor = (capacity, maxCapacity) => {
    const percentage = (capacity / maxCapacity) * 100;
    if (percentage >= 90) return "bg-red-500";
    if (percentage >= 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bus Schedules</h1>
        <p className="text-muted-foreground">Manage and monitor bus routes and schedules.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={selectedDay} onValueChange={setSelectedDay}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select day" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="tomorrow">Tomorrow</SelectItem>
              <SelectItem value="day-after">Day After Tomorrow</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedRoute} onValueChange={setSelectedRoute}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select route" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Routes</SelectItem>
              <SelectItem value="to-campus">To Campus</SelectItem>
              <SelectItem value="to-residence">To Residence</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button onClick={() => setIsAddBusOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add New Bus
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Schedule Management</CardTitle>
          <CardDescription>
            {selectedDay === "today" ? "Today's " : selectedDay === "tomorrow" ? "Tomorrow's " : "Future "}
            bus schedules 
            {selectedRoute === "to-campus" ? " to campus" : selectedRoute === "to-residence" ? " to residence" : ""}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Route</TableHead>
                <TableHead>Bus Number</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSchedules.map((schedule) => (
                <TableRow key={schedule.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {schedule.time}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {schedule.origin} to {schedule.destination}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Bus className="h-4 w-4 mr-2" />
                      {schedule.busNumber}
                    </div>
                  </TableCell>
                  <TableCell>{schedule.driver}</TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="text-xs">
                        {schedule.capacity}/{schedule.maxCapacity} seats
                      </div>
                      <Progress
                        value={(schedule.capacity / schedule.maxCapacity) * 100}
                        indicatorClassName={getCapacityColor(schedule.capacity, schedule.maxCapacity)}
                      />
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(schedule.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Bus Dialog */}
      <AddBusForm 
        open={isAddBusOpen}
        onOpenChange={setIsAddBusOpen}
        onAddBus={handleAddBus}
      />
    </div>
  );
};

export default BusSchedules;
