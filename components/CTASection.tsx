
import React from 'react';
import { Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

const CTASection: React.FC = () => {
  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20am%20interested%20in%20your%20ads%20services.%20Can%20we%20schedule%20a%20consultation%3F";

  return (
    <div className="relative py-24 border-y border-black/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="serif text-5xl md:text-7xl font-medium mb-12 text-black">
          Secure Your <br /><span className="gold-text">Market Advantage.</span>
        </h2>
        
        <p className="text-xl text-gray-700 mb-12 font-light leading-relaxed">
          We only take on 2 new partners per month to maintain our high-performance architecture. 
          If your business is growth-ready and you want to scale with absolute certainty, let's connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          {[
            "100% Outcome Driven",
            "Modern AI Infrastructure",
            "Bespoke Acquisition Funnels"
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-5 bg-zinc-50 rounded-xl border border-black/[0.02]">
              <CheckCircle2 className="text-[#bf953f] w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-semibold tracking-tight text-black">{feature}</span>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-gold-glow group relative w-full md:w-auto px-16 py-8 bg-black hover:bg-zinc-900 text-white text-lg font-bold uppercase tracking-[0.2em] rounded-sm transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl inline-flex items-center justify-center gap-4"
          >
            <Calendar className="w-6 h-6" />
            MAKE MONEY
          </a>
          
          <div className="flex items-center justify-center gap-3 text-[#bf953f] text-xs font-bold uppercase tracking-widest">
            <ShieldCheck size={18} />
            The SALT Standard: Qualified Leads or You Don't Pay.
          </div>
        </div>
        
        <p className="mt-12 text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">
          Strategic Selection for South African Revenue Generators.
        </p>
      </div>
    </div>
  );
};

export default CTASection;
