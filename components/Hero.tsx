
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20am%20interested%20in%20your%20ads%20services.%20Can%20we%20schedule%20a%20consultation%3F";

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#bf953f] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-1.5 mb-8 border border-[#bf953f]/30 rounded-full bg-[#bf953f]/5 backdrop-blur-sm">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#bf953f] font-bold">
            We Build Revenue Engines
          </span>
        </div>

        <h1 className="serif text-5xl md:text-8xl font-medium mb-8 leading-tight tracking-tight">
          Elite Growth for <br />
          <span className="gold-text italic">Elite Businesses.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed">
          We don't sell ads. We sell outcomes. Turning complex ad spend into <br className="hidden md:block" />
          predictable, scalable revenue for whales—not bargain hunters.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-gold-glow group relative px-10 py-5 bg-[#bf953f] hover:bg-[#b38728] text-black font-bold uppercase tracking-widest rounded-sm transition-all flex items-center gap-3 transform hover:translate-y-[-2px]"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <button className="px-10 py-5 bg-transparent border border-white/10 hover:border-white/30 text-white font-bold uppercase tracking-widest rounded-sm transition-all backdrop-blur-sm">
            Watch the Case Study
          </button>
        </div>
      </div>

      {/* Luxury Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;
