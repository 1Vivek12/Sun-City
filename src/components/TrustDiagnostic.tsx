import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ClipboardList, CheckCircle2, MapPin, Phone, TestTube2 } from 'lucide-react';
import { DIAGNOSTICS } from '../data';

interface TrustDiagnosticProps {
  language: 'hi' | 'en';
}

export default function TrustDiagnostic({ language }: TrustDiagnosticProps) {
  const isEn = language === 'en';

  const testsIncluded = [
    { name: isEn ? 'CBC (Complete Blood Count)' : 'सीबीसी (पूर्ण रक्त गणना)' },
    { name: isEn ? 'Lipid Profile' : 'लिपिड प्रोफाइल' },
    { name: isEn ? 'Liver Function Test' : 'लिवर फंक्शन टेस्ट' },
    { name: isEn ? 'Urine R/M' : 'यूरिन आर/एम' },
    { name: isEn ? '3 Months Sugar Report (HbA1c)' : '3 महीने की शुगर रिपोर्ट (HbA1c)' },
    { name: isEn ? 'Kidney Profile (GFR)' : 'किडनी प्रोफाइल (GFR)' },
    { name: isEn ? 'Thyroid Profile-3 (T3, T4, TSH)' : 'थायराइड प्रोफाइल-3 (T3, T4, TSH)' },
    { name: isEn ? 'IRON Profile' : 'आयरन प्रोफाइल' }
  ];

  return (
    <div className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-4"
          >
            <Activity className="w-5 h-5" />
            <span>{isEn ? 'In-house Premium Pathology' : 'इन-हाउस प्रीमियम पैथोलॉजी'}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight"
          >
            TRUST <span className="text-emerald-600">DIAGNOSTIC</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg"
          >
            {isEn 
              ? 'Complete testing for blood, urine, and main organs (Heart, Liver, Kidney, Thyroid, Sugar).' 
              : 'रक्त, मूत्र और मुख्य अंगों (हृदय, लीवर, किडनी, थायराइड, शुगर) की संपूर्ण जांच।'}
          </motion.p>
        </div>

        {/* Doctor & Clinic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Clinic Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group"
          >
            <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition duration-500 z-10" />
            <img 
              src="/trust_clinic.jpg" 
              alt="Trust Diagnostic Clinic" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl z-20 shadow-lg border border-white">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Trust Diagnostic</h4>
                  <p className="text-sm text-slate-600">{isEn ? 'Siktaur ke samne Padleganj Road, Gorakhpur' : 'सिकटौर के सामने पैडलेगंज रोड, गोरखपुर'}</p>
                  <p className="text-emerald-600 font-bold mt-1 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> 0551 4509173
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Doctor Profile */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-20 -mt-20" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-emerald-100 shadow-lg shrink-0">
                  <img 
                    src="/dr_vasundhara.jpg" 
                    alt="Dr. Vasundhara" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                <div className="text-center md:text-left pt-2">
                  <h3 className="text-3xl font-black text-slate-800">
                    {isEn ? 'Dr. Vasundhara' : 'डॉ. वसुंधरा'}
                  </h3>
                  <div className="text-emerald-600 font-bold text-lg mt-1 tracking-wide">
                    MBBS, MD (Pathologist)
                  </div>
                  <div className="h-1 w-12 bg-emerald-500 rounded-full my-4 mx-auto md:mx-0" />
                  <p className="text-slate-600 leading-relaxed">
                    {isEn 
                      ? 'Leading pathologist ensuring 100% accuracy and reliable reports for precise diagnosis and better healthcare outcomes.'
                      : 'अग्रणी पैथोलॉजिस्ट जो सटीक निदान और बेहतर स्वास्थ्य देखभाल परिणामों के लिए 100% सटीकता और विश्वसनीय रिपोर्ट सुनिश्चित करती हैं।'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Complete Package Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                {isEn ? 'Complete Package' : 'सम्पूर्ण पैकेज'} <br />
                <span className="text-emerald-300 text-2xl md:text-3xl">(Full Body Checkup)</span>
              </h3>
              <p className="text-emerald-100 mt-4 text-lg">
                {isEn ? '24x7 Facility Available for immediate sample collection and rapid reporting.' : 'त्वरित सैंपल कलेक्शन और रिपोर्टिंग के लिए 24x7 सुविधा उपलब्ध है।'}
              </p>
              
              <div className="mt-8">
                <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <p className="text-emerald-200 text-sm font-bold uppercase tracking-wider mb-1">
                    {isEn ? 'Special Package Price' : 'विशेष पैकेज मूल्य'}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white">₹2899</span>
                    <span className="text-xl text-emerald-300 line-through">₹2999</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 border-l border-white/10">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <ClipboardList className="w-6 h-6 text-emerald-400" />
                {isEn ? 'Tests Included' : 'पैकेज में शामिल टेस्ट'}
              </h4>
              <ul className="space-y-4">
                {testsIncluded.map((test, index) => (
                  <li key={index} className="flex items-start gap-3 text-emerald-50">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-medium text-[15px]">{test.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Single Tests Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-slate-800">
              {isEn ? 'Individual Diagnostic Tests' : 'व्यक्तिगत डायग्नोस्टिक टेस्ट'}
            </h3>
            <p className="text-slate-500 mt-2">
              {isEn ? 'Book individual tests at affordable prices with 100% accuracy.' : 'सटीक परिणाम के साथ उचित मूल्य पर व्यक्तिगत टेस्ट बुक करें।'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIAGNOSTICS.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <TestTube2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">{isEn ? test.name : test.fullName}</h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{test.description}</p>
                  
                  <div className="mt-4 space-y-1">
                    <p className="text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded inline-block">
                      🕒 {isEn ? 'Report in' : 'रिपोर्ट:'} {test.turnaroundTime}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xl font-black text-emerald-600">₹{test.price}</span>
                  <button 
                    onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-emergency')); }}
                    className="text-xs font-bold bg-slate-900 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-600 transition"
                  >
                    {isEn ? 'Book Now' : 'बुक करें'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
