import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, BarChart3, Globe2, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Trading Solutions",
      description: "Comprehensive import/export services, supply chain management, and global market access for industrial and commercial goods.",
      icon: <ShoppingCart className="w-10 h-10 text-primary" />,
      features: ["Global Sourcing", "Logistics Optimization", "Quality Control", "Customs Clearance"],
      link: "/services/trading",
      color: "bg-blue-50"
    },
    {
      title: "Business Consulting",
      description: "Expert strategic advice to help businesses scale, enter new markets in Asia, and optimize operational efficiency.",
      icon: <BarChart3 className="w-10 h-10 text-primary" />,
      features: ["Market Entry Strategy", "Financial Advisory", "Risk Management", "Process Engineering"],
      link: "/services/consulting",
      color: "bg-amber-50"
    }
  ];

  const highlights = [
    { icon: <Globe2 />, title: "Global Network", desc: "Connected with major trade hubs across Asia and Europe." },
    { icon: <ShieldCheck />, title: "Secure Trade", desc: "Full compliance with international trade laws and regulations." },
    { icon: <Zap />, title: "Fast Execution", desc: "Efficient processes to ensure timely delivery and response." },
    { icon: <TrendingUp />, title: "Growth Driven", desc: "Focused on delivering measurable results for your business." }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">Our Expertise</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Solutions for Modern Businesses
          </h2>
          <p className="text-lg text-slate-600">
            We combine industry-leading expertise with a localized approach to help you navigate the complexities of Asian markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-none bg-slate-50 overflow-hidden">
              <div className={`h-2 w-full ${index === 0 ? "bg-primary" : "bg-secondary"}`} />
              <CardHeader className="pt-8 px-8">
                <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <button className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More <span>&rarr;</span>
                  </button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
