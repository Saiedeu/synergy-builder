/**
 * @BlogList.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

export const mockPosts = [
  {
    id: 1,
    slug: "qatar-strategic-gateway-international-products",
    title: "Qatar: A Strategic Gateway for International Products in a Multicultural Market",
    excerpt: "Qatar has emerged as one of the most dynamic and diverse markets in the GCC, offering a unique consumer environment for international brands.",
    content: `
      <p>Qatar has emerged as one of the most dynamic and diverse markets in the GCC. With residents representing more than 150 nationalities, the country offers a unique consumer environment where international products are not only accepted but actively sought after. This multicultural composition makes Qatar an ideal entry point for brands seeking to introduce products from ASEAN and other global markets into the region.</p>
      
      <p>Unlike larger markets where consumer segments are more fragmented geographically, Qatar’s compact market allows businesses to test, position, and refine products efficiently. Consumers in Qatar are highly exposed to international trends, creating strong demand for differentiated products, especially in healthy food, specialty beverages, lifestyle goods, and culturally distinctive retail items.</p>
      
      <p>In addition, Qatar’s advanced logistics infrastructure, modern retail environment, and strong regulatory framework support smooth import and distribution processes. Retail centers, cultural districts, and international events further provide platforms for product exposure to diverse communities within a single market.</p>
      
      <p>For ASEAN businesses, Qatar represents more than a destination market. It is a strategic showcase where products can gain visibility among international consumers and regional buyers from across the GCC. Companies that successfully establish their presence in Qatar often find it easier to expand into neighboring markets such as Saudi Arabia, the UAE, and Oman.</p>
      
      <p>At Synergy Asia WLL, we view Qatar as a gateway where global cultures meet commerce — an environment where quality products supported by strong market understanding can build long-term regional opportunities.</p>
    `,
    category: "Market Insights GCC",
    author: "Saieed Rahman",
    date: "Nov 12, 2025",
    image: "https://images.unsplash.com/photo-1578895101408-173f247e174b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    slug: "retail-trends-food-lifestyle-asean",
    title: "Retail Trends: Food, Lifestyle, and Cultural Value from ASEAN",
    excerpt: "ASEAN retail products are gaining global attention as consumers increasingly seek authenticity, wellness, and cultural value.",
    content: `
      <p>ASEAN retail products are gaining global attention as consumers increasingly seek authenticity, wellness, and cultural value in everyday products. Across the GCC, this trend is creating opportunities for ASEAN brands in several key sectors.</p>
      
      <p>In food and beverages, demand is rising for natural ingredients, functional drinks, and healthier snack options. Many ASEAN products align well with these preferences by combining traditional knowledge with modern packaging and convenience.</p>
      
      <p>Fashion and lifestyle products from ASEAN are also evolving, blending traditional craftsmanship with contemporary design. Lightweight materials, sustainable fabrics, and culturally inspired aesthetics resonate strongly in warm-climate markets such as the GCC.</p>
      
      <p>Arts and crafts are increasingly appreciated as home décor rather than souvenirs. Handmade items and natural materials contribute to personalized living spaces, aligning with growing interest in unique and meaningful interiors.</p>
      
      <p>These trends show that ASEAN products are moving beyond price competitiveness toward value-driven positioning, offering quality, story, and cultural identity for international markets.</p>
    `,
    category: "ASEAN Product Trends",
    author: "Synergy Expert",
    date: "Nov 08, 2025",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    slug: "agriteq-2026-katara-highlights",
    title: "AGRITEQ 2026 at Katara Highlights Agricultural Innovation and Collaboration",
    excerpt: "Held at Katara Cultural Village in Doha, AGRITEQ 2026 continues to support Qatar's focus on food security and agricultural innovation.",
    content: `
      <p>AGRITEQ 2026, held at Katara Cultural Village in Doha, continues to support Qatar’s focus on food security, agricultural innovation, and sustainability. The exhibition brings together local and international participants from across the agricultural and food production sectors.</p>
      
      <p>Key themes include smart farming, sustainable cultivation, hydroponics, and agri-technology solutions aimed at strengthening regional food systems. The event reflects Qatar’s commitment to innovation while encouraging international collaboration in agriculture and supply chains.</p>
      
      <p>For ASEAN businesses, AGRITEQ provides an opportunity to understand regional priorities and explore partnerships in food production and agricultural technology. The growing emphasis on sustainability and efficiency creates potential for cooperation between ASEAN expertise and GCC market demand.</p>
      
      <p>Synergy Asia WLL views events such as AGRITEQ as important platforms for knowledge exchange and business collaboration, supporting stronger connections between ASEAN and the GCC in the future food ecosystem. Therefore, the company participates in this event, and you can visit at Booth E-12.</p>
    `,
    category: "Business Updates",
    author: "Admin",
    date: "Nov 05, 2025",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function BlogList() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Blog & Insights" 
        description="Stay updated with the latest market trends, trade insights, and business consulting expertise from Synergy Asia WLL."
      />
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4">Insights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">News & Insights</h1>
            <p className="text-lg text-slate-600">
              Expert perspectives on international trade, market dynamics, and strategic business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPosts.map((post) => (
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
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                      <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="text-primary font-bold flex items-center gap-1 group/btn">
                      Read More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
