import React from 'react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-[#F9FAFB] overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#6366F1]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 border-8 border-white rounded-2xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=100" alt="Trust" className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-[#0A2540] p-8 rounded-2xl shadow-xl text-white max-w-[240px]">
            <p className="text-3xl font-bold mb-1 text-[#F97316]">15+</p>
            <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Years of Market Expertise in Greater China</p>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-8">
          <div>
            <h2 className="text-[#F97316] font-bold tracking-widest text-sm uppercase mb-3">Why Partner With Us</h2>
            <h3 className="text-4xl font-bold text-[#0A2540] mb-6">Unrivaled Precision, Unmatched Trust.</h3>
            <p className="text-lg text-gray-600">
              We understand that in the financial and tech sectors, trust is the only currency that matters. Our approach blends technical rigor with a human touch.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { 
                title: "Regulatory Excellence", 
                content: "Deep expertise in HKMA, SFC, and mainland compliance frameworks.",
                titleZh: "合規卓越"
              },
              { 
                title: "24/7 Strategic Support", 
                content: "Local support teams across HK, Shenzhen, and Shanghai ensuring zero downtime.",
                titleZh: "全天候戰略支持"
              },
              { 
                title: "Scalable Innovation", 
                content: "Bespoke architectures that grow with your business across borders.",
                titleZh: "可擴展創新"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316]/5 flex items-center justify-center border border-[#F97316]/10">
                  <svg className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0A2540]">{item.title} <span className="text-sm font-normal text-gray-400 ml-2">{item.titleZh}</span></h4>
                  <p className="text-gray-600 mt-1">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};