import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import QuickStart from "./pages/QuickStart";
import AWSSetup from "./pages/AWSSetup";
import CICDPipelines from "./pages/CICDPipelines";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/getting-started/quick-start" element={<QuickStart />} />
              <Route path="/cloud/aws-setup" element={<AWSSetup />} />
              <Route path="/devops/ci-cd" element={<CICDPipelines />} />
              <Route path="/settings" element={<Settings />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
