
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20am%20interested%20in%20your%20ads%20services.%20Can%20we%20schedule%20a%20consultation%3F";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#bf953f] rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity animate-pulse"></div>
      <div className="relative bg-[#bf953f] text-black p-4 rounded-full shadow-2xl transform transition-transform duration-300 group-hover:scale-110 active:scale-95 flex items-center justify-center">
        <MessageCircle size={28} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-[#bf953f]/30">
          Direct Line
        </span>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
