import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';

interface EmergencyPopupProps {
  language: 'hi' | 'en';
}

export default function EmergencyPopup({ language }: EmergencyPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-emergency', handleOpen);
    return () => window.removeEventListener('open-emergency', handleOpen);
  }, []);

  const onClose = () => setIsOpen(false);
  const isEn = language === 'en';
  const emergencyNumber = '+918669062143';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-sm w-full border border-slate-100 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 hover:bg-slate-200 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8 mt-2">
              <div className="mx-auto w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4 shadow-inner relative">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20" />
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-800">
                {isEn ? 'Emergency Contact' : 'आपातकालीन संपर्क'}
              </h3>
              <p className="text-slate-500 mt-2 text-sm">
                {isEn ? 'How would you like to reach us?' : 'आप हमसे कैसे संपर्क करना चाहेंगे?'}
              </p>
              <p className="text-lg font-bold text-emerald-600 mt-1">
                +91 866 906 2143
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`tel:${emergencyNumber}`}
                className="w-full flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-900 text-white p-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1 hover:shadow-lg"
                onClick={onClose}
              >
                <Phone className="w-6 h-6 text-emerald-400 animate-pulse" />
                <span>{isEn ? 'Call Now' : 'अभी कॉल करें'}</span>
              </a>
              
              <a
                href={`https://wa.me/${emergencyNumber.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 p-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1 hover:shadow-md border border-emerald-200"
                onClick={onClose}
              >
                <MessageCircle className="w-6 h-6 text-emerald-600" />
                <span>{isEn ? 'WhatsApp' : 'व्हाट्सएप करें'}</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
