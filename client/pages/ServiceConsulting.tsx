/**
 * @ServiceConsulting.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, Users2, Lightbulb, Zap, TrendingUp } from "lucide-react";

export default function ServiceConsulting() {
  const expertises = [
    { title: "Market Entry", icon: <TrendingUp />, desc: "Strategic planning for entering new Asian markets with minimal risk." },
    { title: "Financial Advisory", icon: <PieChart />, desc: "Optimization of financial structures for cross-border operations." },
    { title: "Risk Management", icon: <Zap />, desc: "Comprehensive risk assessment for international business ventures." },
    { title: "Process Engineering", icon: <BarChart3 />, desc: "Improving operational efficiency through optimized business processes." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Business Consulting" 
        description="Expert strategic consulting for market entry, financial advisory, and risk management in Asia."
      />
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="px-4 py-1">Consulting</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                Strategic Insights for <span className="text-primary">Sustainable Growth</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Synergy Asia WLL provides the expert guidance necessary to navigate the complexities of modern business. We transform insights into actionable strategies that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary text-white font-bold h-14 px-8">Schedule a Strategy Session</Button>
                <Button size="lg" variant="outline" className="border-2 h-14 px-8">Our Case Studies</Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-[40px] shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1454165833767-027ff33027ef?q=80&w=2070&auto=format&fit=crop" 
                  alt="Strategic Consulting" 
                  className="rounded-[30px] w-full h-auto shadow-inner"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-0" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />
            </div>
          </div>
        </section>

        {/* Expertise Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Areas of Expertise</h2>
              <p className="text-slate-600">Specialized knowledge across key business domains to ensure comprehensive support.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertises.map((item, i) => (
                <Card key={i} className="border-none shadow-sm hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-slate-100 text-primary rounded-xl flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <div className="h-px w-12 bg-white/20" />
                  <div className="w-12 h-12 bg-slate-800 border border-white/10 rounded-full flex items-center justify-center font-bold text-xl text-slate-500">2</div>
                  <div className="h-px w-12 bg-white/20" />
                  <div className="w-12 h-12 bg-slate-800 border border-white/10 rounded-full flex items-center justify-center font-bold text-xl text-slate-500">3</div>
                </div>
                <h2 className="text-4xl font-bold mb-8">Our Consultative Methodology</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 shrink-0 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                      <Lightbulb size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Discovery & Analysis</h4>
                      <p className="text-slate-400">Deep dive into your current business model, market position, and growth objectives.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 shrink-0 bg-slate-800 text-slate-500 rounded-full flex items-center justify-center">
                      <Users2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-slate-200">Collaborative Strategy</h4>
                      <p className="text-slate-400">Developing a customized roadmap in direct partnership with your key stakeholders.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 p-12 rounded-3xl border border-white/10">
                <div className="text-6xl font-black text-primary/20 mb-6 italic">Success</div>
                <p className="text-xl text-slate-300 leading-relaxed italic mb-8">
                  "Synergy Asia's consulting team transformed our market entry strategy, reducing our time-to-market by 40% and ensuring full regulatory compliance from day one."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-full" />
                  <div>
                    <div className="font-bold">Mark Henderson</div>
                    <div className="text-sm text-slate-500">CEO, Global Retail Ventures</div>
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
