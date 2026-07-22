import React from 'react';
import { Home, Stethoscope, CalendarRange, FolderOpen, Heart } from 'lucide-react';

interface BottomNavigationProps {
  language: 'hi' | 'en';
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function BottomNavigation({ language, activeSection, onNavigate }: BottomNavigationProps) {
  const isEn = language === 'en';

  const tabs = [
    {
      id: 'hero',
      labelEn: 'Home',
      labelHi: 'मुख्य',
      icon: Home,
    },
    {
      id: 'doctors',
      labelEn: 'Doctors',
      labelHi: 'डॉक्टर',
      icon: Stethoscope,
    },
    {
      id: 'booking',
      labelEn: 'Book Slot',
      labelHi: 'बुकिंग',
      icon: CalendarRange,
    },
    {
      id: 'bookings',
      labelEn: 'My Bookings',
      labelHi: 'पर्ची',
      icon: FolderOpen,
    },
    {
      id: 'pmjay',
      labelEn: 'Ayushman',
      labelHi: 'आयुष्मान',
      icon: Heart,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/85 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] pb-safe">
      <div className="max-w-md mx-auto px-4 py-2 flex justify-between items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className="flex flex-col items-center justify-center flex-1 py-1 px-2 relative transition-all duration-200 active:scale-95"
              id={`mobile-tab-${tab.id}`}
            >
              <div
                className={`p-1.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-600 scale-110 shadow-sm border border-emerald-100/50'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[2]'}`} />
              </div>
              <span
                className={`text-[9px] font-bold mt-1 tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-emerald-700 font-extrabold' : 'text-slate-500'
                }`}
              >
                {isEn ? tab.labelEn : tab.labelHi}
              </span>

              {/* Active dot indicator */}
              {isActive && (
                <span className="absolute top-1 right-1/2 translate-x-3.5 h-1.5 w-1.5 rounded-full bg-emerald-600 border border-white" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
