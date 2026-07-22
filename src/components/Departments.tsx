import React, { useState } from 'react';
import { DEPARTMENTS } from '../data';
import { Department } from '../types';
import * as LucideIcons from 'lucide-react';

interface DepartmentsProps {
  language: 'hi' | 'en';
  onSelectDepartment?: (deptId: string) => void;
  onBookWithDept?: (deptId: string) => void;
}

// Icon mapper helper
const renderIcon = (name: string) => {
  // Fallback to Activity if icon not found
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.Activity;
  return <IconComponent className="h-6 w-6" />;
};

export default function Departments({ language, onSelectDepartment, onBookWithDept }: DepartmentsProps) {
  const isEn = language === 'en';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  const filteredDepts = DEPARTMENTS.filter(dept => {
    const term = searchTerm.toLowerCase();
    const nameMatch = dept.name.toLowerCase().includes(term) || dept.nameHindi.includes(term);
    const symptomsMatch = dept.symptoms.some(s => s.toLowerCase().includes(term)) || dept.symptomsHindi.some(s => s.includes(term));
    return nameMatch || symptomsMatch;
  });

  return (
    <section id="departments" className="py-6 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-8 md:space-y-12">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 md:space-y-4">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
            {isEn ? 'OUR MEDICAL SPECIALITIES' : 'हमारे चिकित्सा विभाग'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            {isEn ? 'World Class Departments' : 'विश्व स्तरीय चिकित्सा विभाग'}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            {isEn 
              ? 'From General Medicine to state-of-the-art Neurosurgery and Cardiology, we host leading healthcare services under one roof in Gorakhpur.' 
              : 'सामान्य चिकित्सा से लेकर न्यूरोसर्जरी और कार्डियोलॉजी तक, हम गोरखपुर में एक ही छत के नीचे अग्रणी स्वास्थ्य सेवाएं प्रदान करते हैं।'}
          </p>

          {/* Search bar */}
          <div className="pt-2 max-w-lg mx-auto">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <LucideIcons.Search className="h-4 w-4 md:h-5 md:w-5" />
              </span>
              <input
                type="text"
                placeholder={isEn ? "Search department, disease or symptom..." : "विभाग, बीमारी या लक्षण खोजें..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 md:py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-xs md:text-sm font-medium transition-all"
                id="dept-search-input"
              />
            </div>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" id="departments-list-grid">
          {filteredDepts.map((dept) => {
            const isChosen = selectedDept?.id === dept.id;
            return (
              <div
                key={dept.id}
                className={`group p-4 md:p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                  isChosen
                    ? 'bg-emerald-900 border-emerald-900 text-white shadow-lg'
                    : 'bg-slate-50 hover:bg-white border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-slate-100'
                }`}
                onClick={() => setSelectedDept(isChosen ? null : dept)}
                id={`dept-card-${dept.id}`}
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`p-2.5 md:p-3 rounded-xl shrink-0 transition-colors ${
                      isChosen ? 'bg-emerald-800 text-white' : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                    }`}>
                      {renderIcon(dept.iconName)}
                    </div>
                    <div>
                      <h3 className={`font-extrabold text-sm sm:text-base md:text-lg leading-tight ${isChosen ? 'text-white' : 'text-slate-800 group-hover:text-emerald-700'}`}>
                        {isEn ? dept.name : dept.nameHindi}
                      </h3>
                      {isEn && (
                        <p className={`text-[9px] uppercase font-bold tracking-wide ${isChosen ? 'text-emerald-200' : 'text-slate-400'}`}>
                          {dept.nameHindi}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-[11px] md:text-xs mt-3 md:mt-4 leading-relaxed ${isChosen ? 'text-emerald-100' : 'text-slate-500'}`}>
                    {isEn ? dept.description : dept.descriptionHindi}
                  </p>

                  {/* Symptoms & Treatments details if selected (Accordion style) */}
                  {isChosen && (
                    <div className="mt-6 pt-6 border-t border-emerald-800/60 space-y-4 text-xs animate-fadeIn">
                      {dept.id === 'gynecology' && (
                        <div className="mb-4 rounded-xl overflow-hidden shadow-md h-32 md:h-48">
                          <img src="/ai_gynecology_1784367938468.png" alt="Gynecology Care" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-yellow-300 uppercase tracking-wide mb-2">
                          💡 {isEn ? 'Common Symptoms' : 'सामान्य लक्षण'}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {(isEn ? dept.symptoms : dept.symptomsHindi).map((sym, i) => (
                            <span key={i} className="bg-emerald-800 text-emerald-100 px-2 py-1 rounded">
                              {sym}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-teal-300 uppercase tracking-wide mb-2">
                          🛠️ {isEn ? 'Key Treatments & Therapies' : 'मुख्य उपचार और थेरेपी'}
                        </h4>
                        <ul className="list-disc pl-4 space-y-1 text-emerald-100">
                          {(isEn ? dept.treatments : dept.treatmentsHindi).map((tr, i) => (
                            <li key={i}>{tr}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Trigger buttons */}
                <div className="mt-6 flex items-center justify-between">
                  <span className={`text-[11px] font-bold tracking-wider uppercase ${isChosen ? 'text-yellow-300' : 'text-emerald-600 group-hover:underline'}`}>
                    {isChosen 
                      ? (isEn ? 'Click to collapse ↑' : 'बंद करने के लिए क्लिक करें ↑') 
                      : (isEn ? 'Symptoms & Treatments →' : 'लक्षण और उपचार देखें →')}
                  </span>
                  
                  {onBookWithDept && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookWithDept(dept.id);
                      }}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                        isChosen 
                          ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-300' 
                          : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-100'
                      }`}
                    >
                      {isEn ? 'Book Dept' : 'अपॉइंटमेंट'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic empty search handler */}
        {filteredDepts.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <LucideIcons.Inbox className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-bold">{isEn ? 'No departments match your query' : 'आपकी खोज के लिए कोई विभाग नहीं मिला'}</p>
            <p className="text-xs text-slate-400 mt-1">{isEn ? 'Try searching other medical terms like "Fever", "Heart", "Bone"' : 'कृपया अन्य शब्द जैसे "बुखार", "दिल", "हड्डी" खोजें।'}</p>
          </div>
        )}

        {/* Info box about unlisted specialists */}
        <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <LucideIcons.ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-base">
                {isEn ? 'Specialist On-Call Services Available' : 'विशेषज्ञ ऑन-कॉल सेवाएं उपलब्ध हैं'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                {isEn 
                  ? 'We also feature visiting neuro-surgeons, pediatric surgeons, cancer specialists, and anesthesiologists on-call for critical surgeries and emergency diagnostics 24×7.'
                  : 'हम महत्वपूर्ण सर्जरी और आपातकालीन निदान के लिए 24×7 ऑन-कॉल विजिटिंग न्यूरो-सर्जन, बाल रोग सर्जन, कैंसर विशेषज्ञों और एनेस्थेसियोलॉजिस्ट की सेवा भी प्रदान करते हैं।'}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const chatBtn = document.getElementById('ai-chat-trigger');
              if (chatBtn) chatBtn.click();
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-5 rounded-lg shrink-0 transition"
          >
            {isEn ? 'Inquire via AI Assistant' : 'एआई सहायक से पूछताछ करें'}
          </button>
        </div>

      </div>
    </section>
  );
}
