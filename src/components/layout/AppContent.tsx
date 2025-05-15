
import React from 'react';

interface AppContentProps {
  children: React.ReactNode;
}

const AppContent: React.FC<AppContentProps> = ({ children }) => {
  return (
    <main className="flex-1 overflow-y-auto bg-muted/30 p-6">
      {children}
    </main>
  );
}

export default AppContent;
