
import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Services', href: '#pillars' },
    { name: 'Philosophy', href: '#philosophy' },
  ];

  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20am%20interested%20in%20your%20ads%20services.%20Can%20we%20schedule%20a%20consultation%3F";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center group transition-transform hover:scale-105">
            <img 
              src="logo.png" 
              alt="SALT Ads Agency Logo" 
              className="h-12 w-auto drop-shadow-[0_0_15px_rgba(191,149,63,0.3)]"
            />
          </a>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-gray-300 hover:text-[#bf953f] transition-colors font-bold"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-gold-glow px-6 py-2 bg-[#bf953f] hover:bg-[#b38728] text-black text-xs uppercase tracking-widest font-black rounded-sm transition-all transform hover:scale-105 active:scale-95 inline-block text-center shadow-lg"
            >
              Book a Call
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl absolute top-full left-0 w-full p-8 border-t border-white/5 space-y-6 flex flex-col items-center text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-widest text-gray-300 block py-2 font-bold"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-gold-glow w-full max-w-xs px-6 py-3 bg-[#bf953f] text-black text-xs uppercase tracking-widest font-black rounded-sm inline-block"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
