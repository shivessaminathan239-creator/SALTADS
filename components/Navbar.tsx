
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Logo: React.FC = () => {
  const [error, setError] = useState(false);

  return (
    <div className="logo-container">
      {!error ? (
        <img 
          src="/assets/salt-logo-dark.png" 
          alt="SALT Ads Agency Logo" 
          className="logo"
          onError={() => setError(true)}
        />
      ) : (
        <span className="logo-fallback">SALT</span>
      )}
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  // All text links removed as per user requests to streamline the header
  const navLinks: { name: string; href: string }[] = [];

  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20am%20interested%20in%20your%20ads%20services.%20Can%20we%20schedule%20a%20consultation%3F";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-xl py-3 shadow-[0_5px_20px_rgba(0,0,0,0.05)] border-b border-black/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="transition-transform hover:scale-105 active:scale-95">
            <Logo />
          </a>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.4em] text-gray-500 hover:text-black transition-all font-bold"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-gold-glow px-8 py-3 bg-[#bf953f] hover:bg-black text-white text-[10px] uppercase tracking-[0.3em] font-black rounded-sm transition-all transform hover:-translate-y-0.5 shadow-xl"
            >
              MAKE MONEY
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#bf953f] p-2 hover:bg-black/5 rounded-full transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-3xl absolute top-full left-0 w-full p-8 border-t border-black/5 space-y-8 flex flex-col items-center text-center animate-in fade-in slide-in-from-top-4 duration-500">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-[0.5em] text-gray-800 block py-2 font-bold hover:text-[#bf953f]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs px-6 py-4 bg-[#bf953f] text-white text-xs uppercase tracking-[0.3em] font-black rounded-sm shadow-lg"
          >
            MAKE MONEY
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
