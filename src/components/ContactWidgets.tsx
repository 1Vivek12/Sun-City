import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface ContactWidgetsProps {
  language: 'hi' | 'en';
}

export default function ContactWidgets({ language }: ContactWidgetsProps) {
  const whatsappNumber = "+917607781656"; 
  const phoneNumber = "+917607781656";
  const whatsappMessage = language === 'en' ? "Hello, I want to book an appointment." : "नमस्ते, मुझे अपॉइंटमेंट बुक करना है।";
  
  return (
    <div className="fixed bottom-28 left-4 md:bottom-8 md:left-8 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 w-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 relative group border-2 border-white"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute left-16 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {language === 'en' ? 'Chat on WhatsApp' : 'WhatsApp पर बात करें'}
        </span>
      </a>

      {/* Call Button */}
      <a 
        href="#"
        onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-emergency')); }}
        className="h-14 w-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 relative group border-2 border-white"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute left-16 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {language === 'en' ? 'Call Now' : 'अभी कॉल करें'}
        </span>
      </a>
    </div>
  );
}
