
import React, { useState } from 'react';

const FooterLogo: React.FC = () => {
  const [error, setError] = useState(false);

  return (
    <div className="mb-8">
      {!error ? (
        <img 
          src="/assets/salt-logo-dark.png" 
          alt="SALT Ads Agency Logo" 
          className="h-20 w-auto object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.05)]"
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
    <footer className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-black/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#bf953f]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-2">
            <FooterLogo />
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed font-light mt-4">
              We engineer unignorable acquisition systems for South Africa's most ambitious revenue-generators. We are not an agency; we are a growth firm.
            </p>
            <div className="mt-12 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#bf953f] animate-pulse shadow-[0_0_10px_#bf953f]"></div>
              <p className="text-[10px] tracking-[0.5em] text-[#bf953f] font-black uppercase">Established 2025 • Pietermaritzburg</p>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.6em] text-black font-black mb-10">Intelligence</h4>
            <ul className="space-y-6 text-[10px] tracking-[0.3em] text-gray-400 font-bold">
              <li><a href="#pillars" className="hover:text-black transition-colors">MARKET PSYCHOLOGY</a></li>
              <li><a href="#pillars" className="hover:text-black transition-colors">CONVERSION OPS</a></li>
              <li><a href="#methodology" className="hover:text-black transition-colors">MEDIA VELOCITY</a></li>
              <li><a href="#ai-tool" className="hover:text-black transition-colors">PROPRIETARY TOOLS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.6em] text-black font-black mb-10">Governance</h4>
            <ul className="space-y-6 text-[10px] tracking-[0.3em] text-gray-400 font-bold">
              <li><a href="#" className="hover:text-black transition-colors">PRIVACY PROTOCOL</a></li>
              <li><a href="#" className="hover:text-black transition-colors">SERVICE TERMS</a></li>
              <li><a href="mailto:elite@saltads.co.za" className="hover:text-black transition-colors">DIRECT CONTACT</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] text-gray-300 uppercase tracking-[0.5em] font-black">
          <div className="flex flex-col md:flex-row gap-6 md:gap-14 items-center">
            <p>© {new Date().getFullYear()} SALT ADS AGENCY. ALL RIGHTS RESERVED.</p>
            <p className="text-[#bf953f] border-l border-black/10 pl-14 hidden md:block">FOUNDER: SHIV SAMINATHAN</p>
          </div>
          <p className="text-black/10">PRIVATE & CONFIDENTIAL</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
