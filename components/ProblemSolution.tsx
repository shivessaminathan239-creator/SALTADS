
import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <h2 className="serif text-4xl md:text-5xl font-medium mb-6">Why Your Ads <span className="italic">Are Not Converting.</span></h2>
        <p className="max-w-2xl mx-auto text-gray-500">
          Most agencies in South Africa focus on vanity metrics like "impressions" and "likes." 
          We focus on the only metric that keeps your doors open: <span className="text-white font-bold">Bankable Profit.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 border border-red-900/20 bg-red-950/5 rounded-2xl">
          <h3 className="text-red-500 text-xs font-black tracking-widest uppercase mb-6 flex items-center gap-2">
            <XCircle size={16} /> THE STATUS QUO
          </h3>
          <ul className="space-y-4">
            {[
              "Expensive clicks with zero lead qualification",
              "Manual follow-ups that take hours (leads go cold)",
              "Generic landing pages that look like everyone else",
              "No clear tracking of where your Rands went",
              "Monthly reports full of marketing jargon"
            ].map((text, i) => (
              <li key={i} className="flex gap-3 text-gray-400 text-sm">
                <span className="text-red-900">•</span> {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 border border-[#bf953f]/20 bg-[#bf953f]/5 rounded-2xl">
          <h3 className="text-[#bf953f] text-xs font-black tracking-widest uppercase mb-6 flex items-center gap-2">
            <CheckCircle2 size={16} /> THE SALT STANDARD
          </h3>
          <ul className="space-y-4">
            {[
              "AI-driven targeting for high-intent SA buyers",
              "Instant WhatsApp automation (leads contacted in < 1 min)",
              "Psychology-based funnels built for local conversion",
              "Full transparency with ROI-focused dashboards",
              "Weekly strategic syncs to scale what works"
            ].map((text, i) => (
              <li key={i} className="flex gap-3 text-gray-200 text-sm">
                <span className="text-[#bf953f]">•</span> {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;
