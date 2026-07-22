import React from 'react';
import { ShieldCheck, HelpCircle, FileText, CheckSquare, Info, Users, HeartHandshake } from 'lucide-react';

interface PmjayProps {
  language: 'hi' | 'en';
}

export default function Pmjay({ language }: PmjayProps) {
  const isEn = language === 'en';

  return (
    <section id="pmjay" className="py-10 md:py-16 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 flex flex-col items-center">
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 mb-2 inline-block max-w-[120px] md:max-w-[140px]">
            <img src="/ayushman-logo.png" alt="Ayushman Bharat PM-JAY Logo" className="w-full h-auto object-contain" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
            {isEn ? 'GOVERNMENT APPROVED CASHLESS SCHEME' : 'सरकारी स्वास्थ्य योजना सहायता'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            {isEn ? 'Ayushman Bharat (PM-JAY) Center' : 'आयुष्मान भारत (PM-JAY) मुफ्त इलाज केंद्र'}
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {isEn 
              ? 'Sun City Hospital is fully empanelled with Ayushman Bharat. Get up to ₹5 Lakhs free cashless treatment per family per year for secondary and tertiary hospitalization.' 
              : 'सन सिटी हॉस्पिटल आयुष्मान भारत योजना के तहत पूरी तरह से सूचीबद्ध है। प्रति परिवार प्रति वर्ष ₹5 लाख तक का पूर्णतः मुफ्त कैशलेस उपचार प्राप्त करें।'}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="pmjay-content-layout">
          
          {/* Column 1: Step-by-Step Guide */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-slate-800 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <span>{isEn ? 'How to avail Free Treatment at Sun City?' : 'सन सिटी में मुफ्त इलाज कैसे प्राप्त करें?'}</span>
            </h3>

            {/* Steps list */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="h-8 w-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shrink-0 text-xs">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">
                    {isEn ? 'Visit the PM-JAY Ayushman Helpdesk' : 'आयुष्मान हेल्पडेस्क पर आएं'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {isEn 
                      ? 'Our helpdesk is located near the main entrance lobby. Our dedicated Arogya Mitras will guide you immediately.' 
                      : 'हमारा समर्पित हेल्पडेस्क मुख्य रिसेप्शन लॉबी के पास स्थित है। आरोग्य मित्र आपकी त्वरित सहायता करेंगे।'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="h-8 w-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shrink-0 text-xs">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">
                    {isEn ? 'Submit Required Identification' : 'जरूरी दस्तावेज जमा करें'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {isEn 
                      ? 'Produce your Golden Card, Aadhaar Card, and Family Registry/Ration Card for instant eligibility check.' 
                      : 'तत्काल पात्रता जांच के लिए अपना आयुष्मान गोल्डन कार्ड, आधार कार्ड और राशन कार्ड जमा करें।'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="h-8 w-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shrink-0 text-xs">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">
                    {isEn ? 'Clinical Assessment & Diagnostics' : 'चिकित्सीय जांच और टेस्ट'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {isEn 
                      ? 'The patient is evaluated by a Senior Specialist to diagnose clinical needs and plan the surgical process.' 
                      : 'वरिष्ठ विशेषज्ञों द्वारा मरीज की जांच की जाती है ताकि आवश्यक सर्जरी या उपचार की योजना बनाई जा सके।'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="h-8 w-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shrink-0 text-xs">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">
                    {isEn ? '100% Cashless Admission' : '100% मुफ्त कैशलेस भर्ती'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {isEn 
                      ? 'Pre-authorization is processed in minutes. Admission, surgery, medicines, food, and ward stay are completely covered with ₹0 out-of-pocket expenses.' 
                      : 'पूर्व-प्राधिकरण प्रक्रिया मिनटों में हो जाती है। भर्ती, ऑपरेशन, दवाएं, भोजन और वार्ड में रहना पूरी तरह से मुफ्त है।'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Documents Required & Cashless Insurance TPA */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Required Documents list */}
            <div className="bg-emerald-900 text-white p-6 md:p-8 rounded-2xl border border-emerald-950 space-y-4 flex-1">
              <h3 className="text-base font-bold uppercase tracking-wider text-yellow-300 flex items-center gap-1.5">
                <FileText className="h-5 w-5" />
                <span>{isEn ? 'Documents Checklist' : 'जरूरी दस्तावेज सूची'}</span>
              </h3>
              <p className="text-xs text-emerald-100">
                {isEn ? 'Please keep original/photocopies of these documents ready before admission:' : 'भर्ती होने से पहले निम्नलिखित दस्तावेजों की मूल या छायाप्रति साथ रखें:'}
              </p>

              <ul className="space-y-3 pt-2 text-xs">
                <li className="flex items-center gap-2.5">
                  <CheckSquare className="h-4 w-4 text-yellow-400 shrink-0" />
                  <span>{isEn ? 'Ayushman Golden Card (e-Card)' : 'आयुष्मान गोल्डन कार्ड'}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckSquare className="h-4 w-4 text-yellow-400 shrink-0" />
                  <span>{isEn ? 'Aadhaar Card of the patient' : 'मरीज का आधार कार्ड'}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckSquare className="h-4 w-4 text-yellow-400 shrink-0" />
                  <span>{isEn ? 'Ration Card (with linked family names)' : 'राशन कार्ड (परिवार के नाम सहित)'}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckSquare className="h-4 w-4 text-yellow-400 shrink-0" />
                  <span>{isEn ? 'Active Mobile Number linked with Aadhaar' : 'आधार से लिंक मोबाइल नंबर'}</span>
                </li>
              </ul>

              <div className="pt-4 mt-4 border-t border-emerald-800 text-[11px] text-emerald-200">
                💡 {isEn ? 'Call our helpdesk line anytime for Golden Card generation questions: +91 8669062143' : 'गोल्डन कार्ड बनवाने या सहायता के लिए हेल्पडेस्क नंबर पर कॉल करें: +91 8669062143'}
              </div>
            </div>

            {/* Corporate Health Insurance TPA Info */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-4">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <HeartHandshake className="h-4 w-4 text-emerald-600" />
                <span>{isEn ? 'Cashless Health Insurance & TPAs' : 'कैशलेस बीमा और टीपीए कंपनियां'}</span>
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {isEn 
                  ? 'We support major Private Corporate Insurance & TPA networks. Enjoy hassle-free cashless hospitalization through Star Health, HDFC Ergo, ICICI Lombard, Niva Bupa, and more.'
                  : 'हम प्रमुख निजी स्वास्थ्य बीमा कंपनियों और टीपीए का समर्थन करते हैं। स्टार हेल्थ, एचडीएफसी एर्गो, आईसीआईसीआई लोम्बार्ड, निवा बूपा आदि के माध्यम से कैशलेस भर्ती का लाभ उठाएं।'}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
