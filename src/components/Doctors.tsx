import React, { useState } from 'react';
import { DOCTORS, DEPARTMENTS } from '../data';
import { Doctor } from '../types';
import { Search, UserCheck, Calendar, Star, GraduationCap, Languages, Sparkles, Stethoscope, ChevronDown } from 'lucide-react';

interface DoctorsProps {
  language: 'hi' | 'en';
  onBookWithDoctor?: (doctorId: string, deptId: string) => void;
}

/* ── Department → gradient & accent color map ── */
const DEPT_STYLES: Record<string, { gradient: string; accent: string; icon: string }> = {
  'Neurology / Neurosurgery':    { gradient: 'from-violet-600 via-purple-500 to-indigo-600', accent: 'text-violet-600 bg-violet-50 border-violet-200', icon: '🧠' },
  'General & Laparoscopic Surgery': { gradient: 'from-sky-600 via-blue-500 to-cyan-500', accent: 'text-sky-600 bg-sky-50 border-sky-200', icon: '🔬' },
  'Orthopedics':                 { gradient: 'from-amber-500 via-orange-500 to-red-500', accent: 'text-amber-600 bg-amber-50 border-amber-200', icon: '🦴' },
  'Anaesthesia':                 { gradient: 'from-teal-500 via-emerald-500 to-green-500', accent: 'text-teal-600 bg-teal-50 border-teal-200', icon: '💉' },
  'Pediatric Surgery':           { gradient: 'from-pink-500 via-rose-400 to-red-400', accent: 'text-pink-600 bg-pink-50 border-pink-200', icon: '👶' },
  'Urology':                     { gradient: 'from-blue-600 via-indigo-500 to-violet-500', accent: 'text-blue-600 bg-blue-50 border-blue-200', icon: '💧' },
  'Gynecology & Obstetrics':     { gradient: 'from-rose-500 via-pink-500 to-fuchsia-500', accent: 'text-rose-600 bg-rose-50 border-rose-200', icon: '🩺' },
  'Cardiology':                  { gradient: 'from-red-500 via-rose-500 to-pink-500', accent: 'text-red-600 bg-red-50 border-red-200', icon: '❤️' },
  'Nephrology':                  { gradient: 'from-emerald-600 via-teal-500 to-cyan-500', accent: 'text-emerald-600 bg-emerald-50 border-emerald-200', icon: '🫘' },
  'ENT (Ear, Nose & Throat)':   { gradient: 'from-cyan-500 via-sky-500 to-blue-500', accent: 'text-cyan-600 bg-cyan-50 border-cyan-200', icon: '👂' },
  'Medicine':                    { gradient: 'from-slate-600 via-gray-500 to-zinc-500', accent: 'text-slate-600 bg-slate-50 border-slate-200', icon: '💊' },
  'Pediatrics':                  { gradient: 'from-orange-400 via-amber-400 to-yellow-400', accent: 'text-orange-600 bg-orange-50 border-orange-200', icon: '🧒' },
  'Plastic Surgery':             { gradient: 'from-fuchsia-500 via-purple-500 to-violet-500', accent: 'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200', icon: '✨' },
  'Ayurvedic':                   { gradient: 'from-lime-500 via-green-500 to-emerald-500', accent: 'text-lime-600 bg-lime-50 border-lime-200', icon: '🌿' },
  'Physiotherapy':               { gradient: 'from-sky-400 via-cyan-400 to-teal-400', accent: 'text-sky-600 bg-sky-50 border-sky-200', icon: '🏃' },
  'Dermatology':                 { gradient: 'from-yellow-400 via-amber-400 to-orange-400', accent: 'text-yellow-600 bg-yellow-50 border-yellow-200', icon: '🧴' },
};

const DEFAULT_STYLE = { gradient: 'from-emerald-500 via-teal-500 to-cyan-500', accent: 'text-emerald-600 bg-emerald-50 border-emerald-200', icon: '🩺' };

function getInitials(name: string) {
  // remove "Dr." prefix then grab first letter of each remaining word
  const parts = name.replace(/^Dr\.?\s*/i, '').split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return parts[0]?.substring(0, 2).toUpperCase() || 'DR';
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

  // Get unique specialties for the filter dropdown
  const allSpecialties = Array.from(new Set(DOCTORS.flatMap(d => d.specialties)));

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
              ? `Our team of ${DOCTORS.length}+ world-class clinicians across ${DEPARTMENTS.length} departments offers accurate diagnostics and compassionate healthcare.` 
              : `${DEPARTMENTS.length} विभागों में ${DOCTORS.length}+ विश्व स्तरीय डॉक्टर सटीक निदान और संवेदनशील स्वास्थ्य सेवा प्रदान करते हैं।`}
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
              {allSpecialties.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Doctor Count Badge */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 rounded-full text-xs font-bold text-slate-600">
            <Stethoscope className="h-3.5 w-3.5" />
            {isEn ? `Showing ${filteredDoctors.length} of ${DOCTORS.length} doctors` : `${DOCTORS.length} में से ${filteredDoctors.length} डॉक्टर दिख रहे हैं`}
          </span>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="doctors-list-grid">
          {filteredDoctors.map((doc, idx) => {
            const primaryDept = doc.specialties[0] || 'Medicine';
            const deptId = getDeptIdByName(primaryDept);
            const style = DEPT_STYLES[primaryDept] || DEFAULT_STYLE;
            const initials = getInitials(doc.name);

            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                id={`doctor-card-${doc.id}`}
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <div>
                  {/* Doctor Card Top — Gradient Avatar */}
                  <div className={`relative h-44 bg-gradient-to-br ${style.gradient} flex flex-col items-center justify-center overflow-hidden`}>
                    {/* Decorative circles */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/5" />

                    {/* Dept emoji */}
                    <span className="absolute top-3 left-3 text-2xl opacity-60 group-hover:opacity-90 transition-opacity" aria-hidden="true">
                      {style.icon}
                    </span>

                    {/* Status badge */}
                    <span className="absolute top-3 right-3 px-2 py-1 rounded bg-white/20 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 z-10 border border-white/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-300 animate-ping" />
                      {isEn ? 'Available' : 'उपलब्ध'}
                    </span>

                    {/* Large Initials Avatar */}
                    <div className="relative z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-black text-white tracking-wider">{initials}</span>
                    </div>

                    {/* Experience Badge */}
                    <div className="relative z-10 mt-3">
                      <div className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-yellow-200 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5">
                        <Star className="h-3 w-3 fill-yellow-200" />
                        <span>{doc.experience} {isEn ? 'Exp' : 'अनुभव'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info Body */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-extrabold text-base text-slate-800 group-hover:text-emerald-700 transition-colors leading-tight">
                        {doc.name}
                      </h3>
                      <span className={`inline-block mt-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${style.accent}`}>
                        {primaryDept}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600">
                      {/* Education info */}
                      <div className="flex items-start gap-2">
                        <GraduationCap className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2" title={doc.education}>
                          {doc.education}
                        </span>
                      </div>

                      {/* Languages */}
                      <div className="flex items-center gap-2">
                        <Languages className="h-4 w-4 text-slate-400 shrink-0" />
                        <span>{doc.languages.join(', ')}</span>
                      </div>

                      {/* Availability */}
                      <div className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <Calendar className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-slate-700 text-[10px] uppercase tracking-wider">
                            {isEn ? 'Schedule' : 'समय'}
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
                      className={`w-full py-2.5 bg-gradient-to-r ${style.gradient} hover:opacity-90 text-white font-bold text-xs md:text-sm rounded-xl transition shadow-md flex items-center justify-center gap-1.5`}
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

