import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

import Impressum from "./pages/Impressum";
import Engineering from "./components/engineering/Engineering";
import ProjectsPage from "./pages/ProjectsPage";
import Academy from "./pages/Academy";


const queryClient = new QueryClient();

import { LanguageProvider } from "./context/LanguageContext";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Engineering />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/academy" element={<Academy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
