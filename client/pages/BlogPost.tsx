/**
 * @BlogPost.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ChevronLeft, Facebook, Twitter, Linkedin } from "lucide-react";
import { mockPosts } from "./BlogList";

export default function BlogPost() {
  const { slug } = useParams();
  const post = mockPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
          <Link to="/blog">
            <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={post.title} 
        description={post.excerpt}
      />
      <Navbar />
      
      <main className="pt-32 pb-24">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Link to="/blog" className="inline-flex items-center text-sm text-slate-500 hover:text-primary mb-8 group">
              <ChevronLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Insights
            </Link>
            <Badge className="mb-6 bg-primary/10 text-primary border-none hover:bg-primary/20">{post.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <User size={20} className="text-slate-400" />
                  </div>
                  <span className="font-bold text-slate-900">{post.author}</span>
                </div>
                <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                <span className="flex items-center gap-2">• 5 min read</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Share</span>
                <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                  <Facebook size={14} />
                </button>
                <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all">
                  <Twitter size={14} />
                </button>
                <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all">
                  <Linkedin size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-xl">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="prose prose-slate prose-lg max-w-none mb-16">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <>
                <p className="lead text-xl text-slate-600 font-medium mb-8">
                  {post.excerpt}
                </p>
                <p>
                  In the rapidly evolving landscape of international commerce, businesses must remain agile and well-informed. As we look towards 2026, several key trends are emerging that will define the success of trade operations in the Asian region.
                </p>
                <h3>Strategic Growth in Global Markets</h3>
                <p>
                  As we continue to support our global partners, our focus remains on delivering strategic value that transcends simple transactions. The goal is to build enduring business ecosystems that can withstand global economic volatility.
                </p>
              </>
            )}
          </div>

          {/* Tag Cloud */}
          <div className="pt-8 border-t border-slate-100 mb-16 flex flex-wrap gap-2">
            <Badge variant="secondary">Synergy Asia</Badge>
            <Badge variant="secondary">Market Insights</Badge>
            <Badge variant="secondary">GCC Trade</Badge>
            <Badge variant="secondary">ASEAN</Badge>
            <Badge variant="secondary">Qatar 2026</Badge>
          </div>

          {/* CTA */}
          <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Want More Expert Insights?</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">Subscribe to our newsletter and get the latest market trends delivered straight to your inbox.</p>
            <div className="flex max-w-md mx-auto gap-2">
              <input type="email" placeholder="Email address" className="bg-white/10 border-white/20 rounded-xl px-4 flex-1 outline-none focus:ring-2 focus:ring-primary" />
              <Button className="bg-primary text-white h-12 px-6">Subscribe</Button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
