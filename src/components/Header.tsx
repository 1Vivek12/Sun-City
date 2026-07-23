import React, { useState } from 'react';
import { Stethoscope, Phone, Shield, Globe, Award, ClipboardList, Youtube, Instagram, Facebook, Menu, X, ChevronRight } from 'lucide-react';

interface HeaderProps {
  language: 'hi' | 'en';
  setLanguage: (lang: 'hi' | 'en') => void;
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function Header({ language, setLanguage, onNavigate, activeSection }: HeaderProps) {
  const isEn = language === 'en';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'departments', labelEn: 'Departments', labelHi: 'विभाग' },
    { id: 'doctors', labelEn: 'Doctors', labelHi: 'डॉक्टर' },
    { id: 'director', labelEn: 'Our Director', labelHi: 'निदेशक (MD)' },
    { id: 'trust-diagnostic', labelEn: 'Trust Diagnostic', labelHi: 'ट्रस्ट डायग्नोस्टिक' },
    { id: 'pmjay', labelEn: 'PM-JAY (Ayushman)', labelHi: 'आयुष्मान योजना' },
    { id: 'infrastructure', labelEn: 'Infrastructure', labelHi: 'बुनियादी ढांचा' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      {/* Top emergency & language bar */}
      <div className="bg-emerald-900 text-emerald-50 px-2 sm:px-4 py-1.5 text-[10px] sm:text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-1.5 sm:gap-2">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-emerald-100">
            <span className="flex items-center gap-1 bg-emerald-950/50 px-2 py-0.5 sm:py-1 rounded-full border border-emerald-500/20 text-[10px] sm:text-xs">
              🚨 {isEn ? '24/7:' : '24/7:'} <strong className="text-white font-bold">7607781656, 8669062143</strong>
            </span>
            <span className="hidden sm:inline text-emerald-200">|</span>
            <span className="hidden sm:inline text-emerald-100">📍 {isEn ? 'Gorakhpur, UP' : 'गोरखपुर, यू.पी.'}</span>
            <span className="flex items-center gap-2 ml-1">
              <a href="https://www.youtube.com/@SunCityGorakhpur" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors"><Youtube className="h-4 w-4 sm:h-5 sm:w-5" /></a>
              <a href="https://www.instagram.com/suncitygkp?igsh=MXZpZnpta3Rsd21icA==" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors"><Instagram className="h-4 w-4 sm:h-5 sm:w-5" /></a>
              <a href="https://www.facebook.com/share/1Cm3nWcRDS/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors"><Facebook className="h-4 w-4 sm:h-5 sm:w-5" /></a>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden xs:flex items-center gap-1 text-yellow-300 text-[10px] sm:text-xs">
              <Award className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>{isEn ? 'PM-JAY Free Treatment' : 'आयुष्मान मुफ़्त इलाज'}</span>
            </span>
            
            <button
              onClick={() => setLanguage(isEn ? 'hi' : 'en')}
              className="flex items-center gap-1 bg-emerald-800 hover:bg-emerald-700 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-[10px] sm:text-xs transition border border-emerald-700"
              id="lang-toggle-btn"
            >
              <Globe className="h-3 w-3 text-emerald-300" />
              <span>{isEn ? 'हिंदी' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 md:py-4 flex justify-between items-center">
        {/* Brand Logo - Stunning Red Theme */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group"
          id="brand-logo"
        >
          {/* Glowing Red-Gold Ring Frame */}
          <div className="h-12 w-12 md:h-15 md:w-15 rounded-full p-[2.5px] bg-gradient-to-tr from-red-700 via-rose-500 to-red-500 shadow-[0_0_18px_rgba(225,29,72,0.35)] group-hover:shadow-[0_0_25px_rgba(225,29,72,0.55)] group-hover:scale-105 transition-all duration-300 shrink-0">
            <div className="h-full w-full bg-white rounded-full flex items-center justify-center p-0.5 overflow-hidden">
              <img src="/logo.png" alt="Sun City Hospital Logo" className="h-full w-full object-contain" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg md:text-2xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-600 to-rose-600 drop-shadow-sm font-sans">
                SUN CITY
              </h1>
              <span className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-extrabold text-[9px] md:text-xs px-2 py-0.5 rounded-full shadow-md shadow-red-500/30 border border-red-400/40 tracking-wider">
                HOSPITAL
              </span>
            </div>
            <p className="text-[9px] md:text-xs text-red-600 font-bold tracking-wide mt-1 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
              <span>{isEn ? 'Multi Speciality • Gorakhpur' : 'मल्टी स्पेशलिटी • गोरखपुर'}</span>
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
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

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Emergency Call button on mobile & desktop */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-emergency')); }}
            className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-3 md:px-5 py-1.5 md:py-2.5 rounded-full md:rounded-xl font-bold transition shadow-md shrink-0 text-xs md:text-base animate-pulse md:animate-none"
          >
            <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span className="hidden sm:inline">{isEn ? 'Emergency' : 'इमरजेंसी'}</span>
          </a>

          {/* Desktop-only Book Appointment button */}
          <button
            onClick={() => handleNavClick('booking')}
            className="hidden lg:flex bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-md hover:shadow-emerald-100 transition-all items-center gap-1.5"
            id="header-book-btn"
          >
            <ClipboardList className="h-4 w-4" />
            <span>{isEn ? 'Book Appointment' : 'अपॉइंटमेंट बुक करें'}</span>
          </button>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 lg:hidden border border-slate-200 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Mobile Nav Bar (All 6 Tabs Visible On Mobile) */}
      <div className="lg:hidden bg-slate-50/90 border-t border-slate-200/80 px-2 py-1.5 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-1.5 min-w-max px-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[11px] font-bold px-3 py-1 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-200'
                }`}
              >
                {isEn ? item.labelEn : item.labelHi}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dropdown Drawer Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-4 space-y-2 animate-fadeIn">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
            {isEn ? 'Hospital Navigation' : 'मुख्य मेनू'}
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{isEn ? item.labelEn : item.labelHi}</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('booking')}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-xl shadow flex items-center justify-center gap-1.5"
            >
              <ClipboardList className="h-4 w-4" />
              <span>{isEn ? 'Book Appointment' : 'अपॉइंटमेंट बुक करें'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
