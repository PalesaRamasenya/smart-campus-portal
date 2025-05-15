
import React from 'react';
import { Bell, Clock, User } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AppHeader = () => {
  return (
    <header className="bg-white border-b border-border h-16 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold text-primary hidden md:block">TUT Bus System Administration</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-secondary">
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start cursor-pointer">
              <div className="font-medium">Bus Capacity Alert</div>
              <div className="text-xs text-muted-foreground">10:45 AM bus is at 90% capacity</div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start cursor-pointer">
              <div className="font-medium">Emergency Request</div>
              <div className="text-xs text-muted-foreground">New emergency request received</div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start cursor-pointer">
              <div className="font-medium">System Update</div>
              <div className="text-xs text-muted-foreground">System maintenance scheduled for tonight</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Admin User</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AppHeader;
