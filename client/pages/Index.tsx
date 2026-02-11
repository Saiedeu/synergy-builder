/**
 * @Index.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight, Quote, Globe, Users, TrendingUp, Heart, ShoppingCart, CheckCircle2 } from "lucide-react";
import { mockPosts } from "./BlogList";
import { motion } from "framer-motion";

const mockProducts = [
  {
    id: 1,
    name: "Premium Thai Jasmine Rice",
    category: "Food & Beverage",
    description: "Authentic, long-grain fragrant rice sourced directly from the finest fields in Thailand.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop",
    price: "Inquire for Pricing"
  },
  {
    id: 2,
    name: "Organic Coconut Water",
    category: "Healthy Beverages",
    description: "100% pure, natural coconut water with no added sugar or preservatives.",
    image: "https://images.unsplash.com/photo-1543158066-85764020a59f?q=80&w=2070&auto=format&fit=crop",
    price: "Inquire for Pricing"
  },
  {
    id: 3,
    name: "Artisan Wood Carvings",
    category: "Lifestyle & Decor",
    description: "Exquisite handmade decorative pieces blending traditional ASEAN craftsmanship with modern design.",
    image: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=2070&auto=format&fit=crop",
    price: "Inquire for Pricing"
  },
  {
    id: 4,
    name: "Sustainable Bamboo Fabric",
    category: "Fashion & Lifestyle",
    description: "Eco-friendly, breathable bamboo textiles perfect for warm-climate fashion and home interiors.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
    price: "Inquire for Pricing"
  },
  {
    id: 5,
    name: "Specailty Arabica Coffee",
    category: "Food & Beverage",
    description: "High-altitude grown beans from the mountains of Southeast Asia, expertly roasted for rich flavor.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    price: "Inquire for Pricing"
  },
  {
    id: 6,
    name: "Smart Hydroponic Kits",
    category: "Agri-Tech",
    description: "Innovative indoor farming solutions for sustainable cultivation in urban environments.",
    image: "https://images.unsplash.com/photo-1585255318167-d7730d173773?q=80&w=2070&auto=format&fit=crop",
    price: "Inquire for Pricing"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <SEO
        title="Home"
        description="Synergy Asia WLL - Your strategic partner for global trade and business consulting in Qatar and beyond."
        keywords="trading, consulting, Asia trade, business growth, Qatar"
        faq={[
          { question: "What services does Synergy Asia offer?", answer: "We offer professional trading solutions and strategic business consulting." },
          { question: "Where is Synergy Asia located?", answer: "We are located in Doha, Qatar." }
        ]}
      />
      <Navbar />
      <main>
        <Hero />
        
        {/* Founder's Message Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                      alt="Kartini Sarsilaningsih" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl text-white max-w-xs">
                    <div className="text-xl font-bold">Kartini Sarsilaningsih</div>
                    <div className="text-sm opacity-80">Founder & Managing Director</div>
                    <div className="mt-2 text-2xl font-serif">KS</div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                    Founder's Message
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-8 -left-8 w-16 h-16 text-primary/10 -z-10" />
                    <p className="text-2xl md:text-3xl font-medium text-slate-900 leading-relaxed italic">
                      "Synergy Asia WLL was established with a clear purpose — to strengthen meaningful connections between ASEAN and the GCC through trade, collaboration, and shared growth. Our approach goes beyond transactions. We aim to build long-term partnerships based on trust, professionalism, and mutual benefit."
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Badge variant="secondary" className="mb-4">Why Synergy Asia</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">A Trusted Bridge Between ASEAN and the GCC</h2>
              <p className="text-lg text-slate-600">
                Synergy Asia was established to build a trusted bridge between ASEAN and the GCC. After many years working and building networks, we saw strong opportunities to introduce quality products, talents, and business solutions from ASEAN while helping regional partners access reliable markets and partnerships. Our focus is long-term collaboration, not just transactions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: <Globe className="w-8 h-8 text-primary" />, 
                  title: "Regional Expertise", 
                  desc: "Deep understanding of both ASEAN capabilities and GCC market dynamics." 
                },
                { 
                  icon: <Users className="w-8 h-8 text-primary" />, 
                  title: "Trusted Networks", 
                  desc: "Established relationships with key stakeholders and decision-makers." 
                },
                { 
                  icon: <TrendingUp className="w-8 h-8 text-primary" />, 
                  title: "Market-Driven", 
                  desc: "Strategies based on real market needs and consumer trends." 
                },
                { 
                  icon: <Heart className="w-8 h-8 text-primary" />, 
                  title: "Partnership Focus", 
                  desc: "Committed to shared growth and sustainable business ecosystems." 
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                    <CardHeader>
                      <div className="mb-4 p-3 bg-primary/5 rounded-xl w-fit">
                        {item.icon}
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section Teaser (Existing) */}
        <section className="py-20 bg-slate-900 overflow-hidden relative">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-lg mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Business meeting" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary rounded-full flex items-center justify-center border-8 border-slate-900 shadow-2xl">
                <span className="text-slate-900 font-black text-2xl">EST. 2009</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="text-secondary font-bold tracking-widest uppercase text-sm">About Synergy Asia</div>
              <h2 className="text-4xl font-bold text-white leading-tight">
                Your Strategic Gateway to Asian Trade & Business Excellence
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Synergy Asia WLL has been at the forefront of facilitating international trade and providing high-level business consultancy since 2009. Our mission is to simplify cross-border operations for our clients while maximizing their growth potential.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-slate-300 text-sm">Integrity-First Approach</span>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-slate-300 text-sm">Expert Market Insights</span>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-slate-300 text-sm">Global Partner Network</span>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-slate-300 text-sm">End-to-End Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <Badge variant="secondary" className="px-4 py-1">Vision & Mission</Badge>
                  <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                    Driving Purpose-Led Growth
                  </h2>
                  
                  <div className="space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">V</span>
                      Vision
                    </h3>
                    <p className="text-xl text-slate-700 leading-relaxed font-medium">
                      To become a trusted gateway connecting ASEAN products, talents, and business solutions with opportunities across the GCC, creating sustainable cross-border growth and long-term partnerships between regions.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 pt-12">
                  <h3 className="text-2xl font-bold text-primary flex items-center gap-3 mb-8">
                    <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">M</span>
                    Mission
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Introduce high-quality ASEAN products and services into GCC markets through responsible and sustainable trade.",
                      "Support businesses in entering new markets by providing practical consulting, reliable networks, and local market understanding.",
                      "Connect talents, ideas, and enterprises across borders, fostering collaboration beyond transactions.",
                      "Contribute to stronger economic and cultural relationships between ASEAN and the GCC."
                    ].map((text, i) => (
                      <div key={i} className="flex gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                          {i + 1}
                        </div>
                        <p className="text-slate-700 font-medium pt-1">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4">Our Values</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Principles That Guide Us</h2>
              <p className="text-slate-600">
                Synergy Asia operates on principles that guide both business decisions and partnerships across markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Purpose-Driven Growth", 
                  desc: "We believe business should create value beyond profit. Our initiatives aim to support sustainable growth for partners, communities, and markets." 
                },
                { 
                  title: "Trust & Commitment", 
                  desc: "We prioritize relationships built on reliability, transparency, and continuity. Long-term partnerships are the foundation of meaningful collaboration." 
                },
                { 
                  title: "Bridge-Building Mindset", 
                  desc: "We connect cultures, markets, and people by combining regional understanding with practical business solutions." 
                },
                { 
                  title: "Professional Excellence", 
                  desc: "We maintain high standards in execution, communication, and service delivery, ensuring partners operate confidently." 
                },
                { 
                  title: "Collaborative Ecosystem", 
                  desc: "Growth happens through collaboration. We aim to build an ecosystem where businesses, talents, and institutions thrive together." 
                }
              ].map((value, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Services />

        {/* Extended Services Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Badge variant="secondary" className="px-4 py-1">Our Offerings</Badge>
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                  Trading & Consulting Services
                </h2>
                <p className="text-lg text-slate-600">
                  Explore our curated service offerings across trading and consulting, designed to bridge markets and create value.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Food & Beverage", "Herbal & Wellness", "Fashion & Lifestyle", "Arts & Crafts",
                    "HR Solutions", "Marketing & Branding", "Communications", "IT Solutions"
                  ].map((service, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 rounded-[40px] p-12 text-white relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-secondary">
                  <ShoppingCart className="w-6 h-6" /> Trading Highlight
                </h3>
                <h4 className="text-xl font-bold mb-4">Arts & Crafts</h4>
                <p className="text-slate-400 leading-relaxed text-lg italic">
                  "Arts and crafts from ASEAN are increasingly appreciated as home decor rather than souvenirs. Handmade items and natural materials contribute to personalized living spaces, aligning with growing interest in unique and meaningful interiors across the GCC region."
                </p>
                <div className="mt-12 aspect-video rounded-2xl overflow-hidden shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=2070&auto=format&fit=crop" alt="ASEAN Crafts" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Products Section (Showcase 6) */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <Badge variant="secondary" className="mb-4">Our Products</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Quality ASEAN Products</h2>
              </div>
              <Link to="/products">
                <Button variant="outline" className="group">
                  View Full Catalog <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockProducts.slice(0, 6).map((product) => (
                <Card key={product.id} className="border-none shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-primary hover:bg-white">{product.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="p-6 pb-2">
                    <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs font-bold text-slate-500">{product.price}</span>
                      <Link to="/contact">
                        <Button variant="ghost" size="sm" className="h-8 text-xs group/btn">
                          Inquire <ShoppingCart size={12} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News & Insights Section (Existing) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <Badge variant="secondary" className="mb-4">Our Perspectives</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Latest News & Insights</h2>
              </div>
              <Link to="/blog">
                <Button variant="outline" className="group">
                  View All Insights <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {mockPosts.slice(0, 3).map((post) => (
                <Card key={post.id} className="border-none shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-4 text-primary border-primary/20">{post.category}</Badge>
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Calendar size={14} /> {post.date}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section (Existing) */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
            </svg>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Ready to Expand Your Business Horizons?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-12 max-w-2xl mx-auto">
              Our experts are ready to help you navigate the complexities of international trade and strategic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-secondary text-slate-900 font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all">
                  Book a Consultation
                </button>
              </Link>
              <button className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all border-none">
                Download Company Profile
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
