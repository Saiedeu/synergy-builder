/**
 * @About.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, Eye, Shield } from "lucide-react";

export default function About() {
  const values = [
    { 
      title: "Our Mission", 
      desc: "To empower global businesses by providing seamless trade solutions and strategic consultancy that drives sustainable growth.",
      icon: <Target className="text-primary" />,
      color: "bg-blue-50"
    },
    { 
      title: "Our Vision", 
      desc: "To be the most trusted strategic gateway for international commerce in the Asian region and beyond.",
      icon: <Eye className="text-secondary" />,
      color: "bg-amber-50"
    },
    { 
      title: "Integrity", 
      desc: "We uphold the highest standards of ethics and transparency in every transaction and partnership.",
      icon: <Shield className="text-primary" />,
      color: "bg-slate-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="About Us" 
        description="Learn about Synergy Asia WLL, our history, mission, and the professional team behind our trade and consulting success."
      />
      <Navbar />
      
      <main className="pt-32">
        {/* Story Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                    alt="Synergy Asia Team" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
                  <div className="text-4xl font-black text-primary mb-2">15+</div>
                  <div className="font-bold text-slate-900 leading-tight">Years of Excellence in International Markets</div>
                </div>
              </div>
              
              <div className="space-y-8">
                <Badge variant="secondary" className="px-4 py-1">Our Story</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Bridging the Gap Between <span className="text-primary">Global Vision</span> and Local Execution
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Founded in 2009 and headquartered in the prestigious West Tower of Bahrain Financial Harbour, Synergy Asia WLL has evolved from a boutique trading firm into a comprehensive strategic partner for global enterprises.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our deep understanding of Asian market dynamics, combined with our commitment to international trade compliance, allows us to provide unmatched value to our clients. We don't just facilitate trades; we build enduring business ecosystems.
                </p>
                
                <ul className="space-y-4 pt-4">
                  {[
                    "Global network of certified suppliers and partners",
                    "Expertise in complex logistics and customs clearance",
                    "Strategic business advisory for market entry",
                    "Commitment to sustainable and ethical trade"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="text-primary" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Driven by Purpose, Guided by Values</h2>
              <p className="text-slate-600">Our core values are the foundation of everything we do at Synergy Asia.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-10 text-center space-y-6">
                    <div className={`w-16 h-16 ${v.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      {v.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{v.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section Placeholder */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Our Leadership</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-4 group">
                  <div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden">
                    <img 
                      src={`https://ui-avatars.com/api/?name=Director+${i}&background=0D8ABC&color=fff&size=512`} 
                      alt="Team Member" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Senior Director {i}</h4>
                    <p className="text-sm text-slate-500">Market Strategy Expert</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
