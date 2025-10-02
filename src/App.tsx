import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"; // Import the new Layout component
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import AcademicsPGtoG2 from "./pages/AcademicsPGtoG2";
import AcademicsG3toG10 from "./pages/AcademicsG3toG10";
import Faculty from "./pages/Faculty";
import Facilities from "./pages/Facilities";
import StudentLife from "./pages/StudentLife";
import Admissions from "./pages/Admissions";
import Gallery from "./pages/Gallery";
import NewsAnnouncements from "./pages/NewsAnnouncements";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout> {/* Wrap routes with the Layout component */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/academics/pg-grade2" element={<AcademicsPGtoG2 />} />
            <Route path="/academics/grade3-grade10" element={<AcademicsG3toG10 />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news-announcements" element={<NewsAnnouncements />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>*
  </QueryClientProvider>
);

export default App;