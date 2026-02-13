
import React from 'react';
import { Brain, FileText, Zap, Cpu, Database } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    { icon: <Brain />, label: 'Psychology' },
    { icon: <FileText />, label: 'Copy' },
    { icon: <Zap />, label: 'Paid Media' },
    { icon: <Cpu />, label: 'Automation' },
    { icon: <Database />, label: 'Data' },
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#bf953f] font-bold mb-4 block">Our Methodology</span>
          <h2 className="serif text-4xl md:text-5xl font-medium mb-8">The Equation for Scalable Profit.</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Most agencies guess. We build. Our edge is simple but rare: 
            We combine high-level human psychology with aggressive data science to remove the guesswork from growth.
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4 p-4 border border-white/5 rounded bg-white/[0.02]">
              <div className="w-12 h-12 rounded-full bg-[#bf953f]/10 flex items-center justify-center text-[#bf953f]">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-sm">ROI Accountability</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest">We align incentives with our clients.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <span className="serif text-8xl text-white/[0.03] font-bold">SALT</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8">
            {steps.map((step, idx) => (
              <div key={step.label} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-[#bf953f] mb-3 transform hover:scale-110 transition-transform cursor-pointer">
                  {step.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{step.label}</span>
                {idx < steps.length - 1 && (
                  <div className="h-8 w-[1px] bg-gradient-to-b from-[#bf953f]/50 to-transparent mt-4 mb-2"></div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10 w-full text-center">
              <span className="gold-text serif text-3xl font-bold">= Scalable Profit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
