import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20am%20interested%20in%20your%20ads%20services.%20Can%20we%20schedule%20a%20consultation%3F";

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#bf953f]/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-white/5 blur-[180px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at center, #bf953f 0.5px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-6 py-2 mb-10 border border-[#bf953f]/20 rounded-full bg-[#bf953f]/5 backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5 text-[#bf953f]" />
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#bf953f] font-black">
            PRIVATE GROWTH FIRM • SOUTH AFRICA
          </span>
        </div>

        <h1 className="serif text-5xl md:text-[7.5rem] font-medium mb-10 leading-[1.1] tracking-tighter">
          We Engineer <br />
          <span className="gold-text italic">Market Leaders.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-14 font-light leading-relaxed">
          The SALT Ads Agency builds bespoke acquisition systems for businesses generating 
          <span className="text-white font-semibold"> R1M+ Monthly Revenue.</span> We don't buy clicks; we buy outcomes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-gold-glow group relative px-12 py-6 bg-[#bf953f] hover:bg-[#d4af37] text-black font-black text-sm uppercase tracking-[0.2em] rounded-sm transition-all flex items-center gap-4 transform hover:scale-105 active:scale-95 shadow-[0_30px_60px_-15px_rgba(191,149,63,0.4)]"
          >
            Request Private Audit
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </a>
          
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-[#111] flex items-center justify-center text-[8px] font-black text-gray-500">SALT</div>
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest font-black text-gray-300">R84M+ Generated</span>
            </div>
            <p className="text-[9px] text-gray-600 uppercase tracking-widest mt-1">Limited to 2 new partners per month</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 w-full flex justify-center gap-12 text-gray-700 opacity-40 grayscale hover:opacity-100 transition-opacity">
         <span className="text-[10px] font-black tracking-[0.3em]">GOOGLE PREMIER</span>
         <span className="text-[10px] font-black tracking-[0.3em]">META PRO</span>
         <span className="text-[10px] font-black tracking-[0.3em]">REVENUE DRIVEN</span>
      </div>
    </div>
  );
};

export default Hero;