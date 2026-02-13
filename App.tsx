
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Pillars from './components/Pillars';
import Philosophy from './components/Philosophy';
import AIStrategyTool from './components/AIStrategyTool';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#bf953f] selection:text-black">
      <Navbar scrolled={scrolled} />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section id="methodology" className="py-24">
            <Methodology />
          </section>

          <section id="pillars" className="py-24 border-t border-white/5">
            <Pillars />
          </section>

          <section id="ai-tool" className="py-24">
            <AIStrategyTool />
          </section>

          <section id="philosophy" className="py-24">
            <Philosophy />
          </section>

          <section id="cta" className="py-24">
            <CTASection />
          </section>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
