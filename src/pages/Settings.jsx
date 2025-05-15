
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { toast } = useToast();

  const handleSaveGeneral = () => {
    toast({
      title: "Settings saved",
      description: "General settings have been updated."
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: "Notification settings saved",
      description: "Your notification preferences have been updated."
    });
  };

  const handleSaveSystem = () => {
    toast({
      title: "System settings saved",
      description: "System configuration has been updated."
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
        <p className="text-muted-foreground">Configure your bus reservation system settings.</p>
      </div>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Configuration</CardTitle>
              <CardDescription>
                Basic settings for your bus reservation system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="system-name">System Name</Label>
                <Input id="system-name" defaultValue="TUT Bus Reservation System" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input id="contact-email" defaultValue="busadmin@tut.ac.za" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="campus-name">Primary Campus</Label>
                <Input id="campus-name" defaultValue="Main Campus" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="residence-name">Primary Residence</Label>
                <Input id="residence-name" defaultValue="TUT Residence" />
              </div>
              
              <div className="flex items-center justify-between space-x-2 pt-4">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="allow-bookings">Allow Bookings</Label>
                  <span className="text-sm text-muted-foreground">
                    Enable students to book bus seats
                  </span>
                </div>
                <Switch id="allow-bookings" defaultChecked />
              </div>
              
              <Button onClick={handleSaveGeneral}>Save General Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure how notifications are sent to users
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <span className="text-sm text-muted-foreground">Send booking confirmations via email</span>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="sms-notifications">SMS Notifications</Label>
                  <span className="text-sm text-muted-foreground">Send booking confirmations via SMS</span>
                </div>
                <Switch id="sms-notifications" />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="delay-notifications">Delay Alerts</Label>
                  <span className="text-sm text-muted-foreground">Notify users about bus delays</span>
                </div>
                <Switch id="delay-notifications" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="capacity-notifications">Capacity Alerts</Label>
                  <span className="text-sm text-muted-foreground">Alert administrators about high capacity buses</span>
                </div>
                <Switch id="capacity-notifications" defaultChecked />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="capacity-threshold">Capacity Alert Threshold (%)</Label>
                <Input id="capacity-threshold" type="number" defaultValue="90" min="50" max="100" />
              </div>
              
              <Button onClick={handleSaveNotifications}>Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>
                Advanced system settings for the bus reservation platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="booking-window">Booking Window (hours)</Label>
                <Input id="booking-window" type="number" defaultValue="24" min="1" max="168" />
                <p className="text-xs text-muted-foreground mt-1">
                  How far in advance students can book bus seats
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="checkin-window">Check-in Window (minutes)</Label>
                <Input id="checkin-window" type="number" defaultValue="15" min="5" max="60" />
                <p className="text-xs text-muted-foreground mt-1">
                  How early students can check in before departure
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="booking-cooldown">Booking Cooldown (minutes)</Label>
                <Input id="booking-cooldown" type="number" defaultValue="10" min="0" max="60" />
                <p className="text-xs text-muted-foreground mt-1">
                  Waiting period between bookings per student
                </p>
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="emergency-requests">Allow Emergency Requests</Label>
                  <span className="text-sm text-muted-foreground">Enable students to submit emergency booking requests</span>
                </div>
                <Switch id="emergency-requests" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="auto-scale">Auto-scaling</Label>
                  <span className="text-sm text-muted-foreground">Automatically add buses during peak demand</span>
                </div>
                <Switch id="auto-scale" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <span className="text-sm text-muted-foreground">Put system in maintenance mode (bookings disabled)</span>
                </div>
                <Switch id="maintenance-mode" />
              </div>
              
              <Button onClick={handleSaveSystem}>Save System Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
