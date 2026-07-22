import React, { useState } from 'react';
import { Award, Star, Quote, ChevronRight, ShieldCheck, HeartPulse, X } from 'lucide-react';

interface DirectorProfileProps {
  language: 'hi' | 'en';
}

export default function DirectorProfile({ language }: DirectorProfileProps) {
  const isEn = language === 'en';
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20" id="director-profile">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100 inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" />
            {isEn ? 'LEADERSHIP & VISION' : 'नेतृत्व और दृष्टिकोण'}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
            {isEn ? 'Meet Our Managing Director' : 'हमारे प्रबंध निदेशक (MD)'}
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {isEn 
              ? 'Guiding Sun City Hospital with a commitment to excellence, compassion, and world-class healthcare for the people of Gorakhpur and Purvanchal.'
              : 'गोरखपुर और पूर्वांचल के लोगों के लिए उत्कृष्टता, करुणा और विश्व स्तरीय स्वास्थ्य सेवा की प्रतिबद्धता के साथ सन सिटी अस्पताल का मार्गदर्शन।'}
          </p>
        </div>

        {/* Profile & About Section */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Director Image Box */}
          <div className="lg:w-2/5 relative bg-gradient-to-br from-slate-100 to-slate-200 min-h-[400px]">
            {/* Ask user to put the desk photo here */}
            <img 
              src="/dr-abhay-desk.jpg" 
              alt="Dr. Abhay Kumar Sharma" 
              className="absolute inset-0 w-full h-full object-cover object-top"
              onError={(e) => {
                // Fallback if they haven't uploaded it yet
                e.currentTarget.src = '/dr-abhay.png'; 
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
              <h2 className="text-3xl font-black text-white">Dr. Abhay Kumar Sharma</h2>
              <p className="text-emerald-400 font-bold tracking-wide text-sm mt-1">MBBS, MD (Managing Director)</p>
            </div>
          </div>

          {/* Director Message & Details */}
          <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center space-y-8">
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 h-12 w-12 text-emerald-100 rotate-180" />
              <p className="relative z-10 text-lg md:text-2xl font-bold text-slate-700 leading-snug italic">
                "{isEn 
                  ? 'Our mission is to bridge the gap between advanced medical science and accessible healthcare. Every patient walking through our doors deserves the highest standard of care with utmost empathy.'
                  : 'हमारा मिशन उन्नत चिकित्सा विज्ञान और सुलभ स्वास्थ्य सेवा के बीच की खाई को पाटना है। हमारे यहां आने वाला हर मरीज पूरी सहानुभूति के साथ उच्चतम स्तर की देखभाल का हकदार है।'}"
              </p>
            </div>

            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                {isEn 
                  ? 'Under the visionary leadership of Dr. Abhay Kumar Sharma, Sun City Hospital has rapidly emerged as a trusted name in the healthcare landscape of Gorakhpur. His dedication to clinical excellence and patient-first approach ensures that the hospital operates with the highest ethical standards.'
                  : 'डॉ. अभय कुमार शर्मा के दूरदर्शी नेतृत्व में, सन सिटी अस्पताल तेजी से गोरखपुर के स्वास्थ्य सेवा क्षेत्र में एक विश्वसनीय नाम बनकर उभरा है। नैदानिक उत्कृष्टता और रोगी-प्रथम दृष्टिकोण के प्रति उनका समर्पण यह सुनिश्चित करता है कि अस्पताल उच्चतम नैतिक मानकों के साथ काम करे।'}
              </p>
              <p>
                {isEn 
                  ? 'With years of extensive medical experience, Dr. Sharma constantly strives to integrate modern technology, state-of-the-art infrastructure, and highly skilled specialists under one roof, making quality healthcare affordable for all.'
                  : 'वर्षों के व्यापक चिकित्सा अनुभव के साथ, डॉ. शर्मा लगातार आधुनिक तकनीक, अत्याधुनिक बुनियादी ढांचे और अत्यधिक कुशल विशेषज्ञों को एक छत के नीचे एकीकृत करने का प्रयास करते हैं, ताकि सभी के लिए गुणवत्तापूर्ण स्वास्थ्य सेवा सुलभ हो सके।'}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl font-bold text-sm border border-emerald-100">
                <HeartPulse className="h-5 w-5" /> {isEn ? 'Patient-Centric Care' : 'रोगी-केंद्रित देखभाल'}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-xl font-bold text-sm border border-blue-100">
                <ShieldCheck className="h-5 w-5" /> {isEn ? 'Trusted Leadership' : 'विश्वसनीय नेतृत्व'}
              </span>
            </div>
          </div>
        </div>

        {/* Awards & Achievements Section */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-800">
              {isEn ? 'Awards & Recognitions' : 'पुरस्कार एवं सम्मान'}
            </h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            {/* Background decorations */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              
              {/* Text Info */}
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-yellow-300 text-xs font-bold tracking-widest uppercase">
                  <Star className="h-4 w-4 fill-yellow-300" />
                  City Health Excellence Awards 2026
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-500">
                  {isEn ? 'Recognized for Remarkable Contributions to Healthcare' : 'स्वास्थ्य सेवा में उत्कृष्ट योगदान के लिए सम्मानित'}
                </h3>
                
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {isEn 
                    ? 'Dr. Abhay Kumar Sharma and Sun City Hospital were proudly presented with the prestigious City Health Excellence Award 2026 by Radio City 91.9 FM. This accolade recognizes the truly remarkable and deeply appreciated contributions made towards advancing the healthcare sector in the region.'
                    : 'डॉ. अभय कुमार शर्मा और सन सिटी अस्पताल को रेडियो सिटी 91.9 एफएम द्वारा प्रतिष्ठित सिटी हेल्थ एक्सीलेंस अवार्ड 2026 से सम्मानित किया गया। यह पुरस्कार क्षेत्र में स्वास्थ्य सेवा क्षेत्र को आगे बढ़ाने में किए गए उल्लेखनीय और बहुमूल्य योगदान को मान्यता देता है।'}
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm mt-6">
                  <p className="italic text-slate-200 font-medium">
                    "For Your Contributions to the Healthcare Sector are Truly Remarkable and Deeply Appreciated."
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <Award className="h-6 w-6 text-yellow-500" />
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Presented By</p>
                      <p className="text-sm font-bold text-white">Radio City 91.9 FM (A Jagran Initiative)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Images / Photos */}
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div 
                  className="bg-white/10 rounded-2xl p-2 border border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedImage('/award-certificate.jpg')}
                >
                  <img 
                    src="/award-certificate.jpg" 
                    alt="Certificate of Appreciation - City Health Excellence Awards 2026" 
                    className="w-full h-auto aspect-[4/3] object-cover rounded-xl"
                  />
                  <p className="text-center text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-3 mb-1">
                    {isEn ? 'Certificate of Appreciation' : 'प्रशस्ति पत्र'}
                  </p>
                </div>
                
                <div 
                  className="bg-white/10 rounded-2xl p-2 border border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedImage('/award-trophy.png')}
                >
                  <img 
                    src="/award-trophy.png" 
                    alt="Award Trophy - City Health Excellence Awards 2026" 
                    className="w-full h-auto aspect-[3/4] object-cover rounded-xl"
                  />
                  <p className="text-center text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-3 mb-1">
                    {isEn ? 'Excellence Trophy' : 'उत्कृष्टता ट्रॉफी'}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X className="h-8 w-8" />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Expanded Award" 
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/20 cursor-default"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
    </div>
  );
}
