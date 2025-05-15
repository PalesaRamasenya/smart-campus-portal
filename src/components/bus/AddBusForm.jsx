
import React, { useState } from 'react';
import { 
  Dialog,
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const AddBusForm = ({ open, onOpenChange, onAddBus }) => {
  const [busData, setBusData] = useState({
    time: '',
    origin: 'Residence',
    destination: 'Campus',
    maxCapacity: 50,
    driver: '',
    busNumber: '',
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setBusData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!busData.time || !busData.driver || !busData.busNumber) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Create new bus schedule
    const newBus = {
      id: `${Date.now()}`, // Generate a unique id
      ...busData,
      capacity: 0, // Start with 0 capacity
      status: 'scheduled'
    };

    onAddBus(newBus);
    toast({
      title: "Bus Added",
      description: `Bus ${busData.busNumber} has been added to the schedule`,
    });
    
    // Reset form
    setBusData({
      time: '',
      origin: 'Residence',
      destination: 'Campus',
      maxCapacity: 50,
      driver: '',
      busNumber: '',
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Bus</DialogTitle>
          <DialogDescription>
            Enter the details for the new bus schedule
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="time">Departure Time</Label>
              <Input
                id="time"
                name="time"
                type="time"
                value={busData.time}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="busNumber">Bus Number</Label>
              <Input
                id="busNumber"
                name="busNumber"
                placeholder="TUT-123"
                value={busData.busNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="origin">Origin</Label>
              <Select 
                name="origin" 
                value={busData.origin} 
                onValueChange={(value) => handleSelectChange('origin', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select origin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Residence">Residence</SelectItem>
                  <SelectItem value="Campus">Campus</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Select 
                name="destination" 
                value={busData.destination} 
                onValueChange={(value) => handleSelectChange('destination', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Campus">Campus</SelectItem>
                  <SelectItem value="Residence">Residence</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="driver">Driver Name</Label>
              <Input
                id="driver"
                name="driver"
                placeholder="John Smith"
                value={busData.driver}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="maxCapacity">Maximum Capacity</Label>
              <Input
                id="maxCapacity"
                name="maxCapacity"
                type="number"
                min="1"
                value={busData.maxCapacity}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="submit">Add Bus</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBusForm;
