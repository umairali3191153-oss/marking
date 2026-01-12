import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-[#F97316] font-bold tracking-widest text-sm uppercase mb-3">About ZhenTech</h2>
          <h3 className="text-4xl font-bold text-[#0A2540] leading-tight">
            Bridging Excellence Between Tradition and Tomorrow.
          </h3>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Founded in the heart of Hong Kong's financial district, ZhenTech is more than just a technology provider. We are catalysts for change, helping traditional industries in the Greater Bay Area navigate the complexities of the digital age with confidence and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Strategic Integrity",
              desc: "We uphold the highest standards of transparency and ethics in every partnership, ensuring long-term mutual growth.",
              icon: "🛡️",
              titleZh: "戰略誠信"
            },
            {
              title: "Innovative Spirit",
              desc: "Constant exploration of emerging technologies like AI and Web3 to give our clients a competitive edge in Asia.",
              icon: "💡",
              titleZh: "創新精神"
            },
            {
              title: "Global-Local Synergy",
              desc: "Leveraging international best practices while maintaining deep-rooted understanding of local market nuances.",
              icon: "🌏",
              titleZh: "全球本土協同"
            }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#6366F1]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h4 className="text-xl font-bold text-[#0A2540] mb-1">{item.title}</h4>
              <p className="text-sm text-[#F97316] font-semibold mb-4">{item.titleZh}</p>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};