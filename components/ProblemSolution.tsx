
import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <div className="py-32">
      <div className="text-center mb-20">
        <h2 className="serif text-5xl md:text-6xl font-medium mb-8 text-black">The Inefficiency <span className="italic">Tax.</span></h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed font-light">
          Most businesses are trapped in a cycle of "Manual Growth." 
          This is an expensive, slow, and fragile way to operate a multi-million rand entity in the modern era.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-10 md:p-14 border border-red-50 bg-red-50/20 rounded-2xl">
          <h3 className="text-red-600 text-[11px] font-bold tracking-[0.3em] uppercase mb-10 flex items-center gap-3">
            <XCircle size={18} /> THE MANUAL STRUGGLE
          </h3>
          <ul className="space-y-6">
            {[
              "Begging for referrals that never come",
              "Chasing cold leads that ghost your sales team",
              "Wasting hours on LinkedIn/Email manual outreach",
              "Inconsistent revenue months that cause stress",
              "Reactive strategy based on 'hope' and 'luck'"
            ].map((text, i) => (
              <li key={i} className="flex gap-4 text-gray-700 text-base leading-relaxed font-light">
                <span className="text-red-300 font-bold">•</span> {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-10 md:p-14 border border-[#bf953f]/10 bg-[#bf953f]/5 rounded-2xl shadow-sm">
          <h3 className="text-[#bf953f] text-[11px] font-bold tracking-[0.3em] uppercase mb-10 flex items-center gap-3">
            <CheckCircle2 size={18} /> THE SALT ARCHITECTURE
          </h3>
          <ul className="space-y-6">
            {[
              "Automated prestige that pre-sells the client",
              "Inbound high-intent leads that book themselves",
              "Proprietary AI filters out the 'bargain hunters'",
              "Predictable, scalable, and aggressive growth",
              "Proactive optimization while you sleep"
            ].map((text, i) => (
              <li key={i} className="flex gap-4 text-zinc-900 text-base leading-relaxed font-medium">
                <span className="text-[#bf953f] font-bold">•</span> {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;
