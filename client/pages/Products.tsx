/**
 * @Products.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, ArrowRight } from "lucide-react";

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

export default function Products() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/30 selection:text-primary">
      <SEO
        title="Our Products"
        description="Explore high-quality ASEAN products introduced by Synergy Asia WLL into the GCC market."
        keywords="products, trading, ASEAN products, Qatar, Qatar trade"
      />
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4">Product Showcase</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Quality ASEAN Products</h1>
            <p className="text-lg text-slate-600">
              We bring the best of ASEAN authenticity, wellness, and cultural value to the GCC markets. Explore our curated selection of premium products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProducts.map((product) => (
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
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-bold text-slate-900">{product.price}</span>
                    <Button variant="outline" size="sm" className="group/btn">
                      Inquire <ShoppingCart size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-24 p-12 bg-primary rounded-3xl text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-white">Looking for a Specific Product?</h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                If you are looking for specific ASEAN products or want to partner with us for sourcing, our trade experts are ready to assist you.
              </p>
              <Button size="lg" className="bg-secondary text-slate-900 font-bold hover:shadow-lg transition-all">
                Contact Our Trade Team
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
