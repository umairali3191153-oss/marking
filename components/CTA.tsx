import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[40px] overflow-hidden bg-[#0A2540] py-20 px-10 text-center shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-white">Ready to Redefine Your Digital Future?</h2>
            <p className="text-xl text-white/80">Join hundreds of industry leaders driving growth with ZhenTech. Our consultants are ready to build your bespoke solution.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <button className="bg-[#F97316] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#EA580C] hover:scale-105 transition-all shadow-xl">
                Get Started Today 立即開始
              </button>
              <button className="bg-white/10 border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
                Talk to Expert 諮詢專家
              </button>
            </div>
            <p className="text-sm text-white/50 pt-8 uppercase tracking-[0.3em]">Excellence • Integrity • Innovation</p>
          </div>
        </div>
      </div>
    </section>
  );
};