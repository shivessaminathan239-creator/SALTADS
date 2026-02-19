
import React, { useState } from 'react';
import { generateStrategySnippet } from '../services/geminiService';
import { StrategyResult } from '../types';
import { BrainCircuit, Loader2, Send, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

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
    <div className="bg-white border border-black/5 rounded-3xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-black/5">
          <div className="flex items-center gap-6 mb-12">
            <div className="p-5 bg-black rounded-2xl">
              <BrainCircuit className="text-[#bf953f] w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-black serif italic">Growth Intelligence</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.5em] font-black mt-2">SALT PROPRIETARY CORE • v4.0</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <label className="block text-[11px] uppercase tracking-[0.4em] text-gray-500 font-black mb-4">Vertical / Niche Market</label>
              <input 
                type="text" 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. Luxury Real Estate, Private Wealth"
                className="w-full bg-gray-50 border border-black/[0.05] rounded-lg px-6 py-5 text-black focus:outline-none focus:border-[#bf953f] focus:ring-1 focus:ring-[#bf953f]/20 transition-all text-base tracking-wide placeholder:text-gray-300"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-[0.4em] text-gray-500 font-black mb-4">Target Growth Expenditure (ZAR)</label>
              <select 
                value={spend}
                onChange={(e) => setSpend(e.target.value)}
                className="w-full bg-gray-50 border border-black/[0.05] rounded-lg px-6 py-5 text-black focus:outline-none focus:border-[#bf953f] transition-all text-base tracking-wide appearance-none cursor-pointer"
                required
              >
                <option value="">Select Tier</option>
                <option value="R50k - R150k">R50,000 — R150,000</option>
                <option value="R150k - R500k">R150,000 — R500,000</option>
                <option value="R500k+">R500,000+</option>
              </select>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-6 bg-black hover:bg-[#bf953f] text-white font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 transition-all duration-500 disabled:opacity-50 group shadow-xl rounded-lg"
            >
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <><Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Initialize Intelligence Run</>}
            </button>
            <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-bold">Secure RSA Session Active</p>
          </form>
        </div>

        <div className="p-10 md:p-16 flex flex-col justify-center bg-gray-50/30 min-h-[600px]">
          {!result && !loading && (
            <div className="text-center space-y-8">
              <div className="w-20 h-20 bg-white shadow-lg rounded-3xl flex items-center justify-center mx-auto mb-8 border border-black/5">
                <ShieldCheck className="text-gray-100 w-10 h-10" />
              </div>
              <h4 className="serif text-2xl text-gray-300 italic">"Waiting for parameters..."</h4>
              <p className="text-sm text-gray-400 uppercase tracking-[0.2em] leading-loose max-w-xs mx-auto font-light">
                Our engine will identify the psychological gaps your competitors are missing.
              </p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="relative">
                <div className="w-24 h-24 border-t-2 border-[#bf953f] rounded-full animate-spin"></div>
              </div>
              <p className="text-[11px] uppercase tracking-[0.6em] text-[#bf953f] font-black animate-pulse">Scanning Market Sentiments...</p>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-12 animate-in fade-in slide-in-from-right-10 duration-1000">
              <div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#bf953f] font-black block mb-4">Leverage Point</span>
                <p className="text-3xl font-medium leading-tight serif italic text-black">{result.psychology}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#bf953f] font-black block mb-4">Narrative Shift</span>
                <p className="text-gray-600 text-lg leading-relaxed border-l-3 border-[#bf953f] pl-8 font-light italic">{result.angle}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#bf953f] font-black block mb-4">Market Velocity Projection</span>
                <div className="flex items-center gap-6 mt-4">
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-black w-[94%] transition-all duration-1000"></div>
                  </div>
                  <span className="text-sm text-black font-black whitespace-nowrap tracking-widest">{result.potential}</span>
                </div>
              </div>

              {result.sources && result.sources.length > 0 && (
                <div className="pt-6 border-t border-black/5">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black block mb-4">Market Intelligence Sources</span>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {result.sources.map((source, idx) => (
                      <a 
                        key={idx} 
                        href={source.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[9px] text-[#bf953f] hover:text-black transition-colors font-black uppercase tracking-widest"
                      >
                        <ExternalLink size={12} />
                        {source.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-gold-glow w-full flex items-center justify-between text-[11px] uppercase tracking-[0.5em] text-white bg-black px-10 py-6 rounded-lg hover:bg-[#bf953f] transition-all duration-500 group shadow-2xl"
              >
                MAKE MONEY
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIStrategyTool;
