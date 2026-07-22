import { DEPARTMENTS, DOCTORS, DIAGNOSTICS, HEALTH_PACKAGES } from '../data';

export function getLocalBotResponse(message: string, language: 'hi' | 'en'): string {
  const query = message.toLowerCase().trim();
  const isEn = language === 'en';

  // 1. PM-JAY / Ayushman Bharat
  if (
    query.includes('pmjay') ||
    query.includes('pm-jay') ||
    query.includes('ayushman') ||
    query.includes('आयुष्मान') ||
    query.includes('गोल्डन कार्ड') ||
    query.includes('golden card') ||
    query.includes('5 lakh') ||
    query.includes('5 लाख') ||
    query.includes('मुफ्त इलाज') ||
    query.includes('cashless')
  ) {
    return isEn
      ? `🏥 *Ayushman Bharat (PM-JAY) Center at Sun City Hospital*\n\n` +
        `• *Benefit:* 100% Cashless treatment up to ₹5 Lakhs per family per year.\n` +
        `• *Required Documents:*\n  1. Ayushman Golden Card (e-Card)\n  2. Patient Aadhaar Card\n  3. Ration Card (with family names)\n  4. Aadhaar-linked Mobile Number\n` +
        `• *Helpdesk Number:* +91 8669062143\n` +
        `• *Location:* PM-JAY Helpdesk near Main Reception Lobby.`
      : `🏥 *सन सिटी हॉस्पिटल - आयुष्मान भारत (PM-JAY) सुविधा*\n\n` +
        `• *लाभ:* प्रति परिवार प्रति वर्ष ₹5 लाख तक का 100% मुफ़्त और कैशलेस इलाज।\n` +
        `• *जरूरी दस्तावेज:*\n  1. आयुष्मान गोल्डन कार्ड\n  2. मरीज का आधार कार्ड\n  3. राशन कार्ड (परिवार के नाम सहित)\n  4. आधार से जुड़ा मोबाइल नंबर\n` +
        `• *हेल्पडेस्क नंबर:* +91 8669062143\n` +
        `• *सहायता:* मुख्य रिसेप्शन लॉबी के पास आयुष्मान हेल्पडेस्क पर संपर्क करें।`;
  }

  // 2. Emergency & Ambulance
  if (
    query.includes('emergency') ||
    query.includes('icu') ||
    query.includes('nicu') ||
    query.includes('ambulance') ||
    query.includes('आपातकालीन') ||
    query.includes('एम्बुलेंस') ||
    query.includes('24/7') ||
    query.includes('24 घंटे')
  ) {
    return isEn
      ? `🚨 *24x7 Emergency & Critical Care Services*\n\n` +
        `• *Emergency Numbers:* +91 7607781656, +91 8669062143\n` +
        `• *Ambulance Dispatch:* 5 fully-equipped emergency ambulances ready 24/7 in Gorakhpur.\n` +
        `• *ICU & NICU:* Advanced ventilators and round-the-clock intensivist monitoring.`
      : `🚨 *24/7 आपातकालीन और क्रिटिकल केयर सेवाएं*\n\n` +
        `• *इमरजेंसी नंबर्स:* +91 7607781656, +91 8669062143\n` +
        `• *एम्बुलेंस सेवा:* गोरखपुर में 5 सुसज्जित आपातकालीन एम्बुलेंस हर समय तैयार हैं।\n` +
        `• *ICU और NICU:* वेंटिलेटर सुविधाओं और वरिष्ठ विशेषज्ञों के साथ 24 घंटे सक्रिय।`;
  }

  // 3. Director / MD Info
  if (
    query.includes('director') ||
    query.includes('md') ||
    query.includes('abhay') ||
    query.includes('अभय') ||
    query.includes('निदेशक') ||
    query.includes('award') ||
    query.includes('अवर्ड') ||
    query.includes('पुरस्कार')
  ) {
    return isEn
      ? `👨‍⚕️ *Our Managing Director (MD)*\n\n` +
        `• *Dr. Abhay Kumar Sharma (MD)*\n` +
        `• *Qualifications:* MBBS, Fellowship in Pediatrics, General Physician\n` +
        `• *Achievements:* Winner of 'City Health Excellence Award 2026' for outstanding healthcare leadership.\n` +
        `• *Vision:* Providing compassionate, affordable, and world-class multi-specialty medical care.`
      : `👨‍⚕️ *हमारे प्रबंध निदेशक (Managing Director)*\n\n` +
        `• *डॉ. अभय कुमार शर्मा (MD)*\n` +
        `• *योग्यता:* MBBS, फेलोशिप इन पीडियाट्रिक्स, जनरल फिजिशियन\n` +
        `• *उपलब्धियां:* उत्कृष्ट स्वास्थ्य सेवाओं के लिए 'सिटी हेल्थ एक्सीलेंस अवॉर्ड 2026' से सम्मानित।\n` +
        `• *उद्देश्य:* गोरखपुर और पूर्वांचल क्षेत्र में हर मरीज को उच्चस्तरीय और किफायती इलाज देना।`;
  }

  // 4. Contact & Address / Location / Map
  if (
    query.includes('address') ||
    query.includes('location') ||
    query.includes('map') ||
    query.includes('where') ||
    query.includes('पता') ||
    query.includes('स्थान') ||
    query.includes('फोन') ||
    query.includes('phone') ||
    query.includes('number') ||
    query.includes('नंबर') ||
    query.includes('contact') ||
    query.includes('संपर्क')
  ) {
    return isEn
      ? `📍 *Sun City Hospital Location & Contact Info*\n\n` +
        `• *Address:* Sun City Hospital, Gorakhpur, Uttar Pradesh\n` +
        `• *Phone / WhatsApp:* +91 7607781656 | +91 8669062143\n` +
        `• *Google Map Link:* https://share.google/YcWbBZ4XXarzoGzt7\n` +
        `• *Landmark:* Near Padleganj Road, Siktaur, Gorakhpur.`
      : `📍 *सन सिटी हॉस्पिटल पता व संपर्क जानकारी*\n\n` +
        `• *पता:* सन सिटी हॉस्पिटल, गोरखपुर, उत्तर प्रदेश\n` +
        `• *फोन / वॉट्सऐप:* +91 7607781656 | +91 8669062143\n` +
        `• *गूगल मैप लिंक:* https://share.google/YcWbBZ4XXarzoGzt7\n` +
        `• *लैंडमार्क:* सिकटौर के सामने, पाडलेगंज रोड, गोरखपुर।`;
  }

  // 5. Specific Doctor Search
  const matchedDoctor = DOCTORS.find(doc => 
    query.includes(doc.name.toLowerCase()) || 
    doc.name.toLowerCase().split(' ').some(part => part.length > 3 && query.includes(part))
  );
  if (matchedDoctor) {
    return isEn
      ? `👨‍⚕️ *Doctor Information: ${matchedDoctor.name}*\n\n` +
        `• *Specialty:* ${matchedDoctor.specialties.join(', ')}\n` +
        `• *Qualifications:* ${matchedDoctor.education}\n` +
        `• *Experience:* ${matchedDoctor.experience}\n` +
        `• *OPD Timings:* ${matchedDoctor.availability}\n\n` +
        `👉 Type "book" or click "Book Appointment" to schedule a visit!`
      : `👨‍⚕️ *डॉक्टर जानकारी: ${matchedDoctor.name}*\n\n` +
        `• *विशेषज्ञता:* ${matchedDoctor.specialties.join(', ')}\n` +
        `• *योग्यता:* ${matchedDoctor.education}\n` +
        `• *अनुभव:* ${matchedDoctor.experience}\n` +
        `• *ओपीडी समय:* ${matchedDoctor.availability}\n\n` +
        `👉 अपॉइंटमेंट के लिए "book" टाइप करें या नीचे बटन पर क्लिक करें!`;
  }

  // 6. Specific Department Search
  const matchedDept = DEPARTMENTS.find(dept => 
    query.includes(dept.name.toLowerCase()) ||
    query.includes(dept.nameHindi.toLowerCase()) ||
    dept.id.includes(query)
  );
  if (matchedDept) {
    const deptDocs = DOCTORS.filter(doc => doc.specialties.includes(matchedDept.name));
    const docNames = deptDocs.length > 0 
      ? deptDocs.map(d => `  • ${d.name} (${d.education})`).join('\n')
      : isEn ? '  • Senior Specialists Available 24/7' : '  • वरिष्ठ विशेषज्ञ 24 घंटे उपलब्ध';

    return isEn
      ? `🏥 *${matchedDept.name} Department*\n\n` +
        `• *Overview:* ${matchedDept.description}\n` +
        `• *Treatments:* ${matchedDept.treatments.join(', ')}\n\n` +
        `👨‍⚕️ *Specialist Doctors:*\n${docNames}`
      : `🏥 *${matchedDept.nameHindi}*\n\n` +
        `• *विवरण:* ${matchedDept.descriptionHindi}\n` +
        `• *उपचार:* ${matchedDept.treatmentsHindi.join(', ')}\n\n` +
        `👨‍⚕️ *विशेषज्ञ डॉक्टर:*\n${docNames}`;
  }

  // 7. General Doctor Query
  if (
    query.includes('doctor') ||
    query.includes('डॉक्टर') ||
    query.includes('वैद्य') ||
    query.includes('specialist') ||
    query.includes('विशेषज्ञ')
  ) {
    const list = DOCTORS.slice(0, 6).map(d => `• *${d.name}* - ${d.specialties[0]}`).join('\n');
    return isEn
      ? `👨‍⚕️ *Sun City Hospital Doctors (35+ Specialists)*\n\n` +
        `${list}\n\n` +
        `...and many more in Neurology, Orthopedics, Urology, Gynecology & General Surgery.\n\n` +
        `👉 Ask about any doctor by name or type "book" to reserve a slot!`
      : `👨‍⚕️ *सन सिटी हॉस्पिटल के प्रमुख डॉक्टर्स (35+ विशेषज्ञ)*\n\n` +
        `${list}\n\n` +
        `...एवं न्यूरो, ऑर्थो, यूरोलॉजी, गायनेकोलॉजी व जनरल सर्जरी के वरिष्ठ विशेषज्ञ।\n\n` +
        `👉 किसी डॉक्टर का नाम पूछें या अपॉइंटमेंट बुक करने के लिए "book" टाइप करें!`;
  }

  // 8. General Department Query
  if (
    query.includes('department') ||
    query.includes('विभाग') ||
    query.includes('specialty') ||
    query.includes('विशेषज्ञता') ||
    query.includes('services') ||
    query.includes('सेवाएं')
  ) {
    const list = DEPARTMENTS.slice(0, 8).map(d => `• ${isEn ? d.name : d.nameHindi}`).join('\n');
    return isEn
      ? `🏥 *Our Key Medical Departments*\n\n` +
        `${list}\n\n` +
        `Which department would you like to know more about?`
      : `🏥 *हमारे मुख्य चिकित्सा विभाग*\n\n` +
        `${list}\n\n` +
        `आप किस विभाग के बारे में अधिक जानकारी चाहते हैं?`;
  }

  // 9. Diagnostics / Tests & Trust Diagnostic
  if (
    query.includes('test') ||
    query.includes('cbc') ||
    query.includes('blood') ||
    query.includes('lipid') ||
    query.includes('thyroid') ||
    query.includes('diagnostics') ||
    query.includes('जांच') ||
    query.includes('लैब') ||
    query.includes('trust') ||
    query.includes('ट्रस्ट') ||
    query.includes('package') ||
    query.includes('पैकेज') ||
    query.includes('checkup') ||
    query.includes('चेकअप')
  ) {
    const testsList = DIAGNOSTICS.map(t => `• *${t.name}:* ₹${t.price} (${t.turnaroundTime})`).join('\n');
    const pkg = HEALTH_PACKAGES[0];
    return isEn
      ? `🔬 *Trust Diagnostic & In-House Laboratory*\n\n` +
        `• *Pathologist:* Dr. Vasundhara (MBBS, MD Pathologist)\n` +
        `• *Phone:* 0551 4509173 | 24x7 Facility\n\n` +
        `*Popular Diagnostic Tests:*\n${testsList}\n\n` +
        `🌟 *Full Body Checkup Package (₹${pkg.price}):*\nIncludes 8 major profiles (CBC, Lipid, LFT, Sugar, Kidney GFR, Thyroid-3, Iron, Urine).`
      : `🔬 *ट्रस्ट डायग्नोस्टिक एवं पैथोलॉजी लैब*\n\n` +
        `• *पैथोलॉजिस्ट:* डॉ. वसुंधरा (MBBS, MD पैथोलॉजिस्ट)\n` +
        `• *फोन:* 0551 4509173 | 24x7 सेवा उपलब्ध\n\n` +
        `*मुख्य लैब टेस्ट एवं शुल्क:*\n${testsList}\n\n` +
        `🌟 *सम्पूर्ण फुल बॉडी चेकअप पैकेज (₹${pkg.price}):*\n8 मुख्य प्रोफाइल शामिल (सीबीसी, लिपिड, लीवर, शुगर, किडनी GFR, थायराइड-3, आयरन, यूरिन)।`;
  }

  // 10. Infrastructure & Facilities
  if (
    query.includes('ot') ||
    query.includes('operation') ||
    query.includes('ऑपरेशन') ||
    query.includes('facility') ||
    query.includes('सुविधा') ||
    query.includes('infrastructure') ||
    query.includes('ऑक्सीजन') ||
    query.includes('oxygen') ||
    query.includes('dialysis') ||
    query.includes('डायलिसिस') ||
    query.includes('pharmacy') ||
    query.includes('मेडिकल')
  ) {
    return isEn
      ? `🏥 *Sun City Hospital Facilities & Infrastructure*\n\n` +
        `• *Modular Operation Theatres:* Laminar airflow & HEPA filters.\n` +
        `• *ICU & NICU:* Advanced multipara monitors & Servo-i ventilators.\n` +
        `• *Dialysis Center:* 24x7 Hemodialysis units.\n` +
        `• *24/7 Pharmacy & In-house Pathology Lab.*\n` +
        `• *Central Oxygen Plant:* Uninterrupted O2 supply.`
      : `🏥 *सन सिटी हॉस्पिटल बुनियादी ढांचा एवं सुविधाएं*\n\n` +
        `• *मॉड्यूलर ऑपरेशन थिएटर:* लेमिनर एयरफ्लो व HEPA फिल्टर से लैस।\n` +
        `• *ICU व NICU:* आधुनिक वेंटिलेटर और मॉनिटरिंग सिस्टम।\n` +
        `• *डायलिसिस केंद्र:* 24 घंटे हीमोडायलिसिस सुविधा।\n` +
        `• *24x7 मेडिकल स्टोर (फार्मेसी) एवं पैथोलॉजी लैब।*\n` +
        `• *सेंट्रल ऑक्सीजन प्लांट:* 24 घंटे निर्बाध ऑक्सीजन आपूर्ति।`;
  }

  // 11. Timing / OPD Hours
  if (
    query.includes('time') ||
    query.includes('timing') ||
    query.includes('open') ||
    query.includes('opd') ||
    query.includes('समय') ||
    query.includes('कब') ||
    query.includes('खुला')
  ) {
    return isEn
      ? `⏰ *Hospital & OPD Timings*\n\n` +
        `• *OPD Consultations:* Monday - Saturday (10:00 AM - 04:00 PM)\n` +
        `• *Emergency & ICU:* Open 24/7 (365 Days)\n` +
        `• *Pharmacy & Lab:* Open 24/7`
      : `⏰ *हॉस्पिटल एवं ओपीडी समय*\n\n` +
        `• *ओपीडी परामर्श:* सोमवार से शनिवार (सुबह 10:00 - दोपहर 04:00)\n` +
        `• *इमरजेंसी व आईसीयू:* 24 घंटे (365 दिन) चालू\n` +
        `• *फार्मेसी व पैथोलॉजी:* 24 घंटे उपलब्ध`;
  }

  // Fallback / Helpful Default
  return isEn
    ? `Hello! I am Sun City Hospital's AI Digital Assistant 🤖\n\n` +
      `You can ask me about:\n` +
      `• *Ayushman PM-JAY Card*\n` +
      `• *Doctors & Specialties*\n` +
      `• *24/7 Emergency & Ambulances*\n` +
      `• *Lab Tests & Prices*\n` +
      `• *Hospital Location & Contact*\n\n` +
      `👉 Type "book" or click *Book Appointment* to schedule your visit via WhatsApp!`
    : `नमस्ते! मैं सन सिटी हॉस्पिटल का एआई डिजिटल सहायक हूँ 🤖\n\n` +
      `आप मुझसे इन विषयों पर पूछ सकते हैं:\n` +
      `• *आयुष्मान (PM-JAY) कार्ड सुविधा*\n` +
      `• *डॉक्टर्स व विभाग की जानकारी*\n` +
      `• *24 घंटे इमरजेंसी व एम्बुलेंस*\n` +
      `• *लैब टेस्ट व फुल बॉडी चेकअप*\n` +
      `• *हॉस्पिटल का पता व संपर्क नंबर*\n\n` +
      `👉 अपॉइंटमेंट बुक करने के लिए "book" टाइप करें या नीचे दिए गए बटन पर क्लिक करें!`;
}
