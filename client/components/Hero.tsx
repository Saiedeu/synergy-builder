import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-slate-100 rounded-bl-[100px] z-[-1]" />
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Leading Trade & Consulting in Asia
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
            Elevating Business <span className="text-primary underline decoration-secondary/50 decoration-4 underline-offset-8">Synergy</span> Across Borders
          </h1>
          
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Synergy Asia WLL is your premier partner for strategic trading solutions and expert business consulting. We bridge markets and empower growth with professional excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold group">
              Our Services
              <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-2">
                Contact Us
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
            <div>
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-slate-500">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-slate-500">Global Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-slate-500">Expert Support</div>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Professional Business Center" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-2xl -z-0 rotate-12" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 border-4 border-primary/20 rounded-2xl -z-0 -rotate-6" />
          
          <div className="absolute top-1/2 -left-12 bg-white p-4 rounded-xl shadow-xl z-20 hidden xl:block animate-bounce">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-slate-900">Certified Partners</div>
                <div className="text-xs text-slate-500">Global Trade Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
