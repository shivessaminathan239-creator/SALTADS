
import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

const CTASection: React.FC = () => {
  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20am%20interested%20in%20your%20ads%20services.%20Can%20we%20schedule%20a%20consultation%3F";

  return (
    <div className="relative py-24 border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="serif text-5xl md:text-7xl font-medium mb-12">
          Ready to <span className="gold-text">Dominate SA?</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 font-light">
          We only partner with selected South African businesses per quarter to ensure elite-level attention. 
          If you are ready to scale your operations with mathematical precision, let's talk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          {[
            "ROI-Based Guarantee",
            "Market Dominance in SA",
            "End-to-End Automation"
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
              <CheckCircle2 className="text-[#bf953f] w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium tracking-tight">{feature}</span>
            </div>
          ))}
        </div>

        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-gold-glow group relative w-full md:w-auto px-16 py-8 bg-[#bf953f] text-black text-lg font-black uppercase tracking-[0.3em] rounded-sm transform hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(191,149,63,0.5)] inline-flex items-center justify-center gap-4"
        >
          <Calendar className="w-6 h-6" />
          SECURE YOUR CONSULTATION
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"></div>
        </a>
        
        <p className="mt-8 text-xs text-gray-600 uppercase tracking-widest font-bold">
          Free Strategy Audit included for qualified SA businesses.
        </p>
      </div>
    </div>
  );
};

export default CTASection;
