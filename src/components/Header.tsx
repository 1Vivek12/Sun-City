import React from 'react';
import { Stethoscope, Phone, Shield, Globe, Award, ClipboardList } from 'lucide-react';

interface HeaderProps {
  language: 'hi' | 'en';
  setLanguage: (lang: 'hi' | 'en') => void;
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function Header({ language, setLanguage, onNavigate, activeSection }: HeaderProps) {
  const isEn = language === 'en';

  const navItems = [
    { id: 'departments', labelEn: 'Departments', labelHi: 'विभाग' },
    { id: 'doctors', labelEn: 'Doctors', labelHi: 'डॉक्टर' },
    { id: 'director', labelEn: 'Our Director', labelHi: 'निदेशक (MD)' },
    { id: 'trust-diagnostic', labelEn: 'Trust Diagnostic', labelHi: 'ट्रस्ट डायग्नोस्टिक' },
    { id: 'pmjay', labelEn: 'PM-JAY (Ayushman)', labelHi: 'आयुष्मान योजना' },
    { id: 'infrastructure', labelEn: 'Infrastructure', labelHi: 'बुनियादी ढांचा' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      {/* Top emergency & language bar */}
      <div className="hidden md:block bg-emerald-900 text-emerald-50 px-4 py-2 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-emerald-100">
            <span className="flex items-center gap-1.5 bg-emerald-950/40 px-2 py-1 rounded-full border border-emerald-500/20 shadow-inner">
              🚨 {isEn ? '24/7 Emergency:' : '24/7 आपातकालीन सेवा:'} <strong className="text-white">7607781656, 8669062143</strong>
            </span>
            <span className="hidden md:inline text-emerald-200">|</span>
            <span className="hidden md:inline text-emerald-100">📍 {isEn ? 'Gorakhpur, Uttar Pradesh' : 'गोरखपुर, उत्तर प्रदेश'}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-yellow-300">
              <Award className="h-3.5 w-3.5" />
              <span>{isEn ? 'PM-JAY Free Cashless Treatment' : 'आयुष्मान भारत कैशलेस इलाज'}</span>
            </span>
            
            <button
              onClick={() => setLanguage(isEn ? 'hi' : 'en')}
              className="flex items-center gap-1 bg-emerald-800 hover:bg-emerald-700 px-2.5 py-1 rounded text-xs transition border border-emerald-700"
              id="lang-toggle-btn"
            >
              <Globe className="h-3 w-3 text-emerald-300" />
              <span>{isEn ? 'हिंदी' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3.5 cursor-pointer group"
          id="brand-logo"
        >
          <div className="h-12 w-12 md:h-14 md:w-14 bg-white rounded-full flex items-center justify-center shadow-md border border-emerald-100 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
            <img src="/logo.png" alt="Sun City Hospital Logo" className="h-full w-full object-contain p-0.5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg md:text-2xl font-bold text-slate-800 tracking-tight leading-none">
                SUN CITY
              </h1>
              <span className="text-emerald-600 font-extrabold text-xs md:text-sm px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-100">
                HOSPITAL
              </span>
            </div>
            <p className="text-[10px] md:text-xs text-slate-500 font-medium tracking-wide mt-0.5">
              {isEn ? 'Multi Speciality • Gorakhpur' : 'मल्टी स्पेशलिटी • गोरखपुर'}
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                  isActive ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-600'
                }`}
                id={`nav-${item.id}`}
              >
                {isEn ? item.labelEn : item.labelHi}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick CTA */}
        <div className="flex items-center gap-2">
          {/* Language toggle on mobile header directly for easy accessibility */}
          <button
            onClick={() => setLanguage(isEn ? 'hi' : 'en')}
            className="flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100/80 text-emerald-800 px-2.5 py-1.5 rounded-lg text-xs transition lg:hidden font-extrabold"
            id="mobile-lang-toggle"
          >
            <Globe className="h-3.5 w-3.5 text-emerald-600" />
            <span>{isEn ? 'हिंदी' : 'EN'}</span>
          </button>

          {/* Call button on mobile */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-emergency')); }}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 md:px-5 py-2 md:py-2.5 rounded-full md:rounded-xl font-bold transition shadow-lg shadow-red-950 shrink-0 text-sm md:text-base animate-pulse md:animate-none"
          >
            <Phone className="h-4 w-4 animate-pulse" />
          </a>

          {/* Desktop-only Book Appointment button */}
          <button
            onClick={() => onNavigate('booking')}
            className="hidden lg:flex bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-md hover:shadow-emerald-100 transition-all items-center gap-1.5"
            id="header-book-btn"
          >
            <ClipboardList className="h-4 w-4" />
            <span>{isEn ? 'Book Appointment' : 'अपॉइंटमेंट बुक करें'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
