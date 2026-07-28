import React, { useState } from 'react';
import { Appointment } from '../types';
import { DEPARTMENTS, DOCTORS } from '../data';
import { Search, Calendar, Phone, ShieldCheck, User, Clock, CheckCircle } from 'lucide-react';

interface MyBookingsProps {
  language: 'hi' | 'en';
}

export default function MyBookings({ language }: MyBookingsProps) {
  const isEn = language === 'en';
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bookings, setBookings] = useState<Appointment[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      setErrorMsg(isEn ? 'Please enter a valid phone number.' : 'कृपया एक वैध मोबाइल नंबर दर्ज करें।');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');
    setHasSearched(true);

    try {
      const response = await fetch(`/api/bookings?phone=${encodeURIComponent(phoneNumber.trim())}`);
      const data = await response.json();
      if (Array.isArray(data)) {
        setBookings(data);
      } else {
        setErrorMsg(isEn ? 'Failed to fetch record logs.' : 'रिकॉर्ड लाने में विफल।');
      }
    } catch (err) {
      console.error("Fetch bookings error:", err);
      setErrorMsg(isEn ? 'Network error.' : 'नेटवर्क त्रुटि।');
    } finally {
      setIsLoading(false);
    }
  };

  const getDocName = (id: string) => {
    const d = DOCTORS.find(doc => doc.id === id);
    return d ? (isEn ? d.name : (d.nameHindi || d.name)) : (isEn ? 'Consulting Doctor' : 'परामर्शदाता डॉक्टर');
  };

  const getDeptName = (id: string) => {
    const d = DEPARTMENTS.find(dept => dept.id === id);
    return d ? (isEn ? d.name : d.nameHindi) : 'General Specialty';
  };

  return (
    <section id="bookings" className="py-10 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
            {isEn ? 'PATIENT DATA PORTAL' : 'रोगी पोर्टल'}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            {isEn ? 'Retrieve My Scheduled Appointments' : 'अपने बुक किए गए अपॉइंटमेंट देखें'}
          </h2>
          <p className="text-slate-500 text-xs md:text-sm">
            {isEn 
              ? 'Enter your registered mobile phone number to find active consultations, timing cards, and referral receipts.'
              : 'पंजीकृत मोबाइल नंबर दर्ज करके अपनी पूर्व में बुक की गई अपॉइंटमेंट, तारीखें और समय का विवरण प्राप्त करें।'}
          </p>
        </div>

        {/* Input box */}
        <div className="bg-slate-55 p-6 rounded-2xl border border-slate-200/80 max-w-lg mx-auto bg-slate-50">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                {isEn ? 'Registered Mobile Number' : 'पंजीकृत मोबाइल नंबर'}
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Phone className="h-4 w-4" />
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder={isEn ? "e.g. 9876543210" : "उदा. 9876543210"}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold text-xs rounded-xl transition shadow flex items-center gap-1 shrink-0"
                >
                  {isLoading ? (
                    <span className="h-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Search className="h-4 w-4" />
                  )}
                  <span>{isEn ? 'Find' : 'खोजें'}</span>
                </button>
              </div>
            </div>

            {errorMsg && <p className="text-xs text-red-600 font-semibold">{errorMsg}</p>}
          </form>
        </div>

        {/* Bookings result */}
        {hasSearched && (
          <div className="space-y-6" id="my-bookings-results-container">
            <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <span>{isEn ? 'Active Appointment Logs' : 'आपके अपॉइंटमेंट लॉग्स'}</span>
              <span className="text-xs font-normal text-slate-400">({bookings.length} {isEn ? 'found' : 'मिले'})</span>
            </h3>

            {bookings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="p-5 bg-white border border-slate-150 rounded-2xl shadow-sm space-y-4 hover:border-emerald-200 transition-colors"
                  >
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-[10px] font-black uppercase bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-100">
                        ID: {booking.id}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase bg-yellow-50 text-yellow-800 px-2.5 py-0.5 rounded border border-yellow-200 flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-yellow-600 fill-yellow-100" />
                        {isEn ? 'Confirmed' : 'पुष्टीकृत'}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <p className="flex justify-between">
                        <span className="text-slate-400">{isEn ? 'Patient Name' : 'मरीज का नाम'}:</span>
                        <strong className="text-slate-800">{booking.patientName}</strong>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-slate-400">{isEn ? 'Speciality Department' : 'विभाग'}:</span>
                        <strong className="text-slate-800">{getDeptName(booking.departmentId)}</strong>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-slate-400">{isEn ? 'Doctor' : 'डॉक्टर'}:</span>
                        <strong className="text-slate-800">{getDocName(booking.doctorId)}</strong>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-slate-400">{isEn ? 'Date' : 'दिनांक'}:</span>
                        <strong className="text-slate-800">{booking.date}</strong>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-slate-400">{isEn ? 'Reserved Time Slot' : 'समय'}:</span>
                        <strong className="text-slate-800">{booking.timeSlot}</strong>
                      </p>
                    </div>

                    {booking.symptoms && (
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-[11px] text-slate-500">
                        <strong>{isEn ? 'Diagnosis Reference/Reason:' : 'कारण:'}</strong> {booking.symptoms}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <p className="text-slate-600 font-semibold">{isEn ? 'No appointment records found for this phone number.' : 'इस मोबाइल नंबर पर कोई अपॉइंटमेंट नहीं मिला।'}</p>
                <p className="text-xs text-slate-400 mt-1">{isEn ? 'Ensure you typed the same phone number used during appointment registration.' : 'सुनिश्चित करें कि आपने वही नंबर दर्ज किया है जो बुकिंग के दौरान दिया था।'}</p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
