
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
      {/* Background glow removed to adhere to 'Only CTA button glows' requirement */}
      <div className="relative bg-[#bf953f] text-black p-4 rounded-full shadow-2xl transform transition-transform duration-300 group-hover:scale-110 active:scale-95 flex items-center justify-center">
        <MessageCircle size={28} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-zinc-900/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
          Direct Line
        </span>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
