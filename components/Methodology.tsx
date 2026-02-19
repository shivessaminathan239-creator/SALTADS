
import React from 'react';
import { Brain, FileText, Zap, Cpu, Database } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    { icon: <Brain />, label: 'Market Intel' },
    { icon: <FileText />, label: 'Prestige Copy' },
    { icon: <Zap />, label: 'Aggressive Spend' },
    { icon: <Cpu />, label: 'Scale Automation' },
    { icon: <Database />, label: 'Revenue Data' },
  ];

  return (
    <div className="relative py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#bf953f] font-bold mb-6 block">OUR PROCESS</span>
          <h2 className="serif text-5xl md:text-6xl font-medium mb-10 text-black leading-tight">Total Inbound Control.</h2>
          <p className="text-gray-700 text-lg md:text-xl mb-12 leading-relaxed font-light">
            We don't just "run ads." We build an autonomous machine that works for you 24/7, identifying your best customers and inviting them into your world while you focus on high-level strategy.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-6 p-6 border border-black/[0.03] rounded-xl bg-zinc-50/50">
              <div className="w-14 h-14 rounded-full bg-[#bf953f]/10 flex items-center justify-center text-[#bf953f]">
                <Zap className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-black uppercase tracking-widest text-xs mb-1">Guaranteed Performance</h4>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest leading-relaxed font-medium">Results Driven. No Excuses.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-50/50 border border-black/[0.03] p-10 md:p-16 rounded-3xl relative overflow-hidden shadow-inner">
          <div className="absolute top-0 right-0 p-10">
            <span className="serif text-[10rem] text-black/[0.015] font-black leading-none pointer-events-none">SALT</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-10 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.label} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-md border border-black/5 text-[#bf953f] mb-4 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  {step.icon}
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-bold">{step.label}</span>
                {idx < steps.length - 1 && (
                  <div className="h-10 w-[1px] bg-gradient-to-b from-[#bf953f]/30 to-transparent mt-6 mb-2"></div>
                )}
              </div>
            ))}
            <div className="mt-8 pt-8 border-t border-black/[0.05] w-full text-center">
              <span className="gold-text serif text-4xl md:text-5xl font-bold italic tracking-tighter">Inbound Dominance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
