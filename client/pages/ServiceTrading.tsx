/**
 * @ServiceTrading.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Globe, ShieldCheck, Truck, Package, RefreshCw } from "lucide-react";

export default function ServiceTrading() {
  const steps = [
    { icon: <Package />, title: "Product Sourcing", desc: "Identifying and vetting high-quality suppliers globally." },
    { icon: <ShieldCheck />, title: "Quality Assurance", desc: "Strict inspections to ensure compliance with standards." },
    { icon: <Truck />, title: "Logistics", desc: "End-to-end supply chain management and distribution." },
    { icon: <RefreshCw />, title: "Market Access", desc: "Connecting products with optimal distribution channels." }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Trading Solutions" 
        description="Comprehensive global trading services including sourcing, logistics, and quality control."
      />
      <Navbar />
      
      <main className="pt-32">
        {/* Header Section */}
        <section className="bg-slate-900 py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 translate-x-1/2" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge className="bg-primary hover:bg-primary mb-6">Services</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Global Trading & <span className="text-secondary">Supply Chain</span> Excellence
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10">
                Synergy Asia WLL facilitates seamless international commerce through robust sourcing strategies, optimized logistics, and rigorous quality control protocols.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary text-white font-bold px-8 h-14">Get Started</Button>
                <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 h-14">View Markets</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Trading Process</h2>
              <p className="text-slate-600">A systematic approach to ensuring every trade is secure, efficient, and profitable.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  <div className="absolute top-8 right-8 text-4xl font-black text-slate-50 opacity-10 leading-none">0{i+1}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">Specialized Trade Sectors</h2>
                <div className="space-y-6">
                  {[
                    { title: "Industrial Machinery", desc: "Specialized equipment for manufacturing and construction." },
                    { title: "Consumer Goods", desc: "High-demand retail products and electronic components." },
                    { title: "Raw Materials", desc: "Essential commodities for diverse industrial applications." },
                    { title: "Chemical Solutions", desc: "Specialized chemical products for specialized markets." }
                  ].map((cat, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                      <div className="w-1.5 h-auto bg-primary/20 group-hover:bg-primary transition-colors rounded-full" />
                      <div>
                        <h4 className="font-bold text-slate-900">{cat.title}</h4>
                        <p className="text-sm text-slate-500">{cat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" alt="Cargo" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-48 bg-primary rounded-3xl flex items-center justify-center p-8 text-white text-center">
                    <div className="text-2xl font-bold">100% Secure Transaction Protocols</div>
                  </div>
                </div>
                <div className="pt-12 space-y-4">
                  <div className="h-48 bg-secondary rounded-3xl flex items-center justify-center p-8 text-slate-900 text-center">
                    <Globe size={48} className="mx-auto mb-2 opacity-20" />
                    <div className="text-2xl font-bold">Global Market Reach</div>
                  </div>
                  <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=1987&auto=format&fit=crop" alt="Warehousing" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
