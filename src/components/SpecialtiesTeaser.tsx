import React from 'react';
import { ArrowRight, ArrowUpRight, Stethoscope, Heart, Brain, Bone } from 'lucide-react';

interface SpecialtiesTeaserProps {
  language: 'hi' | 'en';
  onNavigate: (section: string) => void;
}

export default function SpecialtiesTeaser({ language, onNavigate }: SpecialtiesTeaserProps) {
  const isEn = language === 'en';

  const specialtyTeasers = [
    {
      id: 'gen-med',
      icon: Stethoscope,
      titleEn: 'General Medicine',
      titleHi: 'सामान्य चिकित्सा',
      descEn: 'Comprehensive diagnostics, fever treatments, critical non-surgical patient care & consultations.',
      descHi: 'बुखार, संक्रमण, पुरानी बीमारियों का व्यापक निदान एवं गैर-सर्जिकल चिकित्सा देखभाल।'
    },
    {
      id: 'cardiology',
      icon: Heart,
      titleEn: 'Cardiology',
      titleHi: 'हृदय रोग विभाग',
      descEn: 'Expert cardiac screening, ECGs, high-precision blood pressure and heart failure management.',
      descHi: 'हृदय रोगों, दिल के दौरे, उच्च रक्तचाप का विशेषज्ञ डॉक्टरों द्वारा त्वरित निदान और इलाज।'
    },
    {
      id: 'neurology',
      icon: Brain,
      titleEn: 'Neurology & Neurosurgery',
      titleHi: 'न्यूरोलॉजी और न्यूरोसर्जरी',
      descEn: 'Advanced micro-surgical spine and brain treatments with specialized modular operational setup.',
      descHi: 'मस्तिष्क, रीढ़ और तंत्रिका विकारों के लिए मॉड्यूलर ओटी में सूक्ष्म सर्जिकल सटीक उपचार।'
    },
    {
      id: 'orthopaedics',
      icon: Bone,
      titleEn: 'Orthopaedics & Joint',
      titleHi: 'हड्डी और जोड़ रोग विभाग',
      descEn: 'High-end joint replacement, fracture reconstruction, spine surgeries and trauma care.',
      descHi: 'जोड़ प्रत्यारोपण, जटिल फ्रैक्चर पुनर्निर्माण, पीठ दर्द और आघात चोटों का आधुनिक उपचार।'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8" id="specialities-teaser">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{isEn ? 'CLINICAL SERVICES' : 'प्रमुख स्वास्थ्य सेवाएं'}</span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
          {isEn ? 'Core Speciality Departments' : 'विशेषज्ञ चिकित्सा विभाग'}
        </h2>
        <p className="text-xs md:text-sm text-slate-500">
          {isEn 
            ? 'Our hospital houses a comprehensive team of highly qualified clinicians, surgeons, and nurses.' 
            : 'हमारे अस्पताल में अनुभवी सर्जनों, योग्य डॉक्टरों और कुशल नर्सिंग स्टाफ की देखरेख में मरीजों का उपचार होता है।'}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {specialtyTeasers.map((dept) => {
          const Icon = dept.icon;
          return (
            <div 
              key={dept.id}
              className="bg-white p-5 rounded-2xl border border-slate-150 hover:border-emerald-300 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm md:text-base">{isEn ? dept.titleEn : dept.titleHi}</h3>
                <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed">{isEn ? dept.descEn : dept.descHi}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-emerald-600 hover:text-emerald-700">
                <button onClick={() => onNavigate('departments')} className="flex items-center gap-1 cursor-pointer">
                  <span>{isEn ? 'Explore Department' : 'अधिक जानकारी'}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <button
          onClick={() => onNavigate('departments')}
          className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition cursor-pointer"
        >
          <span>{isEn ? 'View All 19+ Specialities & Departments' : 'सभी १९+ विशेषज्ञ विभाग देखें'}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
