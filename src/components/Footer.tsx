import React from 'react';
import { Phone, MapPin, Mail, Award, Clock, Heart, Shield } from 'lucide-react';

interface FooterProps {
  language: 'hi' | 'en';
  onNavigate: (section: string) => void;
}

export default function Footer({ language, onNavigate }: FooterProps) {
  const isEn = language === 'en';

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top section: Quick ambulance stats */}
      <div className="bg-emerald-950 text-emerald-100 py-6 px-4 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-extrabold text-base md:text-lg text-white">
              🚨 {isEn ? 'Emergency 24x7 Ambulance Dispatch' : 'आपातकालीन 24 घंटे एम्बुलेंस सेवा'}
            </h4>
            <p className="text-xs text-emerald-200">
              {isEn 
                ? '5 fully-equipped emergency ambulances on active duty in Gorakhpur. Call us now.' 
                : 'गोरखपुर क्षेत्र में तत्काल सहायता के लिए 5 पूरी तरह से सुसज्जित आपातकालीन एम्बुलेंस तैनात हैं।'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="tel:+917607781656" 
              className="bg-red-600 hover:bg-red-700 text-white font-black text-sm md:text-base px-6 py-3 rounded-xl transition shadow shadow-red-950 flex items-center gap-2"
              id="footer-ambulance-call"
            >
              <Phone className="h-5 w-5 animate-bounce" />
              <span>+91 7607781656</span>
            </a>
          </div>
        </div>
      </div>


      {/* Bottom copyright & disclaimer */}
      <div className="bg-slate-950 py-6 px-4 border-t border-slate-800 text-center text-[10px] md:text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Sun City Hospital Gorakhpur. All Rights Reserved.</p>
          <div className="flex gap-4 text-slate-400">
            <a href="#" className="hover:underline">{isEn ? 'Patient Privacy Policy' : 'गोपनीयता नीति'}</a>
            <span>•</span>
            <a href="#" className="hover:underline">{isEn ? 'Accessibility Compliance' : 'अभिगम्यता अनुपालन'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
