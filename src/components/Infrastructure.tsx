import React from 'react';
import { Building, Award, Shield, CheckCircle, Cpu, Activity, Zap, HeartPulse } from 'lucide-react';

interface InfrastructureProps {
  language: 'hi' | 'en';
}

export default function Infrastructure({ language }: InfrastructureProps) {
  const isEn = language === 'en';

  const facilities = [
    {
      icon: Cpu,
      titleEn: 'Modular Operation Theatres',
      titleHi: 'मॉड्यूलर ऑपरेशन थिएटर',
      descEn: 'Equipped with class 100 laminar air flow, HEPA filters, and high-precision surgical pendants to prevent infections.',
      descHi: 'संक्रमण मुक्त सर्जरी सुनिश्चित करने के लिए हेपा फिल्टर्स और लैमिनार एयर फ्लो से सुसज्जित आधुनिक ऑपरेशन थिएटर।'
    },
    {
      icon: HeartPulse,
      titleEn: 'Advanced ICU & NICU',
      titleHi: 'आधुनिक आईसीयू और एनआईसीयू',
      descEn: 'State-of-the-art Neonatal and Adult Intensive Care Units with high-end monitors, ventilators, and dedicated specialists.',
      descHi: 'शिशु और वयस्क गहन चिकित्सा इकाइयां, जो उन्नत वेंटिलेटर, मॉनिटर और समर्पित विशेषज्ञों से लैस हैं।'
    },
    {
      icon: Zap,
      titleEn: '24/7 Trauma & Emergency',
      titleHi: '24/7 ट्रॉमा और आपातकालीन सेवा',
      descEn: 'Equipped to handle high-risk accidents, acute heart attacks, and trauma emergencies with dedicated ambulance services.',
      descHi: 'गंभीर दुर्घटनाओं, दिल का दौरा और आपातकालीन परिस्थितियों से निपटने के लिए सुसज्जित और एम्बुलेंस सेवाओं से लैस।'
    },
    {
      icon: Activity,
      titleEn: 'High-Tech Diagnostics & Lab',
      titleHi: 'हाई-टेक जांच प्रयोगशाला',
      descEn: 'In-house digital X-Ray, high-resolution Ultrasound (USG), pathology, and microbiology services with fast turnaround times.',
      descHi: 'अस्पताल के भीतर डिजिटल एक्स-रे, हाई-रिज़ॉल्यूशन अल्ट्रासाउंड (USG), पैथोलॉजी और माइक्रोबायोलॉजी जांच सुविधाएं।'
    }
  ];

  const highlights = [
    { labelEn: 'Total Beds Available', value: '100+', labelHi: 'कुल उपलब्ध बेड' },
    { labelEn: 'NICU Incubators', value: '10+', labelHi: 'एनआईसीयू इनक्यूबेटर्स' },
    { labelEn: 'Modular OTs', value: '3', labelHi: 'मॉड्यूलर ओटी' },
    { labelEn: 'PSA Oxygen Supply', value: '24/7', labelHi: 'ऑक्सीजन सप्लाई' }
  ];

  return (
    <section id="infrastructure" className="py-10 md:py-16 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
            {isEn ? 'WORLD CLASS CLINICAL INFRASTRUCTURE' : 'विश्वस्तरीय चिकित्सकीय बुनियादी ढांचा'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            {isEn ? 'Our Medical Facilities' : 'हमारी चिकित्सा सुविधाएं'}
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {isEn 
              ? 'Sun City Hospital is built with state-of-the-art infrastructure designed to deliver maximum patient comfort, hygiene, and high-precision clinical treatments in Gorakhpur.' 
              : 'सन सिटी हॉस्पिटल गोरखपुर में सर्वश्रेष्ठ स्वच्छता, मरीज की सुविधा और सटीक उपचार सुनिश्चित करने के लिए आधुनिक चिकित्सा उपकरणों और सुरक्षित बुनियादी ढांचे से लैस है।'}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" id="infra-stats-grid">
          {highlights.map((stat, idx) => (
            <div key={idx} className="bg-white p-5 md:p-6 rounded-2xl border border-slate-150/70 shadow-sm text-center">
              <span className="block text-2xl md:text-4xl font-extrabold text-emerald-600 mb-1">{stat.value}</span>
              <span className="text-xs md:text-sm font-semibold text-slate-500">{isEn ? stat.labelEn : stat.labelHi}</span>
            </div>
          ))}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="infra-content-layout">
          
          {/* Column 1: Core Systems Grid */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-slate-800 flex items-center gap-2">
              <Building className="h-5 w-5 text-emerald-600" />
              <span>{isEn ? 'Key Operational Departments' : 'मुख्य संचालित विभाग'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {facilities.map((fac, idx) => {
                const Icon = fac.icon;
                return (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3 hover:border-emerald-100 transition-colors flex flex-col justify-between">
                    <div>
                      <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm md:text-base">{isEn ? fac.titleEn : fac.titleHi}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{isEn ? fac.descEn : fac.descHi}</p>
                    </div>
                    {idx === 0 && (
                      <img src="/ai_ot_1784367900139.png" alt="Operation Theatre" className="w-full h-32 object-cover rounded-xl mt-3" />
                    )}
                    {idx === 1 && (
                      <img src="/ai_icu_1784367922531.png" alt="ICU" className="w-full h-32 object-cover rounded-xl mt-3" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Safety & Hygiene */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 md:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-xl" id="infra-safety-box">
            <div className="absolute top-0 right-0 h-40 w-40 bg-emerald-500/10 rounded-full blur-3xl -z-0" />
            
            <div className="space-y-6 z-10">
              <div className="flex items-center gap-2 text-emerald-400">
                <Shield className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">{isEn ? 'Safety & Quality Standards' : 'सुरक्षा और गुणवत्ता मानक'}</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                {isEn ? 'NABH Compliant Infection Control Systems' : 'संक्रमण नियंत्रण के लिए विशेष सुरक्षा व्यवस्था'}
              </h3>
              
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {isEn 
                  ? 'We practice zero-tolerance patient safety standards. Our hospital features dedicated isolation rooms, fully managed fire systems, round-the-clock power backup via silent generator sets, and regular sterilizations.' 
                  : 'मरीजों की सुरक्षा हमारे लिए सर्वोपरि है। सन सिटी हॉस्पिटल में विशेष आइसोलेशन रूम, अग्निशमन प्रणाली, मूक जनरेटर द्वारा २४ घंटे पावर बैकअप और नियमित जीवाणुनाशक फॉगिंग की सुविधा उपलब्ध है।'}
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-700/60">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{isEn ? 'In-house dedicated PSA Oxygen Plant' : 'स्वयं का समर्पित पीएसए ऑक्सीजन प्लांट'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{isEn ? '24/7 power backup with dual heavy generators' : 'दोहरे भारी जनरेटर के साथ २४ घंटे बिजली बैकअप'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{isEn ? 'NABH guidance compliant clinical hygiene' : 'सर्वोच्च अस्पताल स्वच्छता मानदंडों का अनुपालन'}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 bg-emerald-950/40 p-3.5 rounded-2xl border border-emerald-500/10 z-10">
              <Award className="h-8 w-8 text-yellow-400 shrink-0" />
              <div>
                <h5 className="font-bold text-xs text-emerald-300">{isEn ? 'NABH Accrediated Standards' : 'NABH मानक गाइडलाइन्स'}</h5>
                <p className="text-[10px] text-slate-300 mt-0.5">{isEn ? 'Ensuring highest standard clinical ethics and quality care.' : 'सर्वश्रेष्ठ स्वास्थ्य सेवा और उच्च स्तरीय उपचार गुणवत्ता।'}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
