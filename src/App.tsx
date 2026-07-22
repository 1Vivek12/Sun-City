import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Departments from './components/Departments';
import Doctors from './components/Doctors';
import DirectorProfile from './components/DirectorProfile';
import Pmjay from './components/Pmjay';
import BookingForm from './components/BookingForm';
import BlogSection from './components/BlogSection';
import TrustDiagnostic from './components/TrustDiagnostic';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import BottomNavigation from './components/BottomNavigation';
import Infrastructure from './components/Infrastructure';
import ContactWidgets from './components/ContactWidgets';
import HospitalSlider from './components/HospitalSlider';
import EmergencyPopup from './components/EmergencyPopup';
/**
 * Main application component.
 * - Provides language toggle (Hindi/English).
 * - Manages navigation between sections.
 * - Holds temporary booking pre‑selection state.
 * - Renders a full‑screen slider as background.
 */
export default function App() {
  // Language & navigation state
  const [language, setLanguage] = useState<'hi' | 'en'>('en');
  const [activeSection, setActiveSection] = useState('hero');

  // Booking form pre‑selection state
  const [preselectedDept, setPreselectedDept] = useState('');
  const [preselectedDoctor, setPreselectedDoctor] = useState('');
  const [preselectedItemName, setPreselectedItemName] = useState('');

  const isEn = language === 'en';

  // Helper to navigate and optionally clear booking selections
  const navigateTo = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId !== 'booking') {
      setPreselectedDept('');
      setPreselectedDoctor('');
      setPreselectedItemName('');
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Booking shortcuts used by child components
  const handleBookWithDept = (deptId: string) => {
    setPreselectedDept(deptId);
    setPreselectedDoctor('');
    setPreselectedItemName('');
    navigateTo('booking');
  };

  const handleBookWithDoctor = (doctorId: string, deptId: string) => {
    setPreselectedDoctor(doctorId);
    setPreselectedDept(deptId);
    setPreselectedItemName('');
    navigateTo('booking');
  };

  const handleBookItem = (itemName: string) => {
    setPreselectedItemName(itemName);
    setPreselectedDept('');
    setPreselectedDoctor('');
    navigateTo('booking');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col justify-between pb-20 lg:pb-0 relative">
      {/* Background layer removed to fix mobile overlap */}

      {/* Sticky side mascots – visible on all screens */}
      <div className="fixed left-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 2xl:w-72 z-0 pointer-events-none opacity-40 lg:opacity-90">
        <img src="/dr-abhay.png" alt="Doctor Side Mascot" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/50 to-slate-50" />
      </div>
      <div className="fixed right-0 top-0 bottom-0 w-24 md:w-32 lg:w-48 2xl:w-72 z-0 pointer-events-none opacity-40 lg:opacity-90">
        <img src="/generic-3d.png" alt="Health Mascot" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-50/50 to-slate-50" />
      </div>

      {/* Main overlay content */}
      <div className="relative z-10">
        <Header language={language} setLanguage={setLanguage} onNavigate={navigateTo} activeSection={activeSection} />
        <div className="bg-emerald-50 text-emerald-800 text-center py-2 px-4 text-xs font-semibold border-b border-emerald-100">
          📍 {isEn ? 'Fully Compliant Patient Portal: Your data is secure and protected under NHA security guidelines.' : 'सुरक्षित मरीज पोर्टल: राष्ट्रीय स्वास्थ्य प्राधिकरण सुरक्षा नियमों के तहत आपका डेटा पूर्णतः सुरक्षित है।'}
        </div>
        <main className="flex-grow">
          {activeSection === 'hero' && <Hero language={language} onNavigate={navigateTo} onBookWithDoctor={handleBookWithDoctor} />}
          {activeSection === 'departments' && <Departments language={language} onBookWithDept={handleBookWithDept} />}
          {activeSection === 'director' && <DirectorProfile language={language} />}
          {activeSection === 'doctors' && <Doctors language={language} onBookWithDoctor={handleBookWithDoctor} />}
          {activeSection === 'trust-diagnostic' && <TrustDiagnostic language={language} />}
          {activeSection === 'pmjay' && <Pmjay language={language} />}
          {activeSection === 'infrastructure' && <Infrastructure language={language} />}
          {activeSection === 'booking' && (
            <BookingForm
              language={language}
              preselectedDeptId={preselectedDept}
              preselectedDoctorId={preselectedDoctor}
              preselectedItemName={preselectedItemName}
            />
          )}
          {activeSection === 'blog' && <BlogSection language={language} />}
        </main>
      </div>

      {/* Footer and floating assistants */}
      <AiAssistant language={language} />
      <ContactWidgets language={language} />
      <EmergencyPopup language={language} />
      <BottomNavigation language={language} activeSection={activeSection} onNavigate={navigateTo} />
    </div>
  );
}
