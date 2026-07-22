import { DEPARTMENTS, DOCTORS, DIAGNOSTICS } from '../data';

export function getLocalBotResponse(message: string, language: 'hi' | 'en'): string {
  const query = message.toLowerCase();
  const isEn = language === 'en';

  // Helper response for PM-JAY
  if (query.includes('pmjay') || query.includes('pm-jay') || query.includes('ayushman') || query.includes('आयुष्मान') || query.includes('कार्ड')) {
    return isEn 
      ? `Yes! Sun City Hospital is fully empanelled with Ayushman Bharat (PM-JAY).\n\n• Benefit: Cashless treatment up to ₹5 Lakhs.\n• Required Documents: Active Golden Card, Aadhaar Card, Ration Card.\n• Location: Visit our PM-JAY Helpdesk near reception.`
      : `हाँ! सन सिटी हॉस्पिटल आयुष्मान भारत (PM-JAY) योजना के तहत पूरी तरह से अधिकृत है।\n\n• लाभ: ₹5 लाख तक का बिल्कुल मुफ्त कैशलेस इलाज।\n• जरूरी दस्तावेज: एक्टिव आयुष्मान गोल्डन कार्ड, आधार कार्ड, और राशन कार्ड।\n• सहायता: रिसेप्शन के पास बने हमारे आयुष्मान हेल्पडेस्क पर संपर्क करें।`;
  }

  // Helper response for Emergency
  if (query.includes('emergency') || query.includes('icu') || query.includes('nicu') || query.includes('ambulance') || query.includes('आपातकालीन') || query.includes('एम्बुलेंस')) {
    return isEn
      ? `Emergency Services are active 24/7 at Sun City Hospital.\n\n• Emergency Hotline: +91 91515 15151\n• ICU & NICU: Active with advanced ventilators.\n• Ambulances: 5 standby ambulances available in Gorakhpur.`
      : `सन सिटी हॉस्पिटल में २४ घंटे आपातकालीन और आईसीयू सेवाएं चालू हैं।\n\n• आपातकालीन हेल्पलाइन: +91 91515 15151\n• आईसीयू और एनआईसीयू: वेंटिलेटर सुविधाओं के साथ सक्रिय।\n• एम्बुलेंस: आपातकाल के लिए ५ एम्बुलेंस हमेशा तैयार खड़ी हैं।`;
  }

  // Helper response for Doctors
  if (query.includes('doctor') || query.includes('cardiology') || query.includes('neurology') || query.includes('surgeon') || query.includes('डॉक्टर') || query.includes('वैद्य')) {
    const list = DOCTORS.slice(0, 5).map(doc => `• ${doc.name} (${doc.specialties.join(', ')})`).join('\n');
    return isEn
      ? `We have 19+ top-tier doctors. Here are some of our specialists:\n\n${list}\n\nTo view all doctors or book a slot, navigate to the Doctors tab!`
      : `हमारे यहाँ १९+ विशेषज्ञ डॉक्टर उपलब्ध हैं। कुछ प्रमुख चिकित्सक:\n\n${list}\n\nसभी डॉक्टरों की सूची और अपॉइंटमेंट के लिए 'Doctors' सेक्शन पर जाएं।`;
  }

  // Helper response for Tests
  if (query.includes('test') || query.includes('cbc') || query.includes('blood') || query.includes('diagnostics') || query.includes('जांच') || query.includes('लैब')) {
    const tests = DIAGNOSTICS.slice(0, 4).map(t => `• ${t.name}: ₹${t.price} (${t.turnaroundTime})`).join('\n');
    return isEn
      ? `Diagnostic Tests available at our in-house lab:\n\n${tests}\n\nFasting is recommended for Liver/Lipid profiles.`
      : `हमारे इन-हाउस लैब में उपलब्ध मुख्य जांच:\n\n${tests}\n\nलीवर और लिपिड प्रोफाइल टेस्ट के लिए खाली पेट आना आवश्यक है।`;
  }

  // Fallback
  return isEn
    ? `Thank you for contacting Sun City Hospital. I am a local digital assistant.\n\nFor doctor bookings, PM-JAY inquiries, or billing questions, you can call us at +91 91515 15151.`
    : `सन सिटी हॉस्पिटल से संपर्क करने के लिए धन्यवाद। मैं आपका डिजिटल सहायक हूँ।\n\nअपॉइंटमेंट बुकिंग, आयुष्मान कार्ड या एम्बुलेंस के लिए सीधे हमारे हेल्पलाइन +91 91515 15151 पर कॉल करें।`;
}
