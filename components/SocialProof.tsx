
import React from 'react';
import { Target, Zap, ShieldCheck } from 'lucide-react';

const SocialProof: React.FC = () => {
  const stats = [
    { label: "Target Acquisition Velocity", value: "Exponential", icon: <Zap className="w-5 h-5 text-[#bf953f]" /> },
    { label: "Lead Qualification Standard", value: "High-Intent", icon: <ShieldCheck className="w-5 h-5 text-[#bf953f]" /> },
    { label: "Target ROI Benchmark", value: "4.0x - 8.0x", icon: <Target className="w-5 h-5 text-[#bf953f]" /> },
  ];

  return (
    <div className="py-20 border-y border-black/5 bg-gray-50/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="mb-4 p-3 bg-white shadow-sm border border-black/5 rounded-full">
              {stat.icon}
            </div>
            <div className="serif text-3xl md:text-4xl font-bold gold-text mb-2 uppercase tracking-tight">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;
