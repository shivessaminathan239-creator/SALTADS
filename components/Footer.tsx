
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <img 
                src="logo.png" 
                alt="SALT Ads Agency Logo" 
                className="h-16 w-auto mb-6 opacity-90 hover:opacity-100 transition-opacity"
              />
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-4">
                Turning advertising into a predictable revenue engine for high-level businesses. We attract customers, not clicks.
              </p>
              <p className="text-[10px] tracking-[0.3em] text-[#bf953f] font-bold">PROUDLY SOUTH AFRICAN</p>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold mb-6">Focus</h4>
            <ul className="space-y-4 text-xs tracking-widest text-gray-500">
              <li><a href="#" className="hover:text-[#bf953f] transition-colors">CONVERSION OPS</a></li>
              <li><a href="#" className="hover:text-[#bf953f] transition-colors">ELITE COPY</a></li>
              <li><a href="#" className="hover:text-[#bf953f] transition-colors">PAID MEDIA</a></li>
              <li><a href="#" className="hover:text-[#bf953f] transition-colors">SCALE AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-xs tracking-widest text-gray-500">
              <li><a href="#" className="hover:text-[#bf953f] transition-colors">PRIVACY POLICY</a></li>
              <li><a href="#" className="hover:text-[#bf953f] transition-colors">TERMS OF SERVICE</a></li>
              <li><a href="#" className="hover:text-[#bf953f] transition-colors">CONTACT</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <p>© {new Date().getFullYear()} SALT ADS AGENCY. ALL RIGHTS RESERVED.</p>
            <p className="text-[#bf953f]">FOUNDER: SHIV SAMINATHAN</p>
          </div>
          <p>BASED IN SOUTH AFRICA • BUILT FOR WHALES.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
