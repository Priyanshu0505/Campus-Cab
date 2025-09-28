import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookRide from "./pages/BookRide";
import VehicleRental from "./pages/VehicleRental";
import Agencies from "./pages/Agencies";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book" element={<BookRide />} />
          <Route path="/rental" element={<VehicleRental />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
