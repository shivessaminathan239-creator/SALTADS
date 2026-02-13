
import React from 'react';
import { PenTool, Target, Network, Users, Layout, BarChart3 } from 'lucide-react';

const Pillars: React.FC = () => {
  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20services.%20Can%20we%20talk%3F";

  const pillars = [
    {
      title: "Copywriting",
      description: "The foundation. Copy is leverage. It multiplies ad spend and conversion rates through the power of persuasion.",
      icon: <PenTool className="w-6 h-6" />,
      tag: "THE FOUNDATION"
    },
    {
      title: "Paid Advertising",
      description: "Meta & Google Mastery. For every R1 spent, we aim to generate R3+ in return. Results build dominance.",
      icon: <Target className="w-6 h-6" />,
      tag: "PERFORMANCE"
    },
    {
      title: "Automation & AI",
      description: "Scale without burnout. AI as a force multiplier for creative generation, lead qualification, and booking.",
      icon: <Network className="w-6 h-6" />,
      tag: "SCALABILITY"
    },
    {
      title: "Human Psychology",
      description: "People buy emotionally then justify logically. We trigger: Desire, Fear, Status, Certainty, and Trust.",
      icon: <Users className="w-6 h-6" />,
      tag: "THE EDGE"
    },
    {
      title: "Funnel Engineering",
      description: "Turning attention into action. Simple, fast, and conversion-focused design for high-value targets.",
      icon: <Layout className="w-6 h-6" />,
      tag: "CONVERSION"
    },
    {
      title: "Data Analytics",
      description: "Data decides. Ego doesn't. Win through continuous feedback loops that refine messages and kill losers fast.",
      icon: <BarChart3 className="w-6 h-6" />,
      tag: "PRECISION"
    }
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f] font-bold block mb-4">Core Competencies</span>
        <h2 className="serif text-4xl md:text-5xl font-medium mb-6">Mastered at an Elite Level.</h2>
        <p className="max-w-2xl mx-auto text-gray-500">
          Salt can only dominate if these six pillars are mastered. We don't just 'do' marketing; we engineer growth systems.
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
              Consult an expert <div className="w-4 h-[1px] bg-current"></div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pillars;
