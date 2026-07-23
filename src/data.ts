import { Department, Doctor, DiagnosticTest, HealthPackage, BlogPost } from './types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'neuro',
    name: 'Neurology / Neurosurgery',
    nameHindi: 'न्यूरो विभाग',
    description: 'Advanced surgical care for Brain Tumor, Spine conditions, Trauma, and Epilepsy surgery.',
    descriptionHindi: 'ब्रेन ट्यूमर, रीढ़ की स्थिति, ट्रॉमा और मिर्गी की सर्जरी के लिए उन्नत सर्जिकल देखभाल।',
    iconName: 'Brain',
    symptoms: ['Brain Tumors', 'Severe Spine Injury', 'Seizures', 'Head Trauma'],
    symptomsHindi: ['ब्रेन ट्यूमर', 'गंभीर रीढ़ की चोट', 'दौरे पड़ना', 'सिर में चोट'],
    treatments: ['Brain Tumor Surgery', 'Spine Surgery', 'Trauma Surgery', 'Epilepsy Surgery'],
    treatmentsHindi: ['ब्रेन ट्यूमर सर्जरी', 'रीढ़ की सर्जरी', 'ट्रॉमा सर्जरी', 'मिर्गी सर्जरी']
  },
  {
    id: 'gen-surgery',
    name: 'General & Laparoscopic Surgery',
    nameHindi: 'जनरल व लेप्रोस्कोपिक सर्जरी विभाग',
    description: 'Specialized in Appendix, Gallbladder, Hernia, Piles (Laser), Breast, Thyroid, and Gastrointestinal surgeries.',
    descriptionHindi: 'अपेंडिक्स, पित्ताशय, हर्निया, बवासीर (लेजर), स्तन, थायराइड और गैस्ट्रोइंटेस्टाइनल सर्जरी में विशेषज्ञ।',
    iconName: 'Scissors',
    symptoms: ['Hernia', 'Gallstones', 'Appendicitis', 'Piles', 'Thyroid Swelling'],
    symptomsHindi: ['हर्निया', 'पित्त की पथरी', 'अपेंडिसाइटिस', 'बवासीर', 'थायराइड सूजन'],
    treatments: ['Laparoscopic Surgery', 'Laser Piles Surgery', 'Breast & Thyroid Surgery', 'GI Surgery'],
    treatmentsHindi: ['लेप्रोस्कोपिक सर्जरी', 'लेजर बवासीर सर्जरी', 'स्तन और थायराइड सर्जरी', 'जीआई सर्जरी']
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    nameHindi: 'हड्डी रोग विभाग',
    description: 'Expert care in Knee Replacement, Hip Replacement, Shoulder/Elbow issues, and Arthroscopic surgeries.',
    descriptionHindi: 'घुटना प्रत्यारोपण, कूल्हा प्रत्यारोपण, कंधे/कोहनी की समस्या और आर्थ्रोस्कोपिक सर्जरी में विशेषज्ञ देखभाल।',
    iconName: 'Bone',
    symptoms: ['Joint Pain', 'Fractures', 'Knee Pain', 'Hip Pain', 'Sports Injuries'],
    symptomsHindi: ['जोड़ों का दर्द', 'हड्डी टूटना', 'घुटने का दर्द', 'कूल्हे का दर्द', 'खेल की चोटें'],
    treatments: ['Knee Replacement', 'Hip Replacement', 'Arthroscopic Surgery', 'Trauma Care'],
    treatmentsHindi: ['घुटना प्रत्यारोपण', 'कूल्हा प्रत्यारोपण', 'आर्थ्रोस्कोपिक सर्जरी', 'ट्रॉमा देखभाल']
  },
  {
    id: 'anaesthesia',
    name: 'Anaesthesia',
    nameHindi: 'एनेस्थीसिया विभाग',
    description: 'Safe and advanced anaesthesia services for all surgical procedures.',
    descriptionHindi: 'सभी सर्जिकल प्रक्रियाओं के लिए सुरक्षित और उन्नत एनेस्थीसिया सेवाएं।',
    iconName: 'Syringe',
    symptoms: [],
    symptomsHindi: [],
    treatments: ['General Anaesthesia', 'Spinal Anaesthesia', 'Epidural', 'ICU Management'],
    treatmentsHindi: ['जनरल एनेस्थीसिया', 'स्पाइनल एनेस्थीसिया', 'एपिड्यूरल', 'आईसीयू प्रबंधन']
  },
  {
    id: 'pedia-surgery',
    name: 'Pediatric Surgery',
    nameHindi: 'पीडिया सर्जरी',
    description: 'Specialized surgical care for infants, children, and adolescents.',
    descriptionHindi: 'शिशुओं, बच्चों और किशोरों के लिए विशेष सर्जिकल देखभाल।',
    iconName: 'Baby',
    symptoms: ['Congenital Defects', 'Childhood Tumors', 'Hernias in Children'],
    symptomsHindi: ['जन्मजात दोष', 'बच्चों में ट्यूमर', 'बच्चों में हर्निया'],
    treatments: ['Neonatal Surgery', 'Pediatric Laparoscopy', 'Congenital Repair'],
    treatmentsHindi: ['नवजात सर्जरी', 'बाल लेप्रोस्कोपी', 'जन्मजात दोष मरम्मत']
  },
  {
    id: 'urology',
    name: 'Urology',
    nameHindi: 'यूरोलॉजी विभाग',
    description: 'Expert care for kidney stones, prostate, bladder and urinary tract conditions.',
    descriptionHindi: 'गुर्दे की पथरी, प्रोस्टेट, मूत्राशय और मूत्र मार्ग की स्थितियों के लिए विशेषज्ञ देखभाल।',
    iconName: 'Droplets',
    symptoms: ['Kidney Stones', 'Prostate Issues', 'Urinary Problems', 'Bladder Issues'],
    symptomsHindi: ['गुर्दे की पथरी', 'प्रोस्टेट समस्या', 'पेशाब की समस्या', 'मूत्राशय समस्या'],
    treatments: ['PCNL', 'RIRS', 'TURP', 'Ureteroscopy', 'Laser Lithotripsy'],
    treatmentsHindi: ['पीसीएनएल', 'आरआईआरएस', 'टीयूआरपी', 'यूरेटेरोस्कोपी', 'लेजर लिथोट्रिप्सी']
  },
  {
    id: 'gynecology',
    name: 'Gynecology & Obstetrics',
    nameHindi: 'स्त्री व प्रसूति रोग विभाग',
    description: 'Comprehensive care for Uterus, Ovaries, Fallopian Tube, Myomectomy, Colposcopy, and D&C.',
    descriptionHindi: 'गर्भाशय, अंडाशय, फैलोपियन ट्यूब, मायोमेक्टोमी, कोल्पोस्कोपी, और डी एंड सी से जुड़ी व्यापक देखभाल।',
    iconName: 'Users',
    symptoms: ['Uterus Issues', 'Ovarian Cysts', 'Pelvic Pain', 'Irregular Bleeding'],
    symptomsHindi: ['गर्भाशय की समस्या', 'अंडाशय में सिस्ट', 'पेल्विक दर्द', 'अनियमित रक्तस्राव'],
    treatments: ['Uterus Surgery', 'Ovaries/Fallopian Tube Surgery', 'Myomectomy', 'Colposcopy', 'D&C'],
    treatmentsHindi: ['गर्भाशय सर्जरी', 'अंडाशय/फैलोपियन ट्यूब सर्जरी', 'मायोमेक्टोमी', 'कोल्पोस्कोपी', 'डी एंड सी']
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    nameHindi: 'हृदय रोग विभाग',
    description: 'Comprehensive heart care including ECG, Echo, Angiography and Cardiac interventions.',
    descriptionHindi: 'ईसीजी, इको, एंजियोग्राफी और कार्डियक इंटरवेंशन सहित व्यापक हृदय देखभाल।',
    iconName: 'Heart',
    symptoms: ['Chest Pain', 'Heart Palpitations', 'Shortness of Breath', 'High BP'],
    symptomsHindi: ['छाती में दर्द', 'धड़कन तेज होना', 'सांस फूलना', 'उच्च रक्तचाप'],
    treatments: ['ECG', 'Echocardiography', 'Angiography', 'Angioplasty'],
    treatmentsHindi: ['ईसीजी', 'इकोकार्डियोग्राफी', 'एंजियोग्राफी', 'एंजियोप्लास्टी']
  },
  {
    id: 'nephrology',
    name: 'Nephrology',
    nameHindi: 'गुर्दा रोग विशेषज्ञ',
    description: 'Expert kidney care including dialysis and management of chronic kidney diseases.',
    descriptionHindi: 'डायलिसिस और गुर्दे की पुरानी बीमारियों के प्रबंधन सहित विशेषज्ञ गुर्दा देखभाल।',
    iconName: 'Bean',
    symptoms: ['Kidney Failure', 'Chronic Kidney Disease', 'Dialysis Required'],
    symptomsHindi: ['गुर्दे की विफलता', 'गुर्दे की पुरानी बीमारी', 'डायलिसिस आवश्यक'],
    treatments: ['Hemodialysis', 'Peritoneal Dialysis', 'Kidney Disease Management'],
    treatmentsHindi: ['हीमोडायलिसिस', 'पेरिटोनियल डायलिसिस', 'गुर्दा रोग प्रबंधन']
  },
  {
    id: 'ent',
    name: 'ENT (Ear, Nose & Throat)',
    nameHindi: 'नाक कान गला विभाग',
    description: 'Specialized in ear, nose and throat surgeries and treatments.',
    descriptionHindi: 'कान, नाक और गले की सर्जरी और उपचार में विशेषज्ञ।',
    iconName: 'Ear',
    symptoms: ['Ear Pain', 'Hearing Loss', 'Sinusitis', 'Tonsillitis', 'Throat Issues'],
    symptomsHindi: ['कान दर्द', 'सुनने में कमी', 'साइनसाइटिस', 'टॉन्सिलाइटिस', 'गला खराब'],
    treatments: ['Tympanoplasty', 'Septoplasty', 'Tonsillectomy', 'FESS'],
    treatmentsHindi: ['टिम्पेनोप्लास्टी', 'सेप्टोप्लास्टी', 'टॉन्सिलेक्टोमी', 'एफईएसएस']
  },
  {
    id: 'medicine',
    name: 'Medicine',
    nameHindi: 'मेडिसिन विभाग',
    description: 'General Medicine, ICU management, and emergency critical care.',
    descriptionHindi: 'जनरल मेडिसिन, आईसीयू प्रबंधन और आपातकालीन गहन देखभाल।',
    iconName: 'Stethoscope',
    symptoms: ['Fever', 'Diabetes', 'Hypertension', 'Infections', 'General Illness'],
    symptomsHindi: ['बुखार', 'मधुमेह', 'उच्च रक्तचाप', 'संक्रमण', 'सामान्य बीमारी'],
    treatments: ['ICU Management', 'Diabetes Care', 'Infectious Disease Treatment'],
    treatmentsHindi: ['आईसीयू प्रबंधन', 'मधुमेह देखभाल', 'संक्रामक रोग उपचार']
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    nameHindi: 'बाल रोग विभाग',
    description: 'Comprehensive medical care for children from birth to adolescence.',
    descriptionHindi: 'जन्म से किशोरावस्था तक बच्चों के लिए व्यापक चिकित्सा देखभाल।',
    iconName: 'Baby',
    symptoms: ['Child Fever', 'Growth Issues', 'Vaccination', 'Childhood Diseases'],
    symptomsHindi: ['बच्चे को बुखार', 'विकास समस्या', 'टीकाकरण', 'बचपन की बीमारियां'],
    treatments: ['Neonatal Care', 'Vaccination', 'Pediatric ICU', 'Growth Monitoring'],
    treatmentsHindi: ['नवजात देखभाल', 'टीकाकरण', 'बाल आईसीयू', 'विकास निगरानी']
  },
  {
    id: 'plastic-surgery',
    name: 'Plastic Surgery',
    nameHindi: 'प्लास्टिक सर्जरी विभाग',
    description: 'Reconstructive and cosmetic surgical procedures.',
    descriptionHindi: 'पुनर्निर्माण और कॉस्मेटिक सर्जिकल प्रक्रियाएं।',
    iconName: 'Sparkles',
    symptoms: ['Burns', 'Scars', 'Congenital Deformities', 'Facial Injuries'],
    symptomsHindi: ['जलना', 'निशान', 'जन्मजात विकृतियां', 'चेहरे की चोट'],
    treatments: ['Reconstructive Surgery', 'Skin Grafting', 'Cosmetic Procedures'],
    treatmentsHindi: ['पुनर्निर्माण सर्जरी', 'स्किन ग्राफ्टिंग', 'कॉस्मेटिक प्रक्रियाएं']
  },
  {
    id: 'ayurvedic',
    name: 'Ayurvedic',
    nameHindi: 'आयुर्वेदिक विभाग',
    description: 'Traditional Ayurvedic treatments and Panchakarma therapies.',
    descriptionHindi: 'पारंपरिक आयुर्वेदिक उपचार और पंचकर्म चिकित्सा।',
    iconName: 'Leaf',
    symptoms: ['Chronic Pain', 'Digestive Issues', 'Stress', 'Joint Pain'],
    symptomsHindi: ['पुराना दर्द', 'पाचन समस्या', 'तनाव', 'जोड़ों का दर्द'],
    treatments: ['Panchakarma', 'Herbal Medicine', 'Yoga Therapy', 'Diet Counseling'],
    treatmentsHindi: ['पंचकर्म', 'हर्बल दवा', 'योग चिकित्सा', 'आहार परामर्श']
  },
  {
    id: 'physiotherapy',
    name: 'Physiotherapy',
    nameHindi: 'फिजियोथेरेपी विभाग',
    description: 'Rehabilitation and physical therapy for recovery and pain management.',
    descriptionHindi: 'पुनर्वास और दर्द प्रबंधन के लिए फिजियोथेरेपी।',
    iconName: 'Activity',
    symptoms: ['Back Pain', 'Post-Surgery Rehab', 'Sports Injuries', 'Muscle Weakness'],
    symptomsHindi: ['कमर दर्द', 'सर्जरी के बाद पुनर्वास', 'खेल की चोटें', 'मांसपेशी कमजोरी'],
    treatments: ['Manual Therapy', 'Electrotherapy', 'Exercise Therapy', 'Post-op Rehab'],
    treatmentsHindi: ['मैनुअल थेरेपी', 'इलेक्ट्रोथेरेपी', 'एक्सरसाइज थेरेपी', 'ऑपरेशन बाद पुनर्वास']
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    nameHindi: 'चर्म रोग विभाग',
    description: 'Skin care, hair and nail disorders, and cosmetic dermatology.',
    descriptionHindi: 'त्वचा देखभाल, बाल और नाखून विकार, और कॉस्मेटिक त्वचाविज्ञान।',
    iconName: 'Scan',
    symptoms: ['Skin Rashes', 'Acne', 'Eczema', 'Hair Loss', 'Fungal Infections'],
    symptomsHindi: ['त्वचा पर चकत्ते', 'मुँहासे', 'एक्जिमा', 'बालों का झड़ना', 'फंगल संक्रमण'],
    treatments: ['Skin Biopsy', 'Laser Treatment', 'Chemical Peeling', 'PRP Therapy'],
    treatmentsHindi: ['स्किन बायोप्सी', 'लेजर उपचार', 'केमिकल पीलिंग', 'पीआरपी थेरेपी']
  }
];

