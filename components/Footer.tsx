import React, { useState } from 'react';

const FooterLogo: React.FC = () => {
  const [error, setError] = useState(false);

  return (
    <div className="mb-8">
      {!error ? (
        <img 
          src="/assets/salt-logo.png" 
          alt="SALT Ads Agency Logo" 
          className="h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(191,149,63,0.3)]"
          onError={() => setError(true)}
        />
      ) : (
        <span className="logo-fallback text-3xl">SALT</span>
      )}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#bf953f]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-2">
            <FooterLogo />
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed font-light mt-4">
              We engineer unignorable acquisition systems for South Africa's most ambitious revenue-generators. We are not an agency; we are a growth firm.
            </p>
            <div className="mt-12 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#bf953f] animate-pulse shadow-[0_0_10px_#bf953f]"></div>
              <p className="text-[10px] tracking-[0.5em] text-[#bf953f] font-black uppercase">Established 2025 • Pietermaritzburg</p>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.6em] text-white font-black mb-10">Intelligence</h4>
            <ul className="space-y-6 text-[10px] tracking-[0.3em] text-gray-500 font-bold">
              <li><a href="#pillars" className="hover:text-white transition-colors">MARKET PSYCHOLOGY</a></li>
              <li><a href="#pillars" className="hover:text-white transition-colors">CONVERSION OPS</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">MEDIA VELOCITY</a></li>
              <li><a href="#ai-tool" className="hover:text-white transition-colors">PROPRIETARY TOOLS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.6em] text-white font-black mb-10">Governance</h4>
            <ul className="space-y-6 text-[10px] tracking-[0.3em] text-gray-500 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">PRIVACY PROTOCOL</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SERVICE TERMS</a></li>
              <li><a href="mailto:elite@saltads.co.za" className="hover:text-white transition-colors">DIRECT CONTACT</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] text-gray-600 uppercase tracking-[0.5em] font-black">
          <div className="flex flex-col md:flex-row gap-6 md:gap-14 items-center">
            <p>© {new Date().getFullYear()} SALT ADS AGENCY. ALL RIGHTS RESERVED.</p>
            <p className="text-[#bf953f] border-l border-white/10 pl-14 hidden md:block">FOUNDER: SHIV SAMINATHAN</p>
          </div>
          <p className="text-white/20">PRIVATE & CONFIDENTIAL</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;