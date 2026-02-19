
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20am%20interested%20in%20your%20ads%20services.%20Can%20we%20schedule%20a%20consultation%3F";

  return (
    <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#bf953f]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-gray-100/50 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(circle at center, #bf953f 0.5px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        <div className="inline-flex items-center gap-3 px-8 py-2.5 mb-12 border border-[#bf953f]/20 rounded-full bg-[#bf953f]/5 backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-[#bf953f]" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f] font-bold">
            BEST IN SOUTH AFRICA
          </span>
        </div>

        <h1 className="serif text-5xl md:text-[6.5rem] lg:text-[7.5rem] font-semibold mb-12 leading-[1.05] tracking-tight text-black">
          Stop Chasing Clients. <br />
          <span className="gold-text italic">Make Them Come To You.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl lg:text-2xl mb-16 font-light leading-relaxed">
          SALT builds high-level acquisition systems that automate prestige and scale revenue. 
          Stop begging for leads and start <span className="text-black font-semibold">commanding your market vertical.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-gold-glow group relative px-14 py-7 bg-black hover:bg-zinc-900 text-white font-bold text-sm uppercase tracking-[0.2em] rounded-sm transition-all duration-300 flex items-center gap-5 transform hover:scale-105 active:scale-95 shadow-2xl"
          >
            MAKE MONEY
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </a>
          
          <div className="flex flex-col items-start gap-2 text-left">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[9px] font-bold text-gray-400">SALT</div>
                ))}
              </div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-gray-600">Reserved for SA Elite</span>
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Limited onboarding: 2 partners per month</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 w-full flex justify-center gap-16 text-gray-400 opacity-40">
         <span className="text-[11px] font-bold tracking-[0.3em]">AI-CORE SYSTEMS</span>
         <span className="text-[11px] font-bold tracking-[0.3em]">OMNI-CHANNEL PRECISION</span>
         <span className="text-[11px] font-bold tracking-[0.3em]">OUTCOME DRIVEN</span>
      </div>
    </div>
  );
};

export default Hero;
