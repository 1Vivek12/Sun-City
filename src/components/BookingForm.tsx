import React, { useState, useEffect } from 'react';
import { DEPARTMENTS, DOCTORS } from '../data';
import { Calendar, Clock, User, Phone, Mail, Stethoscope, AlertCircle, Sparkles, CheckCircle } from 'lucide-react';
import { saveBooking } from '../utils/bookingStore';

interface BookingFormProps {
  language: 'hi' | 'en';
  preselectedDeptId?: string;
  preselectedDoctorId?: string;
  preselectedItemName?: string;
  onBookingSuccess?: () => void;
}

export default function BookingForm({
  language,
  preselectedDeptId = '',
  preselectedDoctorId = '',
  preselectedItemName = '',
  onBookingSuccess
}: BookingFormProps) {
  const isEn = language === 'en';

  const [formData, setFormData] = useState({
    patientName: '',
    patientPhone: '',
    patientEmail: '',
    departmentId: preselectedDeptId,
    doctorId: preselectedDoctorId,
    date: '',
    timeSlot: '',
    symptoms: preselectedItemName ? `Booking request for: ${preselectedItemName}` : '',
  });

  const [doctorsList, setDoctorsList] = useState(DOCTORS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [successBooking, setSuccessBooking] = useState<any>(null);

  // Synchronize preselected props
  useEffect(() => {
    if (preselectedDeptId) {
      setFormData(prev => ({ ...prev, departmentId: preselectedDeptId }));
    }
  }, [preselectedDeptId]);

  useEffect(() => {
    if (preselectedDoctorId) {
      setFormData(prev => ({ ...prev, doctorId: preselectedDoctorId }));
    }
  }, [preselectedDoctorId]);

  useEffect(() => {
    if (preselectedItemName) {
      setFormData(prev => ({ ...prev, symptoms: `Request: ${preselectedItemName}` }));
    }
  }, [preselectedItemName]);

  // Dynamically filter doctors based on selected department name
  useEffect(() => {
    if (formData.departmentId) {
      const selectedDept = DEPARTMENTS.find(d => d.id === formData.departmentId);
      if (selectedDept) {
        const filteredDocs = DOCTORS.filter(doc => doc.specialties.includes(selectedDept.name));
        setDoctorsList(filteredDocs);
        
        // If current selected doctor is not in the filtered list, reset doctor selection
        const isCurrentDocInFiltered = filteredDocs.some(d => d.id === formData.doctorId);
        if (!isCurrentDocInFiltered) {
          setFormData(prev => ({ ...prev, doctorId: '' }));
        }
      }
    } else {
      setDoctorsList(DOCTORS);
    }
  }, [formData.departmentId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    if (!formData.patientName || !formData.patientPhone || !formData.departmentId || !formData.doctorId || !formData.date || !formData.timeSlot) {
      setSubmitError(isEn ? 'Please fill all mandatory fields marked with (*)' : 'कृपया (*) वाले सभी अनिवार्य फ़ील्ड भरें।');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));

      const newBooking = saveBooking({
        patientName: formData.patientName,
        phone: formData.patientPhone,
        date: formData.date,
        timeSlot: formData.timeSlot,
        department: formData.departmentId,
        doctor: formData.doctorId
      });

      // Prepare WhatsApp Message
      const deptName = getDeptName(formData.departmentId);
      const doctorName = getDoctorName(formData.doctorId);
      
      const whatsappMessage = `*New Appointment Booking* 🏥\n\n*Name:* ${formData.patientName}\n*Phone:* ${formData.patientPhone}\n*Department:* ${deptName}\n*Doctor:* ${doctorName}\n*Date:* ${formData.date}\n*Time:* ${formData.timeSlot}${formData.symptoms ? `\n*Symptoms:* ${formData.symptoms}` : ''}`;
      
      const whatsappUrl = `https://wa.me/918669062143?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      setSuccessBooking(newBooking);
      
      // Reset form
      setFormData({
        patientName: '',
        patientPhone: '',
        patientEmail: '',
        departmentId: '',
        doctorId: '',
        date: '',
        timeSlot: '',
        symptoms: '',
      });
      if (onBookingSuccess) {
        onBookingSuccess();
      }
    } catch (err) {
      console.error("Booking error:", err);
      setSubmitError(isEn ? 'Network error. Please try again.' : 'नेटवर्क त्रुटि। कृपया पुनः प्रयास करें।');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDoctorName = (id: string) => {
    const d = DOCTORS.find(doc => doc.id === id);
    return d ? d.name : '';
  };

  const getDeptName = (id: string) => {
    const d = DEPARTMENTS.find(dept => dept.id === id);
    return d ? (isEn ? d.name : d.nameHindi) : '';
  };

  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
  ];

  return (
    <section id="booking" className="py-6 md:py-16 bg-gradient-to-tr from-teal-50/50 via-slate-50 to-emerald-50/50">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-lg overflow-hidden" id="booking-container-card">
          
          <div className="bg-slate-900 text-white p-4 sm:p-6 md:p-8 relative">
            <div className="absolute top-0 right-0 h-32 w-32 bg-emerald-500/10 rounded-full blur-2xl" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-emerald-400">
              {isEn ? 'INSTANT PRE-BOOKING PORTAL' : 'त्वरित अपॉइंटमेंट बुकिंग'}
            </span>
            <h2 className="text-lg sm:text-xl md:text-3xl font-extrabold mt-1">
              {isEn ? 'Schedule Your Clinical Consultation' : 'डॉक्टर से परामर्श का समय तय करें'}
            </h2>
            <p className="text-[11px] md:text-sm text-slate-300 mt-1 md:mt-2 max-w-2xl leading-relaxed">
              {isEn 
                ? 'Fill out this simple, secure form. Your clinical data privacy is fully guaranteed, adhering to Indian digital health privacy standards.'
                : 'इस सुरक्षित फॉर्म को भरें। आपकी व्यक्तिगत और चिकित्सकीय जानकारी पूरी तरह से गोपनीय और भारतीय स्वास्थ्य मानकों के अनुसार सुरक्षित रखी जाती है।'}
            </p>
          </div>

          <div className="p-4 sm:p-6 md:p-10">
            {successBooking ? (
              /* Success Message card */
              <div className="text-center py-8 space-y-6 animate-fadeIn" id="booking-success-box">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="h-10 w-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-slate-800">
                    {isEn ? 'Appointment Confirmed Successfully!' : 'अपॉइंटमेंट सफलतापूर्वक पक्का हुआ!'}
                  </h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    {isEn 
                      ? 'We have reserved your slot. Kindly show this page or mention your registered phone number at the hospital front desk upon arrival.'
                      : 'हमने आपका समय आरक्षित कर दिया है। सन सिटी हॉस्पिटल पहुंचने पर रिसेप्शन काउंटर पर अपना पंजीकृत मोबाइल नंबर बताएं।'}
                  </p>
                </div>

                {/* Booking Receipt summary */}
                <div className="bg-slate-50 border border-slate-150 rounded-2xl p-5 text-left text-xs max-w-md mx-auto space-y-3">
                  <div className="flex justify-between border-b border-slate-200/60 pb-2">
                    <span className="text-slate-400 font-bold uppercase tracking-wider">{isEn ? 'Appointment ID' : 'अपॉइंटमेंट आईडी'}</span>
                    <span className="font-extrabold text-emerald-700">{successBooking.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">{isEn ? 'Patient Name' : 'मरीज का नाम'}</span>
                    <span className="font-bold text-slate-800">{successBooking.patientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">{isEn ? 'Department' : 'विभाग'}</span>
                    <span className="font-bold text-slate-800">{getDeptName(successBooking.departmentId)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">{isEn ? 'Doctor' : 'डॉक्टर'}</span>
                    <span className="font-bold text-slate-800">{getDoctorName(successBooking.doctorId)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">{isEn ? 'Date' : 'दिनांक'}</span>
                    <span className="font-bold text-slate-800">{successBooking.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">{isEn ? 'Time Slot' : 'समय का स्लॉट'}</span>
                    <span className="font-bold text-slate-800">{successBooking.timeSlot}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={() => setSuccessBooking(null)}
                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition"
                  >
                    {isEn ? 'Book Another Slot' : 'नया अपॉइंटमेंट बुक करें'}
                  </button>
                  <button
                    onClick={() => {
                      const bookingsTab = document.getElementById('nav-bookings');
                      if (bookingsTab) bookingsTab.click();
                    }}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    {isEn ? 'View My Bookings' : 'मेरी सभी बुकिंग देखें'}
                  </button>
                </div>
              </div>
            ) : (
              /* Regular form */
              <form onSubmit={handleSubmit} className="space-y-4" id="appointment-form-element">
                
                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-xl text-[11px] flex items-center gap-2.5">
                    <AlertCircle className="h-4.5 w-4.5 text-red-600 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Patient Name */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">
                      {isEn ? 'Patient Full Name *' : 'मरीज का पूरा नाम *'}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <User className="h-3.5 w-3.5" />
                      </span>
                      <input
                        type="text"
                        required
                        placeholder={isEn ? "e.g. Ramesh Kumar" : "उदा. रमेश कुमार"}
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-xs md:text-sm font-medium transition-all"
                        id="form-patient-name"
                      />
                    </div>
                  </div>

                  {/* Patient Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">
                      {isEn ? 'Mobile Phone Number *' : 'मोबाइल फोन नंबर *'}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <Phone className="h-3.5 w-3.5" />
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder={isEn ? "e.g. 9876543210" : "उदा. 9876543210"}
                        value={formData.patientPhone}
                        onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-xs md:text-sm font-medium transition-all"
                        id="form-patient-phone"
                      />
                    </div>
                  </div>

                  {/* Email (Optional) */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">
                      {isEn ? 'Email Address (Optional)' : 'ईमेल आईडी (वैकल्पिक)'}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <Mail className="h-3.5 w-3.5" />
                      </span>
                      <input
                        type="email"
                        placeholder="patient@example.com"
                        value={formData.patientEmail}
                        onChange={(e) => setFormData({ ...formData, patientEmail: e.target.value })}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-xs md:text-sm font-medium transition-all"
                        id="form-patient-email"
                      />
                    </div>
                  </div>

                  {/* Department select */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">
                      {isEn ? 'Select Speciality Department *' : 'विभाग चुनें *'}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <Stethoscope className="h-3.5 w-3.5" />
                      </span>
                      <select
                        required
                        value={formData.departmentId}
                        onChange={(e) => setFormData({ ...formData, departmentId: e.target.value })}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-xs md:text-sm font-semibold text-slate-700 transition-all"
                        id="form-dept-select"
                      >
                        <option value="">{isEn ? '-- Select Speciality --' : '-- विशेषज्ञता विभाग चुनें --'}</option>
                        {DEPARTMENTS.map(d => (
                          <option key={d.id} value={d.id}>{isEn ? d.name : d.nameHindi}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Doctor select */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">
                      {isEn ? 'Select Specialist Doctor *' : 'डॉक्टर चुनें *'}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <User className="h-3.5 w-3.5" />
                      </span>
                      <select
                        required
                        value={formData.doctorId}
                        onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-xs md:text-sm font-semibold text-slate-700 transition-all"
                        id="form-doc-select"
                      >
                        <option value="">{isEn ? '-- Select Doctor --' : '-- डॉक्टर चुनें --'}</option>
                        {doctorsList.map(doc => (
                          <option key={doc.id} value={doc.id}>{doc.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Appointment Date */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">
                      {isEn ? 'Preferred Date *' : 'पसंदीदा तारीख *'}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <Calendar className="h-3.5 w-3.5" />
                      </span>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-xs md:text-sm font-medium transition-all text-slate-700"
                        id="form-date-input"
                      />
                    </div>
                  </div>

                  {/* Appointment Time Slot */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">
                      {isEn ? 'Preferred Time Slot *' : 'पसंदीदा समय *'}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <Clock className="h-3.5 w-3.5" />
                      </span>
                      <select
                        required
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-xs md:text-sm font-semibold text-slate-700 transition-all"
                        id="form-timeslot-select"
                      >
                        <option value="">{isEn ? '-- Select Time Slot --' : '-- समय चुनें --'}</option>
                        {timeSlots.map((slot, i) => (
                          <option key={i} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* symptoms or comments */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">
                    {isEn ? 'Describe Symptoms / Reason for visit' : 'लक्षण या बीमारी का विवरण लिखें'}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={isEn ? "Provide key information about your symptoms..." : "लक्षणों के बारे में जानकारी दें..."}
                    value={formData.symptoms}
                    onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-xs md:text-sm font-medium transition-all"
                    id="form-symptoms-input"
                  />
                </div>

                {/* Data Privacy Disclaimer */}
                <div className="bg-emerald-50/50 rounded-xl p-3 border border-emerald-100 flex items-start gap-2.5">
                  <AlertCircle className="h-4.5 w-4.5 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-[10px] md:text-[11px] text-slate-600 leading-relaxed">
                    <strong>{isEn ? 'Secure Clinical Compliance:' : 'डेटा सुरक्षा सूचना:'}</strong>{' '}
                    {isEn 
                      ? 'Sun City Hospital fully respects medical ethics and privacy laws in India. We do not sell or share patient contact details or medical histories with third parties. All booking credentials are secure and processed with high-grade transport layer encryption.'
                      : 'सन सिटी हॉस्पिटल मरीजों की गोपनीयता का पूरा सम्मान करता है। आपका विवरण या स्वास्थ्य इतिहास किसी अन्य तीसरे पक्ष के साथ साझा नहीं किया जाता है।'}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 md:py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-extrabold text-xs sm:text-sm md:text-base rounded-xl transition shadow-md shadow-emerald-50 hover:shadow-emerald-100 flex items-center justify-center gap-2"
                  id="form-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{isEn ? 'Processing Booking...' : 'बुकिंग की जा रही है...'}</span>
                    </>
                  ) : (
                    <span>{isEn ? 'Confirm Appointment Booking' : 'अपॉइंटमेंट बुकिंग की पुष्टि करें'}</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
