import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#0A2540] rounded-lg flex items-center justify-center shadow-lg transform rotate-45">
            <span className="text-white font-bold text-xl -rotate-45">Z</span>
          </div>
          <span className={`text-2xl font-bold tracking-tight transition-colors ${
            isScrolled ? 'text-[#0A2540]' : 'text-white'
          }`}>
            ZHEN<span className="text-[#F97316]">TECH</span>
          </span>
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          {['Solutions', 'Services', 'Insights', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium hover:text-[#F97316] transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}
            >
              {item}
            </a>
          ))}
          <button className="bg-[#F97316] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#EA580C] transition-all shadow-lg">
            Connect Now
          </button>
          <div className={`flex items-center space-x-2 text-xs border-l pl-4 ${
            isScrolled ? 'border-gray-200 text-gray-500' : 'border-white/20 text-white/70'
          }`}>
            <span className="cursor-pointer hover:text-[#F97316]">EN</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-[#F97316]">繁</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-[#F97316]">简</span>
          </div>
        </nav>

        <div className="md:hidden">
           <svg className={`w-6 h-6 ${isScrolled ? 'text-[#0A2540]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
           </svg>
        </div>
      </div>
    </header>
  );
};