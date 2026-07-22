import React from 'react';
import { Clock, MapPin } from 'lucide-react';

interface OperationalHoursProps {
  language: 'hi' | 'en';
  onNavigate: (section: string) => void;
}

export default function OperationalHours({ language, onNavigate }: OperationalHoursProps) {
  const isEn = language === 'en';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" id="hospital-hours-contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Timetable Box */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-150 p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-slate-800 flex items-center gap-2">
              <Clock className="h-5 w-5 text-emerald-600" />
              <span>{isEn ? 'Hospital Operational Timetable' : 'अस्पताल के संचालन का समय'}</span>
            </h3>
            <p className="text-xs text-slate-500">
              {isEn 
                ? 'We maintain regular OPD sessions and emergency care units daily to support patients.'
                : 'हम रोगियों की सहायता के लिए दैनिक नियमित ओपीडी सत्र और चौबीसों घंटे आपातकालीन सेवाएं संचालित करते हैं।'}
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-xs md:text-sm font-bold text-slate-700">{isEn ? 'Emergency Services' : 'आपातकालीन सेवाएं (Emergency)'}</span>
                <span className="text-xs font-extrabold text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-wider">{isEn ? '24 Hours / 7 Days' : '२४ घंटे संचालित'}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-xs md:text-sm font-semibold text-slate-600">{isEn ? 'OPD Consultations (Mon-Sat)' : 'ओपीडी परामर्श (सोम-शनि)'}</span>
                <span className="text-xs md:text-sm font-bold text-slate-800">09:00 AM - 02:00 PM , 05:00 PM - 08:00 PM</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-xs md:text-sm font-semibold text-slate-600">{isEn ? 'In-house Lab Diagnostics' : 'पैथोलॉजी एवं जांच प्रयोगशाला'}</span>
                <span className="text-xs md:text-sm font-bold text-slate-800">08:00 AM - 09:00 PM ({isEn ? 'Emergency 24/7' : 'आपातकाल में २४ घंटे'})</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-xs md:text-sm font-semibold text-slate-600">{isEn ? 'In-patient Visiting Hours' : 'मरीजों से मिलने का समय'}</span>
                <span className="text-xs md:text-sm font-bold text-slate-800">04:00 PM - 06:00 PM ({isEn ? 'Daily' : 'दैनिक'})</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400">
            {isEn 
              ? '*Please bring your existing patient records and prescription details on your visit.' 
              : '*कृपया अस्पताल आने पर अपने पुराने पर्चे, रिपोर्ट और मरीज का रिकॉर्ड साथ लाएं।'}
          </div>
        </div>

        {/* Map / Directions Box */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 md:p-8 rounded-3xl flex flex-col justify-between shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 h-40 w-40 bg-emerald-500/10 rounded-full blur-3xl -z-0" />
          
          <div className="space-y-6 z-10">
            <div className="flex items-center gap-2 text-emerald-400">
              <MapPin className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">{isEn ? 'LANDMARK & DIRECTIONS' : 'पता और दिशा निर्देश'}</span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              {isEn ? 'Located in Heart of Gorakhpur' : 'गोरखपुर के केंद्र में स्थित परिसर'}
            </h3>
            
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
              {isEn 
                ? "Sun City Hospital is located at a prominent location with easy access for ambulances, public transport, and patients from all across Purvanchal." 
                : "सन सिटी हॉस्पिटल आसानी से सुलभ स्थान पर स्थित है, जहां एम्बुलेंस, सार्वजनिक परिवहन और पूरे पूर्वांचल से आने वाले मरीजों के लिए पहुंचना बेहद सुगम है।"}
            </p>

            <div className="space-y-3 pt-2 border-t border-slate-700/60">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{isEn ? 'HOSPITAL ADDRESS' : 'अस्पताल का मुख्य पता'}</p>
                <a 
                  href="https://share.google/YcWbBZ4XXarzoGzt7" 
                  target="_blank" 
                  rel="noreferrer"
                  className="block group mt-1"
                >
                  <p className="text-xs md:text-sm text-slate-100 font-medium group-hover:text-emerald-300 transition-colors">
                    {isEn ? 'NH-28, Near Padleganj Police Chowki, Gorakhpur 273008' : 'एन. एच. - 28, निकट पैडलेगंज पुलिस चौकी, गोरखपुर 273008'}
                  </p>
                  <p className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MapPin className="h-3 w-3" /> {isEn ? 'View on Google Maps' : 'गूगल मैप्स पर देखें'}
                  </p>
                </a>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{isEn ? 'GET PHONE ASSISTANCE' : 'दूरभाष संपर्क सूत्र'}</p>
                <p className="text-xs md:text-sm text-slate-100 font-bold mt-1 flex flex-col gap-1">
                  <span>+91 7607781656</span>
                  <span>+91 8669062143</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between bg-emerald-950/40 p-3.5 rounded-2xl border border-emerald-500/10 z-10">
            <div className="space-y-0.5">
              <h5 className="font-bold text-xs text-emerald-300">{isEn ? 'Planning a Visit?' : 'अस्पताल आने की योजना?'}</h5>
              <p className="text-[10px] text-slate-300">{isEn ? 'Register your slots online to skip queue.' : 'लाइनों से बचने के लिए अभी अपॉइंटमेंट बुक करें।'}</p>
            </div>
            <button
              onClick={() => onNavigate('booking')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold px-3 py-2 rounded-lg transition cursor-pointer"
            >
              {isEn ? 'Book Slot' : 'स्लॉट बुक करें'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
