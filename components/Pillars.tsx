
import React from 'react';
import { PenTool, Target, Network, Users, Layout, BarChart3 } from 'lucide-react';

const Pillars: React.FC = () => {
  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20services.%20Can%20we%20talk%3F";

  const pillars = [
    {
      title: "Direct Response Copy",
      description: "We write words that sell. We use local SA slang and psychological triggers to bypass 'ad blindness'.",
      icon: <PenTool className="w-6 h-6" />,
      tag: "THE HOOK"
    },
    {
      title: "Omni-Channel Ads",
      description: "We dominate Meta & Google. For every R1 spent, our goal is R5 in booked revenue. Scale without fear.",
      icon: <Target className="w-6 h-6" />,
      tag: "THE FUEL"
    },
    {
      title: "WhatsApp Automation",
      description: "Speed kills. Our AI bots engage leads instantly on WhatsApp while they are still in 'buying mode'.",
      icon: <Network className="w-6 h-6" />,
      tag: "THE SPEED"
    },
    {
      title: "Local Market Psychology",
      description: "South Africans buy differently. We trigger: Trust, Status, and Economic Certainty in every ad.",
      icon: <Users className="w-6 h-6" />,
      tag: "THE EDGE"
    },
    {
      title: "High-Ticket Funnels",
      description: "We don't build websites. We build conversion machines designed to book calls directly into your calendar.",
      icon: <Layout className="w-6 h-6" />,
      tag: "THE CONVERSION"
    },
    {
      title: "ROI Reporting",
      description: "No vanity metrics. You get a weekly breakdown of leads, cost-per-lead, and estimated revenue impact.",
      icon: <BarChart3 className="w-6 h-6" />,
      tag: "THE DATA"
    }
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f] font-bold block mb-4">The SALT Growth System</span>
        <h2 className="serif text-4xl md:text-5xl font-medium mb-6">A Turnkey Revenue Machine.</h2>
        <p className="max-w-2xl mx-auto text-gray-500">
          We don't offer 'packages.' We provide a complete acquisition system designed to out-compete and out-spend your rivals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <div key={index} className="group p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#bf953f] transition-all duration-300"></div>
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-white/5 rounded text-[#bf953f] group-hover:bg-[#bf953f] group-hover:text-black transition-colors">
              {pillar.icon}
            </div>
            <div className="text-[10px] tracking-[0.2em] text-[#bf953f] font-bold mb-2">{pillar.tag}</div>
            <h3 className="text-xl font-bold mb-4 tracking-wider">{pillar.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              {pillar.description}
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 text-white group-hover:text-[#bf953f] transition-colors"
            >
              Consult the Specialist <div className="w-4 h-[1px] bg-current"></div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pillars;
