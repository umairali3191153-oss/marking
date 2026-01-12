import React, { useState } from 'react';

export const Products: React.FC = () => {
  const categories = ["All Solutions", "FinTech", "AI Tools", "Cloud"];
  const [activeTab, setActiveTab] = useState("All Solutions");

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[#F97316] font-bold tracking-widest text-sm uppercase mb-3">Our Solutions</h2>
            <h3 className="text-4xl font-bold text-[#0A2540] leading-tight">Digital Ecosystems for the modern Enterprise.</h3>
          </div>
          <div className="flex space-x-2 bg-gray-100 p-1.5 rounded-xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === cat ? 'bg-[#0A2540] text-white shadow-md' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="group relative overflow-hidden rounded-3xl border border-gray-100 hover:border-[#F97316]/50 transition-colors p-2 bg-[#F9FAFB]">
              <div className="relative aspect-video overflow-hidden rounded-2xl mb-6">
                 <img src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80&sig=${i}`} alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute top-4 left-4 bg-[#0A2540]/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#F97316]">PREMIUM</div>
              </div>
              <div className="px-4 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#6366F1] uppercase tracking-widest">Platform v4.2</span>
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-[10px] text-gray-400">STABLE</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#0A2540] mb-2">ZhenCore Nexus Solution</h4>
                <p className="text-gray-500 text-sm mb-6">Unified dashboard for cross-border asset management and intelligent reporting.</p>
                <button className="w-full py-3 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all">
                  Request Demo 申請演示
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};