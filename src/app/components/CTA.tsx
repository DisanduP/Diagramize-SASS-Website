import { Button } from "./ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Animated circles */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="size-4" />
            <span className="text-sm">Join the conversion revolution</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl mb-6">
            Ready to Start Converting?
          </h2>
          <p className="text-xl mb-10 text-blue-50 max-w-2xl mx-auto">
            Join thousands of developers and designers who trust our converter for their diagramming needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-200 text-lg px-10 py-7 gap-2 shadow-2xl"
            >
              Get Started Free
              <ArrowRight className="size-5" />
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-200 text-lg px-10 py-7 shadow-xl"
            >
              Schedule Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center text-sm mb-12">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-5" />
              <span>Start in 30 seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-5" />
              <span>Cancel anytime</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-2">50K+</div>
              <div className="text-blue-100">Conversions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-2">99.9%</div>
              <div className="text-blue-100">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-2">&lt;1s</div>
              <div className="text-blue-100">Avg. Speed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-2">4.9★</div>
              <div className="text-blue-100">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}