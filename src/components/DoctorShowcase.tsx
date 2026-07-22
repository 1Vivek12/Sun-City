import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Activity, Baby, AlertCircle } from 'lucide-react';

interface DoctorShowcaseProps {
  language: 'hi' | 'en';
  onBookWithDoctor?: (doctorId: string, deptId: string) => void;
}

const doctors = [
  {
    id: 'dr-s-singh',
    doctorId: 'dr-suraj',
    deptId: 'gen-surgery',
    nameEn: 'Dr. S. Singh',
    nameHi: 'डॉ. एस. सिंह',
    qualifications: 'MBBS, MS - General Surgeon (DIP-MAS)',
    specialtyEn: 'Laparoscopic Surgeon',
    specialtyHi: 'लैप्रोस्कोपिक सर्जन',
    icon: Stethoscope,
    docImage: '/dr_s_singh.png',
    sceneImage: '/ai_ot_1784367900139.png',
    sceneLabelEn: 'Advanced Modular OT',
    sceneLabelHi: 'उन्नत मॉड्यूलर ओटी',
    accentColor: 'emerald',
  },
  {
    id: 'dr-rahul',
    doctorId: 'dr-rahul',
    deptId: '',
    nameEn: 'Dr. Rahul Shreenet',
    nameHi: 'डॉ. राहुल श्रीनेत',
    qualifications: 'MBBS, MD - Medicine Gold medalist',
    specialtyEn: 'ICU Specialist',
    specialtyHi: 'आईसीयू विशेषज्ञ',
    icon: Activity,
    docImage: '/dr_rahul.png',
    sceneImage: '/ai_icu_1784367922531.png',
    sceneLabelEn: '24x7 Critical Care ICU',
    sceneLabelHi: '२४/७ क्रिटिकल केयर आईसीयू',
    accentColor: 'blue',
  },
  {
    id: 'dr-pratima',
    doctorId: 'dr-pratima',
    deptId: 'gynecology',
    nameEn: 'Dr. Pratima',
    nameHi: 'डॉ. प्रतिमा',
    qualifications: 'MBBS - MS (Gynae - Obgy)',
    specialtyEn: 'Obstetrics and Gynaecology',
    specialtyHi: 'प्रसूति एवं स्त्री रोग',
    icon: Baby,
    docImage: '/dr_female_real.jpg',
    sceneImage: '/ai_gynecology_1784367938468.png',
    sceneLabelEn: 'Comprehensive Maternity Care',
    sceneLabelHi: 'व्यापक मातृत्व देखभाल',
    accentColor: 'pink',
  },
  {
    id: 'dr-devta',
    doctorId: 'dr-devta',
    deptId: 'orthopedics',
    nameEn: 'Dr. Devta Singh',
    nameHi: 'डॉ. देवता सिंह',
    qualifications: 'MBBS, D-Ortho, DNB, PDCC',
    specialtyEn: 'Spine Surgeon & Trauma Specialist',
    specialtyHi: 'स्पाइन सर्जन और आघात विशेषज्ञ',
    icon: AlertCircle,
    docImage: '/dr_male_real.jpg',
    sceneImage: 'emergency', // Special case for emergency circle
    sceneLabelEn: 'Emergency 24x7 Available',
    sceneLabelHi: 'आपातकालीन २४/७ उपलब्ध',
    accentColor: 'red',
  }
];

export default function DoctorShowcase({ language, onBookWithDoctor }: DoctorShowcaseProps) {
  const isEn = language === 'en';

  return (
    <div className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
            {isEn ? 'Our Medical Leaders' : 'हमारे प्रमुख चिकित्सक'}
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            {isEn ? 'Exceptional care led by distinguished specialists in state-of-the-art facilities.' : 'अत्याधुनिक सुविधाओं में प्रतिष्ठित विशेषज्ञों के नेतृत्व में असाधारण देखभाल।'}
          </p>
        </div>

        <div className="space-y-12">
          {doctors.map((doc, index) => {
            const isEven = index % 2 === 0;
            const Icon = doc.icon;

            // Safe color mappings for Tailwind (since dynamic classes can be purged, we use inline styles for dynamic gradients if needed, or predefined classes. Actually, standard tailwind doesn't like dynamic class strings like `bg-${color}-500` unless safelisted. Let's use predefined mappings or just generic colors for safety, or a style map.)
            
            const accentClasses: Record<string, { gradient: string, border: string, text: string, bg: string }> = {
              emerald: { gradient: 'from-emerald-400 to-emerald-600', border: 'group-hover:border-emerald-200', text: 'text-emerald-500', bg: 'bg-emerald-500' },
              blue: { gradient: 'from-blue-400 to-blue-600', border: 'group-hover:border-blue-200', text: 'text-blue-500', bg: 'bg-blue-500' },
              pink: { gradient: 'from-pink-400 to-pink-600', border: 'group-hover:border-pink-200', text: 'text-pink-500', bg: 'bg-pink-500' },
              red: { gradient: 'from-red-400 to-red-600', border: 'group-hover:border-red-200', text: 'text-red-500', bg: 'bg-red-500' },
            };
            
            const styles = accentClasses[doc.accentColor] || accentClasses.emerald;

            return (
              <motion.div 
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 items-stretch bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl ${styles.border} transition-all duration-300 group`}
              >
                {/* Doctor Info Section */}
                <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="relative shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                    <img 
                      src={doc.docImage} 
                      alt={isEn ? doc.nameEn : doc.nameHi}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg relative z-10 bg-slate-100"
                    />
                    <div className={`absolute -bottom-3 -right-3 bg-white p-2 rounded-full shadow-lg ${styles.text} z-20`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center h-full pt-2">
                    <h3 className="text-2xl font-bold text-slate-800">
                      {isEn ? doc.nameEn : doc.nameHi}
                    </h3>
                    <p className={`${styles.text} font-semibold mt-1 mb-2 text-lg`}>
                      {isEn ? doc.specialtyEn : doc.specialtyHi}
                    </p>
                    <div className="bg-slate-50 px-3 py-2 rounded-xl border border-slate-100 inline-block w-fit mt-1 mb-4">
                      <p className="text-sm text-slate-700 font-medium whitespace-pre-wrap leading-relaxed">
                        {doc.qualifications}
                      </p>
                    </div>
                    {onBookWithDoctor && (
                      <button
                        onClick={() => onBookWithDoctor(doc.doctorId, doc.deptId)}
                        className={`mt-auto w-fit bg-gradient-to-r ${styles.gradient} text-white font-bold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-sm`}
                      >
                        {isEn ? 'Book Appointment' : 'अपॉइंटमेंट बुक करें'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Scene/Action Section */}
                <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden relative min-h-[250px] shadow-inner group-hover:shadow-md transition-shadow">
                  {doc.sceneImage === 'emergency' ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
                      <div className="absolute inset-0 bg-[url('/sun-city-front.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay" />
                      <div className="relative z-10 w-48 h-48 rounded-full border-[6px] border-red-500/20 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-sm shadow-[0_0_40px_rgba(239,68,68,0.3)] group-hover:scale-105 transition-transform duration-500">
                        <AlertCircle className="w-12 h-12 text-red-500 mb-2 animate-pulse" />
                        <span className="text-white font-black text-xl tracking-wider text-center px-4 leading-tight">
                          EMERGENCY<br/><span className="text-red-400">24x7</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={doc.sceneImage} 
                        alt="Facility"
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-12 ${styles.bg} rounded-full`} />
                          <p className="text-white font-bold text-lg md:text-xl drop-shadow-md">
                            {isEn ? doc.sceneLabelEn : doc.sceneLabelHi}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
