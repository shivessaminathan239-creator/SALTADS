import React, { useState } from 'react';
import { generateStrategySnippet } from '../services/geminiService';
import { StrategyResult } from '../types';
import { BrainCircuit, Loader2, Send, ExternalLink, ShieldCheck } from 'lucide-react';

const AIStrategyTool: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [spend, setSpend] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StrategyResult | null>(null);

  const whatsappLink = "https://wa.me/27753060174?text=Hi%20Salt%20Team%2C%20I%20just%20used%20your%20AI%20Diagnostic%20Tool%20and%20I'm%20ready%20to%20review%20the%20full%20report.%20Can%20we%20connect%3F";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !spend) return;
    
    setLoading(true);
    const strategy = await generateStrategySnippet(industry, spend);
    setResult(strategy);
    setLoading(false);
  };

  return (
    <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="flex items-center gap-5 mb-10">
            <div className="p-4 bg-[#bf953f]/10 rounded-2xl border border-[#bf953f]/20">
              <BrainCircuit className="text-[#bf953f] w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white serif italic">Growth Diagnostic</h3>
              <p className="text-[9px] text-gray-500 uppercase tracking-[0.4em] font-black mt-1">SALT PROPRIETARY INTEL • v3.1</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black mb-3">Industry / Niche Vertical</label>
              <input 
                type="text" 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. Luxury Real Estate, SaaS for Enterprise, Private Healthcare"
                className="w-full bg-black border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-[#bf953f] transition-all text-sm tracking-wide placeholder:text-gray-700"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black mb-3">Allocated Monthly Media Spend (ZAR)</label>
              <select 
                value={spend}
                onChange={(e) => setSpend(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-[#bf953f] transition-all text-sm tracking-wide appearance-none"
                required
              >
                <option value="">Select Expenditure Level</option>
                <option value="R50k - R150k">R50,000 — R150,000</option>
                <option value="R150k - R500k">R150,000 — R500,000</option>
                <option value="R500k+">R500,000+</option>
              </select>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-5 bg-white hover:bg-gray-100 text-black font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 transition-all disabled:opacity-50 group"
            >
              {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <><Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Initialize Intelligence Run</>}
            </button>
            <p className="text-[9px] text-center text-gray-600 uppercase tracking-widest">Authenticated session required for full report.</p>
          </form>
        </div>

        <div className="p-8 md:p-14 flex flex-col justify-center bg-gradient-to-br from-black to-[#bf953f]/5 min-h-[500px]">
          {!result && !loading && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                <ShieldCheck className="text-gray-700 w-8 h-8" />
              </div>
              <h4 className="serif text-xl text-gray-400 italic">"Waiting for market parameters..."</h4>
              <p className="text-xs text-gray-600 uppercase tracking-widest leading-loose max-w-xs mx-auto">
                Inputs are processed through our proprietary SALT engine to identify psychological leverage points in the SA market.
              </p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 border-t-2 border-[#bf953f] rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-b-2 border-white/20 rounded-full animate-reverse-spin"></div>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#bf953f] font-black animate-pulse">Analyzing Market Dynamics...</p>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
              <div>
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#bf953f] font-black block mb-3">Psychological Leverage Point</span>
                <p className="text-2xl font-medium leading-tight serif italic">{result.psychology}</p>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#bf953f] font-black block mb-3">Strategic Narrative Shift</span>
                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-[#bf953f]/30 pl-6">{result.angle}</p>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#bf953f] font-black block mb-3">Projected Monthly Velocity</span>
                <div className="flex items-center gap-5 mt-2">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-right from-[#bf953f] to-[#fcf6ba] w-[92%]"></div>
                  </div>
                  <span className="text-xs text-white font-black whitespace-nowrap tracking-widest">{result.potential}</span>
                </div>
              </div>
              
              {result.sources && result.sources.length > 0 && (
                <div className="pt-6 border-t border-white/5">
                  <span className="text-[8px] uppercase tracking-[0.4em] text-gray-600 font-black block mb-3">Market Intelligence Citations</span>
                  <div className="space-y-2">
                    {result.sources.map((src, i) => (
                      <a 
                        key={i} 
                        href={src.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-[10px] text-gray-500 hover:text-[#bf953f] transition-colors py-1 group"
                      >
                        <span className="truncate pr-4">{src.title}</span>
                        <ExternalLink size={10} className="flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white bg-white/5 px-6 py-4 rounded-sm hover:bg-[#bf953f] hover:text-black transition-all group"
              >
                DEPLOY FULL ARCHITECTURE
                <div className="w-8 h-[1px] bg-current transition-all group-hover:w-12"></div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIStrategyTool;