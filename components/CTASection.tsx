
import React from 'react';
import { Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

const CTASection: React.FC = () => {
  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20am%20interested%20in%20your%20ads%20services.%20Can%20we%20schedule%20a%20consultation%3F";

  return (
    <div className="relative py-24 border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="serif text-5xl md:text-7xl font-medium mb-12">
          Dominate Your <br /><span className="gold-text">Local Market.</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 font-light">
          We only take on 2 new clients per month to ensure R1M+ results. 
          If you're doing R100k+ monthly revenue and want to 2x your lead volume, let's talk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          {[
            "100% Performance Driven",
            "Zero Long-Term Contracts",
            "Direct Founder Access"
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
              <CheckCircle2 className="text-[#bf953f] w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium tracking-tight">{feature}</span>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-gold-glow group relative w-full md:w-auto px-16 py-8 bg-[#bf953f] text-black text-lg font-black uppercase tracking-[0.3em] rounded-sm transform hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(191,149,63,0.5)] inline-flex items-center justify-center gap-4"
          >
            <Calendar className="w-6 h-6" />
            BOOK YOUR GROWTH AUDIT
          </a>
          
          <div className="flex items-center justify-center gap-2 text-[#bf953f] text-xs font-bold uppercase tracking-widest">
            <ShieldCheck size={16} />
            The Salt Guarantee: Qualified Leads or You Don't Pay.
          </div>
        </div>
        
        <p className="mt-12 text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">
          Strictly for established SA businesses only.
        </p>
      </div>
    </div>
  );
};

export default CTASection;
