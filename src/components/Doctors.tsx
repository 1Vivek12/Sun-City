import React, { useState } from 'react';
import { DOCTORS, DEPARTMENTS } from '../data';
import { Doctor } from '../types';
import { Search, UserCheck, Calendar, Star, GraduationCap, Languages, Sparkles } from 'lucide-react';

interface DoctorsProps {
  language: 'hi' | 'en';
  onBookWithDoctor?: (doctorId: string, deptId: string) => void;
}

export default function Doctors({ language, onBookWithDoctor }: DoctorsProps) {
  const isEn = language === 'en';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('');

  // Find department id for doctor to support quick booking
  const getDeptIdByName = (deptName: string) => {
    const d = DEPARTMENTS.find(dep => dep.name.toLowerCase() === deptName.toLowerCase());
    return d ? d.id : '';
  };

  const filteredDoctors = DOCTORS.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          doc.education.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDept = selectedDeptFilter === '' || doc.specialties.includes(selectedDeptFilter);
    return matchesSearch && matchesDept;
  });

  const getDeptImage = (deptName: string) => {
    const lower = deptName.toLowerCase();
    if (lower.includes('cardiology')) return '/cardiology-3d.png';
    if (lower.includes('neurology') || lower.includes('neurosurgery')) return '/neurology-3d.png';
    if (lower.includes('orthopaedic')) return '/ortho-3d.png';
    if (lower.includes('gastro')) return '/gastro-3d.png';
    if (lower.includes('chest') || lower.includes('tb')) return '/lungs-3d.png';
    return '/generic-3d.png';
  };

  return (
    <section id="doctors" className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
            {isEn ? 'MEET OUR CLINICAL LEADERS' : 'हमारे चिकित्सक विशेषज्ञ'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            {isEn ? 'Distinguished Specialists' : 'अनुभवी डॉक्टरों की टीम'}
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {isEn 
              ? 'Our team of world-class clinicians offers accurate diagnostics and compassionate healthcare to every resident of Gorakhpur.' 
              : 'हमारे विश्व स्तरीय डॉक्टर गोरखपुर के हर नागरिक को सटीक निदान और संवेदनशील स्वास्थ्य सेवा प्रदान करने के लिए प्रतिबद्ध हैं।'}
          </p>

          {/* Search and Filters */}
          <div className="pt-4 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            {/* Search Input */}
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                placeholder={isEn ? "Search doctor by name, specialty..." : "डॉक्टर का नाम, विशेषता खोजें..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-all"
                id="doc-search-input"
              />
            </div>

            {/* Department Filter Dropdown */}
            <select
              value={selectedDeptFilter}
              onChange={(e) => setSelectedDeptFilter(e.target.value)}
              className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-semibold text-slate-700"
              id="doc-dept-filter"
            >
              <option value="">{isEn ? "All Departments" : "सभी विभाग"}</option>
              {DEPARTMENTS.map(d => (
                <option key={d.id} value={d.name}>{isEn ? d.name : d.nameHindi}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="doctors-list-grid">
          {filteredDoctors.map((doc) => {
            const primaryDept = doc.specialties[0] || 'General Medicine';
            const deptId = getDeptIdByName(primaryDept);

            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                id={`doctor-card-${doc.id}`}
              >
                <div>
                  {/* Doctor Card Top / 3D Specialty Image filling the box */}
                  <div className="relative h-44 bg-slate-100 flex flex-col items-center justify-end overflow-hidden group-hover:shadow-inner">
                    {/* Full box 3D image */}
                    <img 
                      src="/ai_doctor_1784367882155.png" 
                      alt={doc.name} 
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                    />
                    
                    {/* Gradient overlay at bottom to make badge readable */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                    {/* Status badge */}
                    <span className="absolute top-3 right-3 px-2 py-1 rounded bg-emerald-500/95 text-white text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 z-10 shadow-md backdrop-blur-sm border border-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                      {isEn ? 'Consulting' : 'परामर्श जारी'}
                    </span>
                    
                    {/* Experience Badge */}
                    <div className="relative z-10 pb-3">
                      <div className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-yellow-300 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-xl">
                        <Star className="h-3 w-3 fill-yellow-300" />
                        <span>{doc.experience} {isEn ? 'Exp' : 'अनुभव'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info Body */}
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="font-extrabold text-base text-slate-800 group-hover:text-emerald-700 transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-600 mt-0.5">
                        {primaryDept}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      {/* Education info */}
                      <div className="flex items-start gap-2">
                        <GraduationCap className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2" title={doc.education}>
                          <strong>{isEn ? 'Edu:' : 'शिक्षा:'}</strong> {doc.education}
                        </span>
                      </div>

                      {/* Languages */}
                      <div className="flex items-center gap-2">
                        <Languages className="h-4 w-4 text-slate-400 shrink-0" />
                        <span>
                          <strong>{isEn ? 'Languages:' : 'भाषाएं:'}</strong> {doc.languages.join(', ')}
                        </span>
                      </div>

                      {/* Availability */}
                      <div className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <Calendar className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-slate-700 text-[10px] uppercase tracking-wider">
                            {isEn ? 'Weekly Hours' : 'साप्ताहिक समय'}
                          </p>
                          <p className="text-[11px] text-slate-500 mt-0.5">{doc.availability}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Doctor Card Footer Book Button */}
                <div className="p-5 pt-0">
                  {onBookWithDoctor ? (
                    <button
                      onClick={() => onBookWithDoctor(doc.id, deptId)}
                      className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs md:text-sm rounded-xl transition shadow-md hover:shadow-emerald-100 flex items-center justify-center gap-1.5"
                    >
                      <UserCheck className="h-4 w-4" />
                      <span>{isEn ? 'Request Appointment' : 'अपॉइंटमेंट बुक करें'}</span>
                    </button>
                  ) : (
                    <div className="text-center text-xs text-slate-400 italic">
                      {isEn ? 'Appointments available on-call' : 'फ़ोन पर अपॉइंटमेंट उपलब्ध'}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty search results state */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-600 font-bold">{isEn ? 'No specialists match your search criteria.' : 'आपकी खोज के अनुसार कोई डॉक्टर नहीं मिला।'}</p>
            <p className="text-xs text-slate-400 mt-1">{isEn ? 'Try changing the department filter or typing a simpler name.' : 'कृपया विभाग फ़िल्टर बदलें या केवल डॉक्टर का पहला नाम लिखें।'}</p>
          </div>
        )}
      </div>
    </section>
  );
}
