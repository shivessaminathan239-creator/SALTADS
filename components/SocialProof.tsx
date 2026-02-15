
import React from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';

const SocialProof: React.FC = () => {
  const stats = [
    { label: "Revenue Generated for Clients", value: "R84.2M+", icon: <TrendingUp className="w-5 h-5 text-[#bf953f]" /> },
    { label: "Qualified Leads Delivered", value: "12,400+", icon: <Users className="w-5 h-5 text-[#bf953f]" /> },
    { label: "Avg. Return on Ad Spend", value: "4.8x", icon: <Target className="w-5 h-5 text-[#bf953f]" /> },
  ];

  return (
    <div className="py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-white/5 rounded-full">
              {stat.icon}
            </div>
            <div className="serif text-4xl md:text-5xl font-bold gold-text mb-2">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;
