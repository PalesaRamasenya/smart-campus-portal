
import { Toaster } from "@/components/ui/toaster.tsx";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import BusSchedules from "./pages/BusSchedules.jsx";
import PassengerList from "./pages/PassengerList";
import Analytics from "./pages/Analytics";
import EmergencyRequests from "./pages/EmergencyRequests";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            } 
          />
          <Route 
            path="/schedules" 
            element={
              <MainLayout>
                <BusSchedules />
              </MainLayout>
            } 
          />
          <Route 
            path="/passengers" 
            element={
              <MainLayout>
                <PassengerList />
              </MainLayout>
            } 
          />
          <Route 
            path="/analytics" 
            element={
              <MainLayout>
                <Analytics />
              </MainLayout>
            } 
          />
          <Route 
            path="/emergency-requests" 
            element={
              <MainLayout>
                <EmergencyRequests />
              </MainLayout>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <MainLayout>
                <Settings />
              </MainLayout>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
