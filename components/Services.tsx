import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "FinTech Integration",
      titleZh: "金融科技整合",
      desc: "Advanced payment gateways, secure ledger systems, and digital wealth management platforms tailored for regional regulations.",
      img: "https://images.unsplash.com/photo-1551288049-bbb85212403a?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Enterprise AI Solutions",
      titleZh: "企業級人工智能",
      desc: "Optimizing operations with custom LLM integrations and predictive analytics to drive intelligent decision-making.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cloud Infrastructure",
      titleZh: "雲端基礎設施",
      desc: "Scalable, secure, and compliant cloud architectures designed for high-availability environments in mainland China and HK.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[#F97316] font-bold tracking-widest text-sm uppercase mb-3">Our Services</h2>
          <h3 className="text-4xl font-bold text-[#0A2540]">Comprehensive Technological Empowerment</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="bg-[#F9FAFB] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-gray-100">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold">{service.title}</h4>
                  <p className="text-sm text-white/80">{service.titleZh}</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <a href="#" className="inline-flex items-center text-[#F97316] font-bold hover:gap-3 transition-all">
                  Learn More <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};