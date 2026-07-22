import React from 'react';
import { CheckCircle2, Award, Building2, ShieldCheck } from 'lucide-react';


interface LandmarkSpotlightProps {
  language: 'hi' | 'en';
}

export default function LandmarkSpotlight({ language }: LandmarkSpotlightProps) {
  const isEn = language === 'en';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" id="hospital-building-spotlight">
      <div className="bg-white rounded-3xl border border-slate-150 p-6 md:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Crisp Building Photo */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-100 shadow-md group">
            <img 
              src="/dr-abhay.png" 
              alt="Dr. Abhay Sharma" 
              className="w-full h-auto aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
              {isEn ? 'GORAKHPUR LANDMARK' : 'गोरखपुर का प्रमुख केंद्र'}
            </div>
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-white/10">
              {isEn ? 'Sun City Multi Speciality Hospital' : 'सन सिटी मल्टी स्पेशलिटी अस्पताल'}
            </div>
          </div>
          
          {/* Building Stats */}
          <div className="grid grid-cols-3 gap-2.5 text-center pt-1">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="block text-sm md:text-base font-extrabold text-slate-800">100+</span>
              <span className="text-[9px] md:text-[10px] text-slate-500 font-medium">{isEn ? 'Bed Capacity' : 'कुल बेड क्षमता'}</span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="block text-sm md:text-base font-extrabold text-slate-800">2023</span>
              <span className="text-[9px] md:text-[10px] text-slate-500 font-medium">{isEn ? 'Established Year' : 'स्थापना वर्ष'}</span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="block text-sm md:text-base font-extrabold text-slate-800">24/7</span>
              <span className="text-[9px] md:text-[10px] text-slate-500 font-medium">{isEn ? 'Oxygen Supply' : 'ऑक्सीजन प्लांट'}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Building Highlights */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
              {isEn ? 'OUR MODERN CLINICAL FACILITY' : 'हमारी आधुनिक चिकित्सकीय सुविधा'}
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              {isEn ? 'A World of Quality Care & Advanced Healing' : 'पूर्वांचल में सर्वोत्तम स्वास्थ्य सेवाओं का प्रतीक'}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {isEn 
                ? "Sun City Hospital stands as a premier medical center, offering top-tier clinical operations in Gorakhpur. Featuring dual heavy power backups, NABH hygiene control workflows, in-house pathology, and advanced diagnostics."
                : "सन सिटी हॉस्पिटल गोरखपुर और पूर्वांचल क्षेत्र में मरीजों के सफल इलाज के लिए जाना जाता है। हमारा परिसर सर्वोत्तम सुरक्षा, हाइजीन, इन-हाउस पैथोलॉजी, और डिजिटल जांच साधनों से सुसज्जित है।"}
            </p>
          </div>

          {/* Key Bullet List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs font-semibold text-slate-700">
                {isEn ? 'Super-Speciality Laparoscopic Surgery' : 'सुपर-स्पेशलिटी लेप्रोस्कोपिक सर्जरी'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs font-semibold text-slate-700">
                {isEn ? 'Advanced ICU & Pediatric NICU Support' : 'गहन आईसीयू और शिशु एनआईसीयू केयर'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs font-semibold text-slate-700">
                {isEn ? 'Trauma & Neurosurgery Specialists' : 'आघात चोट (Trauma) एवं न्यूरोसर्जरी'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs font-semibold text-slate-700">
                {isEn ? 'In-house digital X-Ray & Ultrasound' : 'एक्स-रे एवं अल्ट्रासाउंड लैब'}
              </span>
            </div>
          </div>

          {/* Quality Standards Badge */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-emerald-600 shrink-0" />
            <div>
              <h5 className="text-xs md:text-sm font-bold text-slate-800">
                {isEn ? 'Fully Verified Healthcare Quality' : 'पूर्णतः प्रमाणित स्वास्थ्य देखभाल'}
              </h5>
              <p className="text-[10px] md:text-xs text-slate-500 mt-0.5">
                {isEn 
                  ? 'Compliance with national sanitary guidelines and medical safety protocols.' 
                  : 'राष्ट्रीय स्वच्छता दिशानिर्देशों एवं चिकित्सा सुरक्षा नियमों का पूर्णतः पालन।'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
