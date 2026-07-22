import React from 'react';
import { Shield, CheckCircle2, ArrowRight } from 'lucide-react';

interface PmjayTeaserProps {
  language: 'hi' | 'en';
  onNavigate: (section: string) => void;
}

export default function PmjayTeaser({ language, onNavigate }: PmjayTeaserProps) {
  const isEn = language === 'en';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" id="ayushman-spotlight-card">
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-6 md:p-12 rounded-3xl shadow-lg border border-emerald-800">
        <div className="absolute top-0 right-0 h-64 w-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-700/80 text-emerald-200 text-[10px] md:text-xs font-semibold tracking-wide">
              <Shield className="h-3.5 w-3.5 text-emerald-300" />
              <span>{isEn ? 'GOVERNMENT APPROVED EM-PANELLMENT' : 'सरकारी अधिकृत अस्पताल'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {isEn ? 'Free Cashless Treatment Under Ayushman Scheme (PM-JAY)' : 'आयुष्मान योजना (PM-JAY) के तहत निःशुल्क कैशलेस इलाज'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {isEn 
                ? 'All gold cardholders are eligible to receive up to ₹5,00,000 yearly in completely cashless treatments, surgical procedures, ICU admissions, and diagnostics at Sun City Hospital, Gorakhpur.'
                : 'आयुष्मान भारत स्वर्ण कार्ड धारक अब हमारे अस्पताल में हर साल ₹५,००,००० तक का निःशुल्क ऑपरेशन, सर्जिकल उपचार, आईसीयू एडमिशन और जांच सेवाएं बिल्कुल कैशलेस प्राप्त कर सकते हैं।'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2 max-w-xl text-slate-200">
              <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-700/20 text-xs flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{isEn ? '0% Out-of-Pocket Expense' : 'शून्य अतिरिक्त खर्च'}</span>
              </div>
              <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-700/20 text-xs flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{isEn ? 'All Major Surgeries Included' : 'सभी प्रमुख सर्जरी शामिल'}</span>
              </div>
              <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-700/20 text-xs flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{isEn ? 'Dedicated Support Helpdesk' : 'विशेष सहायता केंद्र'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 text-center lg:text-right flex flex-col items-center lg:items-end justify-center gap-6">
            <div className="bg-white p-3 rounded-2xl shadow-md inline-block max-w-[120px] sm:max-w-[140px] md:max-w-[160px]">
               <img src="/ayushman-logo.png" alt="Ayushman Bharat PM-JAY Logo" className="w-full h-auto object-contain" />
            </div>
            <button
              onClick={() => onNavigate('pmjay')}
              className="bg-white hover:bg-slate-100 text-emerald-900 font-bold text-xs sm:text-sm md:text-base px-6 py-4 rounded-2xl shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{isEn ? 'Check Benefits & Documents' : 'दस्तावेज और लाभों की जांच करें'}</span>
              <ArrowRight className="h-4.5 w-4.5 text-emerald-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
