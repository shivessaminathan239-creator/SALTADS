
import React, { useState } from 'react';
import { generateStrategySnippet } from '../services/geminiService';
import { StrategyResult } from '../types';
import { BrainCircuit, Loader2, Send } from 'lucide-react';

const AIStrategyTool: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [spend, setSpend] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StrategyResult | null>(null);

  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20just%20used%20your%20AI%20Strategy%20Tool%20and%20I'm%20ready%20to%20unlock%20the%20full%20roadmap.%20Can%20we%20chat%3F";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !spend) return;
    
    setLoading(true);
    const strategy = await generateStrategySnippet(industry, spend);
    setResult(strategy);
    setLoading(false);
  };

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[#bf953f]/20 rounded-xl">
              <BrainCircuit className="text-[#bf953f]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">SA Strategy Preview</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Powered by Salt Intel (ZAR)</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">Industry / Niche (e.g. SA Logistics)</label>
              <input 
                type="text" 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. High-end Luxury Real Estate"
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#bf953f] transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">Current Monthly Ad Spend (ZAR)</label>
              <select 
                value={spend}
                onChange={(e) => setSpend(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#bf953f] transition-colors"
                required
              >
                <option value="">Select Spend Level</option>
                <option value="R25k - R100k">R25,000 - R100,000</option>
                <option value="R100k - R500k">R100,000 - R500,000</option>
                <option value="R500k+">R500,000+</option>
              </select>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-white hover:bg-gray-200 text-black font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : <><Send size={14} /> Get SA Strategy Fragment</>}
            </button>
          </form>
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-black to-[#bf953f]/5">
          {!result && !loading && (
            <div className="text-center">
              <p className="text-gray-500 italic font-light">
                "Enter your South African market metrics to receive a sample of our psychological growth angle. 
                We don't give away the engine, but we'll show you the spark."
              </p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center space-y-4">
              <Loader2 className="w-12 h-12 text-[#bf953f] animate-spin" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#bf953f]">Analyzing SA Market Psychology...</p>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#bf953f] font-bold">Local Psychological Trigger</span>
                <p className="text-xl font-medium mt-1 leading-snug">{result.psychology}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#bf953f] font-bold">The Salt Angle</span>
                <p className="text-gray-400 mt-1 leading-relaxed">{result.angle}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#bf953f] font-bold">ZAR Scalability Potential</span>
                <div className="flex items-center gap-3 mt-1">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#bf953f] w-[85%]"></div>
                  </div>
                  <span className="text-xs text-white font-bold">{result.potential}</span>
                </div>
              </div>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[10px] uppercase tracking-[0.3em] text-white border-b border-[#bf953f] pb-1 hover:text-[#bf953f] transition-all"
              >
                Unlock full roadmap
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIStrategyTool;
