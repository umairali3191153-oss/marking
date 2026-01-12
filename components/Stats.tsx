import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A2540] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Clients Served", zh: "客戶服務" },
            { value: "1.2B", label: "Transactions Processed", zh: "處理交易額" },
            { value: "24/7", label: "System Uptime", zh: "系統運行時間" },
            { value: "120+", label: "Global Patents", zh: "全球專利" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 border-r border-white/10 last:border-0 group">
              <div className="text-4xl lg:text-6xl font-bold text-[#F97316] mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-lg font-medium tracking-wide">{stat.label}</div>
              <div className="text-xs text-white/50 uppercase mt-1 tracking-widest">{stat.zh}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};