
import React from 'react';
import AppSidebar from '@/components/layout/AppSidebar.js';
import AppHeader from '@/components/layout/AppHeader.js';
import AppContent from '@/components/layout/AppContent.js';
import { SidebarProvider } from '@/components/ui/sidebar';

const MainLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <AppHeader />
          <AppContent>
            {children}
          </AppContent>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
