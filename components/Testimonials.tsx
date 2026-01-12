import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#F97316] font-bold tracking-widest text-sm uppercase mb-3">Client Feedback</h2>
          <h3 className="text-4xl font-bold text-[#0A2540]">What Global Leaders Say</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {[
            {
              quote: "ZhenTech's understanding of the Hong Kong financial landscape combined with their deep tech stack enabled us to launch our regional hub 6 months ahead of schedule.",
              author: "Mr. Lin Wei",
              title: "CTO, GBA Capital Group",
              zh: "震科技對香港金融環境的深刻理解，結合其深厚的技術實力，使我們的區域中心提前6個月投入運營。"
            },
            {
              quote: "The seamless integration of AI into our existing legacy systems was handled with absolute professionalism. A truly premium partner for any tech-focused enterprise.",
              author: "Sarah Cheng",
              title: "Director of Digital Strategy, Orient Global",
              zh: "將AI無縫集成到我們現有的遺留系統中展現了極高的專業素養。對於任何注重技術的企業來說，這都是一個真正的頂級合作夥伴。"
            }
          ].map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="text-[#F97316] flex mb-6">
                  {[1, 2, 3, 4, 5].map(s => (
                    <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl italic text-[#1F2937] leading-relaxed mb-6 font-medium">"{t.quote}"</p>
                <p className="text-sm text-gray-500 mb-8 border-l-4 border-[#6366F1] pl-4">{t.zh}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-100 border-2 border-[#F97316]"></div>
                <div>
                  <p className="font-bold text-[#0A2540]">{t.author}</p>
                  <p className="text-sm text-[#F97316]">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};