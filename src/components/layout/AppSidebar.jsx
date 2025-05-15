
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { Bus, ChartBar, AlertTriangle, User, Settings } from 'lucide-react';

function AppSidebar() {
  const menuItems = [
    { title: "Dashboard", icon: ChartBar, to: "/" },
    { title: "Bus Schedules", icon: Bus, to: "/schedules" },
    { title: "Passenger Lists", icon: User, to: "/passengers" },
    { title: "Analytics", icon: ChartBar, to: "/analytics" },
    { title: "Emergency Requests", icon: AlertTriangle, to: "/emergency-requests" },
    { title: "System Settings", icon: Settings, to: "/settings" },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="py-4">
        <div className="flex items-center px-2">
          <img 
            src="/lovable-uploads/11d5d9d7-dded-4db7-9f3b-ecfd5389c05a.png" 
            alt="TUT Logo" 
            className="h-12 mr-2" 
          />
          <div className="text-white font-semibold text-lg">
            Bus Admin Panel
          </div>
        </div>
        <SidebarTrigger className="absolute right-2 top-3 text-white md:hidden" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Controls</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.to}
                      className={({ isActive }) => 
                        isActive ? "bg-sidebar-accent text-white font-medium flex items-center gap-3 w-full" : "flex items-center gap-3 w-full"
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-3 py-2 text-xs opacity-70 text-sidebar-foreground">
          © {new Date().getFullYear()} TUT Bus System
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
