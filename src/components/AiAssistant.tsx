import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, HelpCircle, Minimize2, Maximize2, Calendar, Phone, CheckCircle2, User, Stethoscope, Clock, ExternalLink } from 'lucide-react';
import { ChatMessage } from '../types';
import { getLocalBotResponse } from '../utils/localBot';
import { DEPARTMENTS, DOCTORS } from '../data';
import { saveBooking } from '../utils/bookingStore';

interface AiAssistantProps {
  language: 'hi' | 'en';
}

interface BookingState {
  step: 'NAME' | 'PHONE' | 'DOCTOR' | 'DATE' | 'TIME' | 'DONE';
  patientName?: string;
  phone?: string;
  doctorName?: string;
  departmentName?: string;
  date?: string;
  timeSlot?: string;
}

export default function AiAssistant({ language }: AiAssistantProps) {
  const isEn = language === 'en';
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [bookingState, setBookingState] = useState<BookingState | null>(null);

  const welcomeText = isEn
    ? "Hello! I am Sun City Hospital's AI Assistant 🤖\n\nI can answer questions about doctors, PM-JAY cashless treatment, lab tests, or help you book an appointment right here!"
    : "नमस्ते! मैं सन सिटी हॉस्पिटल का एआई डिजिटल सहायक हूँ 🤖\n\nमुझसे डॉक्टरों, आयुष्मान कार्ड, टेस्ट के बारे में पूछें या यहाँ सीधे अपॉइंटमेंट बुक करें!";

  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: welcomeText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory, isOpen, isMinimized, bookingState]);

  // Start Booking Flow
  const startBookingFlow = () => {
    setBookingState({ step: 'NAME' });
    const promptMsg = isEn
      ? "📝 *Step 1 of 4: Patient Name*\n\nPlease type the patient's full name:"
      : "📝 *चरण 1 (4 में से): मरीज का नाम*\n\nकृपया मरीज का पूरा नाम टाइप करें:";

    addAssistantMessage(promptMsg);
  };

  // Helper to add assistant message
  const addAssistantMessage = (text: string) => {
    const assistantMsg: ChatMessage = {
      id: 'assistant-' + Math.random().toString(36).substring(2, 9),
      sender: 'assistant',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatHistory(prev => [...prev, assistantMsg]);
  };

  // Helper to add user message
  const addUserMessage = (text: string) => {
    const userMsg: ChatMessage = {
      id: 'user-' + Math.random().toString(36).substring(2, 9),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatHistory(prev => [...prev, userMsg]);
  };

  // Handle Interactive Booking Inputs
  const handleBookingStepInput = (inputVal: string) => {
    if (!bookingState) return;

    if (inputVal.toLowerCase() === 'cancel' || inputVal.toLowerCase() === 'रद्द') {
      setBookingState(null);
      addAssistantMessage(isEn ? "Booking process cancelled. How else can I assist you?" : "अपॉइंटमेंट बुकिंग रद्द कर दी गई। मैं आपकी क्या सहायता कर सकता हूँ?");
      return;
    }

    switch (bookingState.step) {
      case 'NAME': {
        const name = inputVal.trim();
        if (name.length < 2) {
          addAssistantMessage(isEn ? "Please enter a valid patient name:" : "कृपया एक सही मरीज का नाम टाइप करें:");
          return;
        }
        setBookingState({ step: 'PHONE', patientName: name });
        addAssistantMessage(
          isEn
            ? `Thanks ${name}! 📱 *Step 2 of 4: Phone Number*\n\nPlease enter your 10-digit mobile number:`
            : `धन्यवाद ${name}! 📱 *चरण 2 (4 में से): मोबाइल नंबर*\n\nकृपया अपना 10 अंकों का मोबाइल नंबर दर्ज करें:`
        );
        break;
      }

      case 'PHONE': {
        const phone = inputVal.trim();
        if (phone.length < 8) {
          addAssistantMessage(isEn ? "Please enter a valid phone number:" : "कृपया सही मोबाइल नंबर दर्ज करें:");
          return;
        }
        setBookingState(prev => ({ ...prev!, step: 'DOCTOR', phone }));
        addAssistantMessage(
          isEn
            ? `👨‍⚕️ *Step 3 of 4: Select Doctor or Specialty*\n\nChoose from the list below or type doctor/department name:`
            : `👨‍⚕️ *चरण 3 (4 में से): डॉक्टर या विभाग चुनें*\n\nनीचे दिए गए विकल्पों में से चुनें या नाम टाइप करें:`
        );
        break;
      }

      case 'DOCTOR': {
        const chosen = inputVal.trim();
        setBookingState(prev => ({ ...prev!, step: 'DATE', doctorName: chosen }));
        addAssistantMessage(
          isEn
            ? `📅 *Step 4 of 4: Preferred Date*\n\nChoose a date below or type your preferred date (e.g. Tomorrow, 2026-07-23):`
            : `📅 *चरण 4 (4 में से): तिथि चुनें*\n\nनीचे दिए गए बटन में से चुनें या पसंदीदा तारीख लिखें:`
        );
        break;
      }

      case 'DATE': {
        const chosenDate = inputVal.trim();
        setBookingState(prev => ({ ...prev!, step: 'TIME', date: chosenDate }));
        addAssistantMessage(
          isEn
            ? `⏰ *Select Time Slot*\n\nChoose preferred time slot:`
            : `⏰ *समय स्लॉट चुनें*\n\nसुविधाजनक समय का चयन करें:`
        );
        break;
      }

      case 'TIME': {
        const chosenTime = inputVal.trim();
        const finalState = { ...bookingState, timeSlot: chosenTime, step: 'DONE' as const };
        setBookingState(finalState);
        completeBooking(finalState);
        break;
      }
    }
  };

  // Complete Booking & WhatsApp Redirect
  const completeBooking = (finalBooking: BookingState) => {
    const { patientName, phone, doctorName, date, timeSlot } = finalBooking;
    
    // Save to local store
    saveBooking({
      patientName: patientName || 'Patient',
      phone: phone || '',
      date: date || 'Soon',
      timeSlot: timeSlot || 'Morning',
      department: 'General',
      doctor: doctorName || 'Consultant'
    });

    const targetNumber = '918669062143';
    const waText = `*New Booking Request (via AI Bot)* 🏥\n\n*Patient Name:* ${patientName}\n*Phone:* ${phone}\n*Doctor/Specialty:* ${doctorName}\n*Date:* ${date}\n*Time Slot:* ${timeSlot}`;
    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp
    window.open(waUrl, '_blank');

    const confirmMsg = isEn
      ? `✅ *Booking Confirmation Summary*\n\n` +
        `• *Patient:* ${patientName}\n` +
        `• *Phone:* ${phone}\n` +
        `• *Doctor:* ${doctorName}\n` +
        `• *Date & Time:* ${date} (${timeSlot})\n\n` +
        `📲 *WhatsApp Chat opened automatically!* Click the button below if it didn't open:`
      : `✅ *अपॉइंटमेंट बुकिंग विवरण*\n\n` +
        `• *मरीज:* ${patientName}\n` +
        `• *मोबाइल:* ${phone}\n` +
        `• *डॉक्टर/विभाग:* ${doctorName}\n` +
        `• *तारीख व समय:* ${date} (${timeSlot})\n\n` +
        `📲 *WhatsApp चैट खुल गया है!* यदि नहीं खुला तो नीचे हरे बटन पर क्लिक करें:`;

    addAssistantMessage(confirmMsg);
  };

  // Send Message Logic
  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    addUserMessage(textToSend);
    setMessageText('');

    const lower = textToSend.toLowerCase();

    // Trigger booking mode if user asks for booking
    if (
      !bookingState &&
      (lower.includes('book') ||
        lower.includes('appointment') ||
        lower.includes('अपॉइंटमेंट') ||
        lower.includes('बुकिंग') ||
        lower.includes('बुक करना'))
    ) {
      startBookingFlow();
      return;
    }

    // Active Booking Mode Handling
    if (bookingState && bookingState.step !== 'DONE') {
      handleBookingStepInput(textToSend);
      return;
    }

    // Regular Bot Response
    const replyText = getLocalBotResponse(textToSend, language);
    addAssistantMessage(replyText);
  };

  // Dates helpers for quick chips
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  // Quick Action Buttons
  const sampleQuestions = isEn
    ? [
        { label: "📅 Book Appointment", action: () => startBookingFlow() },
        { label: "🏥 PM-JAY Cashless", query: "Is PM-JAY accepted?" },
        { label: "🚨 Emergency 24/7", query: "Emergency numbers and ambulance" },
        { label: "👨‍⚕️ Doctors List", query: "Who are the doctors?" },
        { label: "📍 Location & Contact", query: "Hospital address and phone" },
        { label: "🔬 Lab Tests & Prices", query: "List lab tests and prices" }
      ]
    : [
        { label: "📅 अपॉइंटमेंट बुक करें", action: () => startBookingFlow() },
        { label: "🏥 आयुष्मान PM-JAY", query: "क्या आयुष्मान कार्ड चलता है?" },
        { label: "🚨 24 घंटे एम्बुलेंस", query: "इमरजेंसी नंबर क्या है?" },
        { label: "👨‍⚕️ डॉक्टर्स लिस्ट", query: "डॉक्टरों की सूची दिखाएं" },
        { label: "📍 पता व संपर्क", query: "हॉस्पिटल का पता और फोन नंबर" },
        { label: "🔬 लैब टेस्ट व फीस", query: "ब्लड टेस्ट और फीस दिखाएं" }
      ];

  const quickDoctors = DOCTORS.slice(0, 5).map(d => d.name);
  const quickTimes = ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "02:00 PM - 03:00 PM", "04:00 PM - 05:00 PM"];

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 flex flex-col items-end">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 border border-emerald-500/30 group relative transition-transform duration-300"
          id="ai-chat-trigger"
          aria-label="Start health assistant"
        >
          <Bot className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-yellow-400 border-2 border-white animate-pulse" />
        </button>
      )}

      {isOpen && (
        <div className={`bg-white/95 backdrop-blur-xl border border-emerald-100 rounded-2xl shadow-2xl transition-all duration-300 flex flex-col ${isMinimized ? 'h-14 w-72 md:w-80' : 'h-[500px] w-[calc(100vw-2rem)] sm:w-[340px] md:w-[380px]'}`} id="ai-chat-window-panel">
          
          {/* Header */}
          <div className="bg-slate-900 text-white p-3 px-4 rounded-t-2xl flex justify-between items-center shrink-0 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-emerald-400" />
              <div>
                <h4 className="text-xs font-bold flex items-center gap-1">
                  <span>Sun City AI Assistant</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </h4>
                <p className="text-[9px] text-slate-400">{isEn ? '24/7 Smart Health Helper' : '24/7 स्मार्ट हेल्थ हेल्प'}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer">
                {isMinimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
              </button>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white cursor-pointer">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Chat History Messages */}
              <div className="flex-grow overflow-y-auto p-4 space-y-3 text-xs bg-slate-50/50">
                {chatHistory.map((msg) => {
                  const isAss = msg.sender === 'assistant';
                  return (
                    <div key={msg.id} className={`flex ${isAss ? 'justify-start' : 'justify-end'}`}>
                      <div className={`max-w-[88%] rounded-2xl p-3 space-y-1.5 shadow-sm ${isAss ? 'bg-white border border-slate-150 text-slate-800' : 'bg-emerald-600 text-white'}`}>
                        <p className="leading-relaxed whitespace-pre-line font-medium">{msg.text}</p>

                        {/* If last message has WhatsApp action in booking done */}
                        {isAss && msg.text.includes('WhatsApp') && (
                          <div className="pt-2">
                            <a
                              href={`https://wa.me/918669062143?text=${encodeURIComponent('Hi, I want to confirm my appointment booking at Sun City Hospital.')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] px-3 py-1.5 rounded-xl shadow transition"
                            >
                              <span>📱 Open WhatsApp Chat</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        )}

                        <span className="block text-[8px] text-right opacity-50">{msg.timestamp}</span>
                      </div>
                    </div>
                  );
                })}
                <div ref={chatEndRef} />
              </div>

              {/* Interactive Quick Step Choices during Booking */}
              {bookingState && bookingState.step !== 'DONE' && (
                <div className="p-2 bg-emerald-50/80 border-t border-emerald-100 text-[10px] shrink-0 space-y-1.5">
                  <div className="flex justify-between items-center font-bold text-emerald-800 px-1">
                    <span>{isEn ? 'Select Option Below:' : 'नीचे विकल्प चुनें:'}</span>
                    <button
                      onClick={() => handleBookingStepInput('cancel')}
                      className="text-[9px] text-red-600 hover:underline cursor-pointer"
                    >
                      {isEn ? '❌ Cancel' : '❌ रद्द करें'}
                    </button>
                  </div>

                  {bookingState.step === 'DOCTOR' && (
                    <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
                      {quickDoctors.map((docName, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            addUserMessage(docName);
                            handleBookingStepInput(docName);
                          }}
                          className="bg-white border border-emerald-300 hover:bg-emerald-600 hover:text-white text-emerald-900 px-2 py-1 rounded-lg shrink-0 font-medium transition cursor-pointer"
                        >
                          {docName}
                        </button>
                      ))}
                    </div>
                  )}

                  {bookingState.step === 'DATE' && (
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => {
                          addUserMessage(`Today (${todayStr})`);
                          handleBookingStepInput(todayStr);
                        }}
                        className="bg-emerald-600 text-white px-2.5 py-1 rounded-lg font-bold cursor-pointer"
                      >
                        {isEn ? 'Today' : 'आज'}
                      </button>
                      <button
                        onClick={() => {
                          addUserMessage(`Tomorrow (${tomorrowStr})`);
                          handleBookingStepInput(tomorrowStr);
                        }}
                        className="bg-white border border-emerald-300 text-emerald-900 px-2.5 py-1 rounded-lg font-bold cursor-pointer"
                      >
                        {isEn ? 'Tomorrow' : 'कल'}
                      </button>
                    </div>
                  )}

                  {bookingState.step === 'TIME' && (
                    <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
                      {quickTimes.map((tSlot, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            addUserMessage(tSlot);
                            handleBookingStepInput(tSlot);
                          }}
                          className="bg-white border border-emerald-300 hover:bg-emerald-600 hover:text-white text-emerald-900 px-2 py-1 rounded-lg shrink-0 font-medium transition cursor-pointer"
                        >
                          {tSlot}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Quick Action Suggestion Chips (when not in booking mode) */}
              {!bookingState && (
                <div className="px-3 py-2 bg-slate-50 border-t border-slate-100 flex flex-col gap-1 shrink-0">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <HelpCircle className="h-3 w-3" />
                    {isEn ? 'Quick Actions & Topics' : 'त्वरित सहायता एवं विषय'}
                  </span>
                  <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                    {sampleQuestions.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (item.action) {
                            item.action();
                          } else if (item.query) {
                            handleSendMessage(item.query);
                          }
                        }}
                        className="bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-[10px] font-semibold text-slate-700 px-2.5 py-1 rounded-full shrink-0 cursor-pointer transition"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Text Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(messageText);
                }}
                className="p-3 border-t border-slate-100 bg-white rounded-b-2xl flex gap-2 items-center shrink-0"
              >
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder={
                    bookingState
                      ? (isEn ? "Type response..." : "उत्तर टाइप करें...")
                      : (isEn ? "Ask me anything or type 'book'..." : "प्रश्न पूछें या 'book' टाइप करें...")
                  }
                  className="flex-1 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium"
                  id="chat-text-input"
                />
                <button
                  type="submit"
                  disabled={!messageText.trim()}
                  className="h-8 w-8 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white rounded-xl flex items-center justify-center cursor-pointer shrink-0 transition"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}
