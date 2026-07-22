import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, HelpCircle, Minimize2, Maximize2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { getLocalBotResponse } from '../utils/localBot';

interface AiAssistantProps {
  language: 'hi' | 'en';
}

export default function AiAssistant({ language }: AiAssistantProps) {
  const isEn = language === 'en';
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: isEn 
        ? "Hello! I am Sun City Hospital's digital assistant. Ask me about doctors, tests, PM-JAY cashless surgeries or 24/7 emergencies!"
        : "नमस्ते! मैं सन सिटी हॉस्पिटल का डिजिटल सहायक हूँ। मुझसे डॉक्टरों, टेस्ट, आयुष्मान (PM-JAY) योजना या आपातकालीन सेवाओं के बारे में पूछें!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory, isOpen, isMinimized]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: 'user-' + Math.random().toString(36).substring(2, 9),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const replyText = getLocalBotResponse(textToSend, language);
    const assistantMsg: ChatMessage = {
      id: 'assistant-' + Math.random().toString(36).substring(2, 9),
      sender: 'assistant',
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMsg, assistantMsg]);
    setMessageText('');
  };

  const sampleQuestions = isEn 
    ? ["Is PM-JAY accepted?", "Who is the cardiologist?", "List lab tests"]
    : ["क्या यहाँ आयुष्मान चलता है?", "कार्डियोलॉजी डॉक्टर कौन है?", "ब्लड टेस्ट लिस्ट"];

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
        <div className={`bg-white/95 backdrop-blur-xl border border-emerald-100 rounded-2xl shadow-2xl transition-all duration-300 flex flex-col ${isMinimized ? 'h-14 w-72 md:w-80' : 'h-[460px] w-[calc(100vw-2rem)] sm:w-[320px] md:w-[360px]'}`} id="ai-chat-window-panel">
          <div className="bg-slate-900 text-white p-3 px-4 rounded-t-2xl flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-emerald-400" />
              <div>
                <h4 className="text-xs font-bold flex items-center gap-1">
                  <span>Sun City Helper</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </h4>
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
              <div className="flex-grow overflow-y-auto p-4 space-y-3 text-xs">
                {chatHistory.map((msg) => {
                  const isAss = msg.sender === 'assistant';
                  return (
                    <div key={msg.id} className={`flex ${isAss ? 'justify-start' : 'justify-end'}`}>
                      <div className={`max-w-[85%] rounded-2xl p-3 space-y-1 ${isAss ? 'bg-slate-100 text-slate-800' : 'bg-emerald-600 text-white'}`}>
                        <p className="leading-relaxed whitespace-pre-line font-medium">{msg.text}</p>
                        <span className="block text-[8px] text-right opacity-60">{msg.timestamp}</span>
                      </div>
                    </div>
                  );
                })}
                <div ref={chatEndRef} />
              </div>

              <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex flex-col gap-1 shrink-0">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <HelpCircle className="h-3 w-3" />
                  {isEn ? 'Suggested Questions' : 'सुझाए गए प्रश्न'}
                </span>
                <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {sampleQuestions.map((q, idx) => (
                    <button key={idx} onClick={() => handleSendMessage(q)} className="bg-white border border-slate-200 hover:border-emerald-300 text-[9px] text-slate-600 px-2 py-0.5 rounded-full shrink-0 cursor-pointer">
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(messageText); }} className="p-3 border-t border-slate-100 bg-white rounded-b-2xl flex gap-2 items-center shrink-0">
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder={isEn ? "Ask me anything..." : "प्रश्न यहाँ टाइप करें..."}
                  className="flex-1 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 rounded-xl px-3 py-1.5 text-xs text-slate-700 font-medium"
                  id="chat-text-input"
                />
                <button type="submit" disabled={!messageText.trim()} className="h-7 w-7 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center justify-center cursor-pointer shrink-0">
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
