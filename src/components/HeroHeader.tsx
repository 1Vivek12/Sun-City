import React from 'react';
import { ArrowRight, Phone, MessageCircle, Sparkles, Shield, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroHeaderProps {
  language: 'hi' | 'en';
  onNavigate: (section: string) => void;
}

export default function HeroHeader({ language, onNavigate }: HeroHeaderProps) {
  const isEn = language === 'en';

  return (
    <div className="relative overflow-hidden text-white py-16 lg:py-24 border-b border-slate-800" style={{ backgroundImage: "url('/sun-city-front.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-teal-950/85" />
      {/* Decorative Blur Spheres */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Fold */}
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-semibold tracking-wide"
            >
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span>
                {isEn ? "Gorakhpur's Leading Medical Institution" : "गोरखपुर का प्रमुख मल्टी-स्पेशलिटी चिकित्सा संस्थान"}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none"
            >
              {isEn ? (
                <>
                  Advanced Healing. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                    Trusted Healthcare.
                  </span>
                </>
              ) : (
                <>
                  अत्याधुनिक चिकित्सा। <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                    विश्वसनीय सेवा।
                  </span>
                </>
              )}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0 }}
              className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed font-light"
            >
              {isEn 
                ? "Sun City Hospital blends expert medical specialists, modular operation theatres (OT), and 24x7 Emergency/ICU facilities to offer world-class clinical care at zero monthly compromise."
                : "सन सिटी हॉस्पिटल गोरखपुर अनुभवी विशेषज्ञों, मॉड्यूलर ओटी और २४/७ आपातकालीन/आईसीयू सुविधाओं के संयोजन से विश्वस्तरीय स्वास्थ्य सेवा प्रदान करता है।"}
            </motion.p>

            {/* Quick CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={() => onNavigate('booking')}
                className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{isEn ? 'Book Appointment' : 'अपॉइंटमेंट बुक करें'}</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </button>

              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-emergency')); }}
                className="bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700/80 font-bold text-sm px-6 py-4 rounded-xl transition duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="h-5 w-5 text-emerald-400" />
                <span>{isEn ? 'WhatsApp Help Desk' : 'व्हाट्सएप सहायता केंद्र'}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Director Spotlight + Emergency Hotline Widget */}
          <div className="lg:col-span-4 space-y-6">
            {/* Managing Director Featured Spotlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onClick={() => onNavigate('director')}
              className="bg-gradient-to-br from-red-900/90 via-slate-900/90 to-red-950/90 backdrop-blur-md border border-red-500/40 p-4 sm:p-5 rounded-3xl shadow-2xl relative overflow-hidden group cursor-pointer hover:border-red-400 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all" />
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-rose-400 shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img src="/dr-abhay-desk.jpg" alt="Dr. Abhay Kumar Sharma (MD)" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 bg-yellow-400 text-slate-950 p-1 rounded-full text-[10px] shadow font-black" title="City Health Award Winner 2026">
                    👑
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="px-2 py-0.5 rounded-full bg-red-600/80 text-white text-[9px] font-black uppercase tracking-wider border border-red-400/40">
                    👑 {isEn ? 'Managing Director' : 'प्रबंध निदेशक (MD)'}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-yellow-300 transition-colors leading-tight">
                    Dr. Abhay Kumar Sharma
                  </h3>
                  <p className="text-[10px] sm:text-xs text-red-200 font-semibold line-clamp-1">
                    MBBS, MD (Pediatrics), Fellowship Healthcare
                  </p>
                  <p className="text-[9px] text-yellow-300 font-bold flex items-center gap-1">
                    🏆 {isEn ? 'City Health Excellence Award 2026' : 'सिटी हेल्थ एक्सीलेंस अवॉर्ड 2026'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Premium Hotline Widget */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-900/60 backdrop-blur-md border border-slate-700/55 p-6 rounded-3xl space-y-6 shadow-2xl relative"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 rounded-full bg-red-500 animate-ping" />
                <span className="text-red-400 text-[10px] font-bold tracking-widest uppercase">
                  {isEn ? "24x7 Emergency & Critical Care" : "२४/७ आपातकालीन व गंभीर चिकित्सा"}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-slate-100">
                  {isEn ? "Need Immediate Care?" : "त्वरित सहायता चाहिए?"}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isEn 
                    ? "Our trauma response, ventilators, ICU beds, and ambulances are standby 24/7."
                    : "हमारा आपातकालीन विभाग, वेंटिलेटर, आईसीयू बेड और एम्बुलेंस २४ घंटे तैयार हैं।"}
                </p>
              </div>

              {/* Call Hotline Callout */}
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-emergency')); }}
                className="block bg-red-600/90 hover:bg-red-500 text-white p-4 rounded-2xl transition duration-300 text-center shadow-lg shadow-red-900/30"
              >
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 text-white animate-bounce" />
                  <div className="text-left">
                    <p className="text-[9px] text-red-200 font-bold uppercase tracking-wider">
                      {isEn ? "Emergency Hotline" : "आपातकालीन नंबर"}
                    </p>
                    <p className="text-base font-extrabold">+91 7607781656</p>
                    <p className="text-sm font-bold text-red-100">+91 8669062143</p>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
