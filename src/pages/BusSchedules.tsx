
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BusSchedule {
  id: string;
  time: string;
  route: 'Res to Campus' | 'Campus to Res';
  capacity: number;
  maxCapacity: number;
  status: 'scheduled' | 'in-progress' | 'completed';
}

const weekdaySchedules: BusSchedule[] = [
  { id: '1', time: '07:15', route: 'Res to Campus', capacity: 38, maxCapacity: 50, status: 'completed' },
  { id: '2', time: '07:45', route: 'Res to Campus', capacity: 42, maxCapacity: 50, status: 'in-progress' },
  { id: '3', time: '08:10', route: 'Campus to Res', capacity: 25, maxCapacity: 50, status: 'scheduled' },
  { id: '4', time: '08:45', route: 'Res to Campus', capacity: 30, maxCapacity: 50, status: 'scheduled' },
  { id: '5', time: '09:10', route: 'Campus to Res', capacity: 45, maxCapacity: 50, status: 'scheduled' },
  { id: '6', time: '09:45', route: 'Res to Campus', capacity: 22, maxCapacity: 50, status: 'scheduled' },
  { id: '7', time: '10:10', route: 'Campus to Res', capacity: 18, maxCapacity: 50, status: 'scheduled' },
];

const saturdaySchedules: BusSchedule[] = [
  { id: '1', time: '08:00', route: 'Res to Campus', capacity: 24, maxCapacity: 50, status: 'scheduled' },
  { id: '2', time: '09:00', route: 'Campus to Res', capacity: 19, maxCapacity: 50, status: 'scheduled' },
  { id: '3', time: '10:00', route: 'Res to Campus', capacity: 35, maxCapacity: 50, status: 'scheduled' },
  { id: '4', time: '11:00', route: 'Campus to Res', capacity: 28, maxCapacity: 50, status: 'scheduled' },
  { id: '5', time: '12:00', route: 'Res to Campus', capacity: 32, maxCapacity: 50, status: 'scheduled' },
  { id: '6', time: '14:10', route: 'Campus to Res', capacity: 41, maxCapacity: 50, status: 'scheduled' },
];

const BusSchedules = () => {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<BusSchedule | null>(null);

  const handleEdit = (schedule: BusSchedule) => {
    setSelectedSchedule(schedule);
    setOpenEditDialog(true);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bus Schedules</h1>
          <p className="text-muted-foreground">Manage and update bus schedules for the campus shuttle system.</p>
        </div>
        <Button onClick={() => setOpenAddDialog(true)}>Add New Schedule</Button>
      </div>
      
      <Tabs defaultValue="weekday" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="weekday">Weekday Schedule</TabsTrigger>
            <TabsTrigger value="saturday">Saturday Schedule</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="weekday" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Weekday Bus Schedule</CardTitle>
              <CardDescription>
                Regular weekday bus schedule for campus shuttles.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Route</TableHead>
                    <TableHead>Capacity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {weekdaySchedules.map((schedule) => (
                    <TableRow key={schedule.id}>
                      <TableCell className="font-medium">{schedule.time}</TableCell>
                      <TableCell>{schedule.route}</TableCell>
                      <TableCell>
                        {schedule.capacity}/{schedule.maxCapacity}
                        {schedule.capacity >= schedule.maxCapacity * 0.9 && (
                          <Badge variant="destructive" className="ml-2">Full</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant={
                          schedule.status === 'in-progress' ? 'default' :
                          schedule.status === 'completed' ? 'secondary' :
                          'outline'
                        }>
                          {schedule.status === 'in-progress' ? 'In Progress' :
                           schedule.status === 'completed' ? 'Completed' :
                           'Scheduled'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleEdit(schedule)}
                        >
                          Edit
                        </Button>
                        <Button 
                          size="sm" 
                          variant={schedule.status === 'scheduled' ? 'default' : 'ghost'}
                          disabled={schedule.status !== 'scheduled'}
                        >
                          {schedule.status === 'scheduled' ? 'Add Bus' : 'View'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="saturday" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Saturday Bus Schedule</CardTitle>
              <CardDescription>
                Saturday bus schedule with reduced frequency.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Route</TableHead>
                    <TableHead>Capacity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {saturdaySchedules.map((schedule) => (
                    <TableRow key={schedule.id}>
                      <TableCell className="font-medium">{schedule.time}</TableCell>
                      <TableCell>{schedule.route}</TableCell>
                      <TableCell>{schedule.capacity}/{schedule.maxCapacity}</TableCell>
                      <TableCell>
                        <Badge variant={
                          schedule.status === 'in-progress' ? 'default' :
                          schedule.status === 'completed' ? 'secondary' :
                          'outline'
                        }>
                          {schedule.status === 'in-progress' ? 'In Progress' :
                           schedule.status === 'completed' ? 'Completed' :
                           'Scheduled'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleEdit(schedule)}
                        >
                          Edit
                        </Button>
                        <Button 
                          size="sm" 
                          variant={schedule.status === 'scheduled' ? 'default' : 'ghost'}
                          disabled={schedule.status !== 'scheduled'}
                        >
                          {schedule.status === 'scheduled' ? 'Add Bus' : 'View'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Add schedule dialog */}
      <Dialog open={openAddDialog} onOpenChange={setOpenAddDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Schedule</DialogTitle>
            <DialogDescription>
              Create a new bus schedule entry for students.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right">
                Time
              </Label>
              <Input
                id="time"
                placeholder="HH:MM"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="route" className="text-right">
                Route
              </Label>
              <Select defaultValue="res-to-campus">
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select route" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="res-to-campus">Residence to Campus</SelectItem>
                  <SelectItem value="campus-to-res">Campus to Residence</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="capacity" className="text-right">
                Max Capacity
              </Label>
              <Input
                id="capacity"
                type="number"
                defaultValue="50"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="day" className="text-right">
                Day Type
              </Label>
              <Select defaultValue="weekday">
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select day type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekday">Weekday</SelectItem>
                  <SelectItem value="saturday">Saturday</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={() => setOpenAddDialog(false)}>Save Schedule</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Edit schedule dialog */}
      <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Bus Schedule</DialogTitle>
            <DialogDescription>
              Make changes to the bus schedule.
            </DialogDescription>
          </DialogHeader>
          {selectedSchedule && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-time" className="text-right">
                  Time
                </Label>
                <Input
                  id="edit-time"
                  defaultValue={selectedSchedule.time}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-route" className="text-right">
                  Route
                </Label>
                <Select defaultValue={selectedSchedule.route === 'Res to Campus' ? 'res-to-campus' : 'campus-to-res'}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select route" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="res-to-campus">Residence to Campus</SelectItem>
                    <SelectItem value="campus-to-res">Campus to Residence</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-capacity" className="text-right">
                  Max Capacity
                </Label>
                <Input
                  id="edit-capacity"
                  type="number"
                  defaultValue={selectedSchedule.maxCapacity}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="text-right">
                  Status
                </Label>
                <Select defaultValue={selectedSchedule.status}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenEditDialog(false)}>Cancel</Button>
            <Button type="submit" onClick={() => setOpenEditDialog(false)}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BusSchedules;