export const DOCTORS: Doctor[] = [
  // ─── MANAGING DIRECTOR & FOUNDER (Top Priority) ───
  {
    id: 'dr-abhay',
    name: 'Dr. Abhay Kumar Sharma',
    specialties: ['Managing Director (MD)', 'Pediatrics', 'Medicine'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD (Pediatrics & Medicine), Fellowship in Pediatric Healthcare, Senior Consultant & Managing Director',
    experience: '15+ Years Exp • Managing Director',
    availability: '24x7 Emergency & OPD Available',
    isAvailableToday: true,
    isManagingDirector: true,
    image: '/dr-abhay-desk.jpg',
    achievements: [
      '🏆 Winner of City Health Excellence Award 2026',
      '🏥 Founder & Managing Director of Sun City Hospital',
      '🎓 Fellowship in Pediatric Healthcare & Critical Care',
      '🩺 10,000+ Successful Pediatric & Critical Cases'
    ]
  },
  // ─── न्यूरो विभाग (Neurology / Neurosurgery) ───
  {
    id: 'dr-rana-pratap',
    name: 'Dr. Rana Pratap Singh',
    specialties: ['Neurology / Neurosurgery'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS, MCh (Neuro)',
    experience: '15+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-rahul-gupta',
    name: 'Dr. Rahul Gupta',
    specialties: ['Neurology / Neurosurgery'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS (Neurosurgery)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-raju-khetawat',
    name: 'Dr. Raju Khetawat',
    specialties: ['Neurology / Neurosurgery'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD, DM (Neuro)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── जनरल व लेप्रोस्कोपिक सर्जरी विभाग ───
  {
    id: 'dr-suraj',
    name: 'Dr. Suraj Singh',
    specialties: ['General & Laparoscopic Surgery'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS, Dip MAS (Laparoscopic Surgeon)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-a-stella',
    name: 'Dr. A. Stella',
    specialties: ['General & Laparoscopic Surgery'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS, FNB',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-bp-mall',
    name: 'Dr. B. P. Mall',
    specialties: ['General & Laparoscopic Surgery'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS (General Surgery)',
    experience: '15+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── हड्डी रोग विभाग (Orthopedics) ───
  {
    id: 'dr-devta',
    name: 'Dr. Devta Singh',
    specialties: ['Orthopedics'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, D.Ortho, DNB, FRCS. Ex-RMLIMS Lucknow, Ex-AIIMS Gorakhpur',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-sk-morya',
    name: 'Dr. S. K. Morya',
    specialties: ['Orthopedics'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS (Ortho)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-navneet',
    name: 'Dr. Navneet Shrivastav',
    specialties: ['Orthopedics'],
    languages: ['Hindi', 'English'],
    education: 'Fellowship in Joint Management',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-suresh-ortho',
    name: 'Dr. Suresh',
    specialties: ['Orthopedics'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS (Ortho)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-rohit-elani',
    name: 'Dr. Rohit Elani',
    specialties: ['Orthopedics'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS (Orthopaedic)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── एनेस्थीसिया विभाग ───
  {
    id: 'dr-swati-agrawal',
    name: 'Dr. Swati Agrawal',
    specialties: ['Anaesthesia'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD (Anaesthesia)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-sp-mishra',
    name: 'Dr. S. P. Mishra',
    specialties: ['Anaesthesia'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD (Anaesthesia)',
    experience: '15+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── पीडिया सर्जरी ───
  {
    id: 'dr-akshay-prasad',
    name: 'Dr. Akshay Prasad',
    specialties: ['Pediatric Surgery'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS, MCh (Pedo)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── यूरोलॉजी विभाग ───
  {
    id: 'dr-vinay-singh',
    name: 'Dr. Vinay Singh',
    specialties: ['Urology'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS, MS (Urology)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-vivek-singh',
    name: 'Dr. Vivek Singh',
    specialties: ['Urology'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS, MCh (Urology)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── स्त्री व प्रसूति रोग विभाग ───
  {
    id: 'dr-pratima',
    name: 'Dr. Pratima Sharma',
    specialties: ['Gynecology & Obstetrics'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS (Obs/Gynae)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── हृदय रोग विभाग (Cardiology) ───
  {
    id: 'dr-bal-govind',
    name: 'Dr. Bal Govind Singh',
    specialties: ['Cardiology'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD, DM (Cardiology)',
    experience: '15+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── गुर्दा रोग विशेषज्ञ (Nephrology) ───
  {
    id: 'dr-sp-swaroop',
    name: 'Dr. S. P. Swaroop',
    specialties: ['Nephrology'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD (Nephrology)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── बाल रोग विभाग (Pediatrics) ───
  {
    id: 'dr-upendra-gupta',
    name: 'Dr. Upendra Gupta',
    specialties: ['Pediatrics'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD (Pediatrics)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── मेडिसिन विभाग ───
  {
    id: 'dr-rahul-srinet',
    name: 'Dr. Rahul Srinet',
    specialties: ['Medicine'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD (Medicine), Gold Medalist, ICU & Emergency Specialist',
    experience: '10+ Years',
    availability: 'Mon - Sat (09:00 AM - 05:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-bajrang-singh',
    name: 'Dr. Bajrang Singh',
    specialties: ['Medicine'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD (Medicine)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── नाक कान गला विभाग (ENT) ───
  {
    id: 'dr-arpit-shrivastav',
    name: 'Dr. Arpit Shrivastav',
    specialties: ['ENT (Ear, Nose & Throat)'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS (ENT)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── प्लास्टिक सर्जरी विभाग ───
  {
    id: 'dr-t-chandra',
    name: 'Dr. T. Chandra Prasad',
    specialties: ['Plastic Surgery'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS (Plastic Surgery)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── आयुर्वेदिक विभाग ───
  {
    id: 'dr-ayodh-shrivastav',
    name: 'Dr. Ayodh Shrivastav',
    specialties: ['Ayurvedic'],
    languages: ['Hindi', 'English'],
    education: 'BAMS (Ayurveda)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-gaurav-mall',
    name: 'Dr. Gaurav Mall',
    specialties: ['Ayurvedic'],
    languages: ['Hindi', 'English'],
    education: 'BAMS (Ayurveda)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── फिजियोथेरेपी विभाग ───
  {
    id: 'dr-brajesh-kumar',
    name: 'Dr. Brajesh Kumar',
    specialties: ['Physiotherapy'],
    languages: ['Hindi', 'English'],
    education: 'BPT, MPT (Physiotherapy)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-prithvi-gupt',
    name: 'Dr. Prithvi Gupt',
    specialties: ['Physiotherapy'],
    languages: ['Hindi', 'English'],
    education: 'BPT, MPT (Physiotherapy)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── चर्म रोग विभाग (Dermatology) ───
  {
    id: 'dr-pooja-shrivastav',
    name: 'Dr. Pooja Shrivastav',
    specialties: ['Dermatology'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD (Dermatology)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-kirti-gaurav',
    name: 'Dr. Kirti Gaurav Rajdan',
    specialties: ['Dermatology'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, DNB (Dermatology)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },

  // ─── अन्य डॉक्टर्स (Other Doctors from Board) ───
  {
    id: 'dr-pramod',
    name: 'Dr. Pramod',
    specialties: ['Medicine'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS (General Physician)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-mukesh-narayan',
    name: 'Dr. Mukesh Narayan Singh',
    specialties: ['Medicine'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD (Medicine)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-abhinav-chandra',
    name: 'Dr. Abhinav Chandra Singh',
    specialties: ['Medicine'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD (Medicine)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-naveen-pandey',
    name: 'Dr. Naveen Pandey',
    specialties: ['Medicine'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD (Medicine)',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  }
];

export const DIAGNOSTICS: DiagnosticTest[] = [
  {
    id: 'test-cbc',
    name: 'CBC',
    fullName: 'Complete Blood Count (सीबीसी)',
    price: 299,
    description: 'Measures red blood cells, white blood cells, platelets, and hemoglobin.',
    turnaroundTime: '4 Hours',
    requirements: 'No special preparation needed.'
  },
  {
    id: 'test-lipid',
    name: 'Lipid Profile',
    fullName: 'Lipid Profile (लिपिड प्रोफाइल)',
    price: 499,
    description: 'Measures cholesterol and triglycerides to evaluate heart health.',
    turnaroundTime: '8 Hours',
    requirements: 'Strict 12 hours overnight fasting required.'
  },
  {
    id: 'test-lft',
    name: 'Liver Function Test',
    fullName: 'Liver Function Test (लीवर फंक्शन टेस्ट)',
    price: 699,
    description: 'Checks enzymes, proteins, and bilirubin levels in the blood.',
    turnaroundTime: '6 Hours',
    requirements: '10-12 hours overnight fasting is recommended.'
  },
  {
    id: 'test-urine',
    name: 'Urine R/M',
    fullName: 'Urine Routine & Microscopy (यूरिन आर/एम)',
    price: 150,
    description: 'Screens for urinary tract infections or kidney disorders.',
    turnaroundTime: '2 Hours',
    requirements: 'First morning mid-stream urine sample is ideal.'
  },
  {
    id: 'test-hba1c',
    name: 'HbA1c',
    fullName: '3 Months Sugar (HbA1c)',
    price: 399,
    description: 'Measures average blood glucose levels over the past 3 months.',
    turnaroundTime: '4 Hours',
    requirements: 'No fasting required.'
  },
  {
    id: 'test-gfr',
    name: 'Kidney Profile (GFR)',
    fullName: 'Kidney Profile with GFR (किडनी प्रोफाइल)',
    price: 599,
    description: 'Evaluates kidney function and glomerular filtration rate.',
    turnaroundTime: '6 Hours',
    requirements: 'No special preparation needed.'
  },
  {
    id: 'test-thyroid',
    name: 'Thyroid Profile-3',
    fullName: 'Thyroid Profile-3 (T3,T4,TSH)',
    price: 549,
    description: 'Evaluates thyroid gland function by measuring T3, T4, and TSH levels.',
    turnaroundTime: '8 Hours',
    requirements: 'Morning fasting sample preferred.'
  },
  {
    id: 'test-iron',
    name: 'Iron Profile',
    fullName: 'Iron Profile (आयरन प्रोफाइल)',
    price: 799,
    description: 'Assesses serum iron and binding capacity to detect anemia.',
    turnaroundTime: '12 Hours',
    requirements: '12 hours fasting is highly recommended.'
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'pkg-full-body',
    name: 'Complete Package (Full Body Checkup)',
    nameHindi: 'सम्पूर्ण पैकेज (फुल बॉडी चेकअप)',
    price: 2899,
    testsIncluded: [
      'CBC (Complete Blood Count)', 
      'Lipid Profile', 
      'Liver Function Test', 
      'Urine R/M', 
      '3 Months Sugar Report (HbA1c)', 
      'Kidney Profile (Glomerular Filtration Rate)', 
      'Thyroid Profile-3 (T3, T4, TSH)', 
      'IRON Profile'
    ],
    description: 'Comprehensive testing for blood, urine, and main organs (Heart, Liver, Kidney, Thyroid, Sugar).',
    features: [
      'Trust Diagnostic, Siktaur ke samne Padleganj Road, Gorakhpur', 
      'Phone no: 0551 4509173',
      '24x7 Suvidha Upalabdh',
      'Dr. Vasundhara (MBBS; MD Pathologist)'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [];
