
import React from 'react';
import { PenTool, Target, Network, Users, Layout, BarChart3 } from 'lucide-react';

const Pillars: React.FC = () => {
  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20services.%20Can%20we%20talk%3F";

  const pillars = [
    {
      title: "Psychological Copy",
      description: "We craft narratives that trigger status-seeking and economic urgency in SA's top earners. Every word is engineered for conversion.",
      icon: <PenTool className="w-6 h-6" />,
      tag: "THE HOOK"
    },
    {
      title: "Aggressive Ads",
      description: "Omni-channel dominance across Meta & Google. We spend R1 to find the people ready to spend R10 with your brand.",
      icon: <Target className="w-6 h-6" />,
      tag: "THE FUEL"
    },
    {
      title: "Inbound Velocity",
      description: "High-speed automation captures leads in seconds. No lead ever goes cold; our acquisition systems are always active.",
      icon: <Network className="w-6 h-6" />,
      tag: "THE SPEED"
    },
    {
      title: "Market Influence",
      description: "We position you as the only logical choice. Trust and authority are established long before the first consultation call.",
      icon: <Users className="w-6 h-6" />,
      tag: "THE EDGE"
    },
    {
      title: "Frictionless Sales",
      description: "Custom-built funnels designed specifically to filter out the noise and book high-quality, pre-sold appointments.",
      icon: <Layout className="w-6 h-6" />,
      tag: "THE CONVERSION"
    },
    {
      title: "Revenue Logic",
      description: "Weekly intelligence reports focused on ROI and Pipeline Value. We measure success by profit, not vanity metrics.",
      icon: <BarChart3 className="w-6 h-6" />,
      tag: "THE DATA"
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-24">
        <span className="text-[11px] uppercase tracking-[0.4em] text-[#bf953f] font-bold block mb-5">THE GROWTH ENGINE</span>
        <h2 className="serif text-5xl md:text-6xl font-medium mb-8 text-black">Precision Built for Scale.</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl font-light leading-relaxed">
          We replace messy marketing with a clean, high-performance acquisition architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pillars.map((pillar, index) => (
          <div key={index} className="group p-10 border border-black/[0.05] bg-white hover:bg-gray-50/30 transition-all duration-500 rounded-lg relative overflow-hidden shadow-sm hover:shadow-2xl">
            <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#bf953f] transition-all duration-500"></div>
            <div className="mb-8 inline-flex items-center justify-center w-14 h-14 bg-zinc-50 rounded-lg text-[#bf953f] group-hover:bg-black group-hover:text-white transition-all duration-500">
              {pillar.icon}
            </div>
            <div className="text-[10px] tracking-[0.3em] text-[#bf953f] font-bold mb-4 uppercase">{pillar.tag}</div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight text-black serif">{pillar.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-8 font-light">
              {pillar.description}
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.2em] font-bold flex items-center gap-3 text-zinc-400 group-hover:text-[#bf953f] transition-all duration-500"
            >
              Consult a Specialist <div className="w-10 h-[1.5px] bg-[#bf953f]"></div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pillars;
