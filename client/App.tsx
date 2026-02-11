/**
 * @App.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteProvider } from "./context/SiteContext";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceTrading from "./pages/ServiceTrading";
import ServiceConsulting from "./pages/ServiceConsulting";
import Products from "./pages/Products";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

// Admin
import AdminLayout from "./pages/Admin/Layout";
import Dashboard from "./pages/Admin/Dashboard";
import BlogManagement from "./pages/Admin/Blog";
import AdminProducts from "./pages/Admin/Products";
import Customization from "./pages/Admin/Customization";
import Leads from "./pages/Admin/Leads";
import AdminSEO from "./pages/Admin/SEO";
import MediaManagement from "./pages/Admin/Media";
import SiteSettings from "./pages/Admin/Settings";
import UserManagement from "./pages/Admin/Users";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SiteProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/trading" element={<ServiceTrading />} />
            <Route path="/services/consulting" element={<ServiceConsulting />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="blog" element={<BlogManagement />} />
              <Route path="media" element={<MediaManagement />} />
              <Route path="contact" element={<Leads />} />
              <Route path="leads" element={<Leads />} />
              <Route path="customization" element={<Customization />} />
              <Route path="seo" element={<AdminSEO />} />
              <Route path="settings" element={<SiteSettings />} />
              <Route path="users" element={<UserManagement />} />
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SiteProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
