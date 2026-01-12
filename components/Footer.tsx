import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051626] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#0A2540] border border-white/20 rounded flex items-center justify-center transform rotate-45">
                <span className="text-white font-bold text-lg -rotate-45">Z</span>
              </div>
              <span className="text-xl font-bold tracking-tight">ZHEN<span className="text-[#F97316]">TECH</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium technology and strategic consulting for the Greater China region. Empowering your vision with technical precision.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F97316] transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-white/40 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>

          {[
            { 
              title: "Company", 
              links: ["About Us", "Our Team", "Careers", "Contact"] 
            },
            { 
              title: "Services", 
              links: ["FinTech Solutions", "AI Consulting", "Cloud Architecture", "Cybersecurity"] 
            },
            { 
              title: "Resources", 
              links: ["Market Insights", "Success Stories", "API Documentation", "Support"] 
            }
          ].map((col, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-bold mb-6 text-white">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500">
            © 2025 ZhenTech Strategic Solutions Limited. All rights reserved. 
            <span className="ml-4 font-mono text-xs opacity-50 uppercase">Security Verified</span>
          </div>
          <div className="flex space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};