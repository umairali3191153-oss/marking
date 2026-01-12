import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 gradient-primary z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366F1] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F97316] rounded-full blur-[120px] opacity-10 translate-y-1/4 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <span className="w-2 h-2 bg-[#F97316] rounded-full animate-ping"></span>
            <span className="text-sm font-medium tracking-wide">TRUSTED BY 500+ HK & CHINA ENTERPRISES</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Empowering <span className="text-[#F97316]">Global</span> Innovation via <span className="italic">ZhenTech</span>.
          </h1>
          
          <p className="text-xl text-white/80 max-w-xl leading-relaxed">
            Revolutionizing the digital landscape through premium fintech integration and bespoke enterprise solutions for the modern Asian market.
            <br/><span className="text-sm mt-4 block font-light opacity-70">領先的數字轉型專家，助您跨越技術邊界，實現商業卓越。</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#F97316] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#EA580C] hover:scale-105 transition-all shadow-xl">
              Our Solutions 探索方案
            </button>
            <button className="bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
              Watch Visionary 觀看願景
            </button>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative z-20 bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-1">
                {[1, 2, 3].map(i => <div key={i} className="w-3 h-3 rounded-full bg-white/20"></div>)}
              </div>
              <span className="text-xs text-white/50 font-mono uppercase tracking-widest">Enterprise Hub Alpha</span>
            </div>
            <div className="space-y-6">
              <div className="h-4 w-3/4 bg-white/10 rounded"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-[#6366F1]/20 rounded-xl border border-[#6366F1]/30 flex flex-col justify-center p-4">
                  <span className="text-[#6366F1] text-2xl font-bold">+128%</span>
                  <span className="text-white/60 text-xs">MARKET SCALE</span>
                </div>
                <div className="h-24 bg-white/5 rounded-xl border border-white/10 flex flex-col justify-center p-4">
                  <span className="text-white text-2xl font-bold">2.4ms</span>
                  <span className="text-white/60 text-xs">LATENCY HUB</span>
                </div>
              </div>
              <div className="h-32 bg-white/5 rounded-xl border border-white/10 p-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/70 uppercase tracking-widest">Global Reach</span>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border border-gray-800 bg-gray-600"></div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full">
                    <div className="w-2/3 bg-[#F97316] h-full rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#6366F1] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#F97316] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </section>
  );
};