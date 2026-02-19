
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="bg-[#bf953f] p-12 md:p-24 rounded-2xl flex flex-col items-center text-center overflow-hidden relative shadow-2xl">
      {/* Decorative Text */}
      <div className="absolute top-0 left-0 w-full opacity-5 font-black text-black text-9xl leading-none pointer-events-none whitespace-nowrap overflow-hidden">
        ELITE GROWTH ELITE GROWTH ELITE GROWTH
      </div>
      
      <div className="relative z-10">
        <h2 className="serif text-white text-4xl md:text-6xl font-black mb-8 italic drop-shadow-lg">
          "We are the salt of the earth."
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-white text-xl font-medium tracking-tight">
            Salt does not compete with average agencies. We compete with inefficiency, guesswork, and empty promises.
          </p>
          
          <div className="h-[2px] w-24 bg-white/50 mx-auto"></div>
          
          <p className="text-white text-lg font-bold uppercase tracking-widest">
            We are builders. We are operators. We are growth specialists.
          </p>
          
          <p className="text-white/80 text-sm max-w-xl mx-auto leading-relaxed font-light">
            At this stage, Salt is Selective, Premium, and Unignorable. We target whales, not bargain hunters. 
            If the business doesn't grow, we don't win.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
