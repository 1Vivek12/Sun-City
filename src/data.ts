import { Department, Doctor, DiagnosticTest, HealthPackage, BlogPost } from './types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'gen-surgery',
    name: 'General Surgery / Laparoscopy',
    nameHindi: 'सामान्य सर्जरी / लेप्रोस्कोपी',
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
    nameHindi: 'अस्थि रोग विभाग (हड्डी रोग)',
    description: 'Expert care in Knee Replacement, Hip Replacement, Shoulder/Elbow issues, and Arthroscopic surgeries.',
    descriptionHindi: 'घुटना प्रत्यारोपण, कूल्हा प्रत्यारोपण, कंधे/कोहनी की समस्या और आर्थ्रोस्कोपिक सर्जरी में विशेषज्ञ देखभाल।',
    iconName: 'Bone',
    symptoms: ['Joint Pain', 'Fractures', 'Knee Pain', 'Hip Pain', 'Sports Injuries'],
    symptomsHindi: ['जोड़ों का दर्द', 'हड्डी टूटना', 'घुटने का दर्द', 'कूल्हे का दर्द', 'खेल की चोटें'],
    treatments: ['Knee Replacement', 'Hip Replacement', 'Arthroscopic Surgery', 'Trauma Care'],
    treatmentsHindi: ['घुटना प्रत्यारोपण', 'कूल्हा प्रत्यारोपण', 'आर्थ्रोस्कोपिक सर्जरी', 'ट्रॉमा देखभाल']
  },
  {
    id: 'spine-neuro',
    name: 'Spine / Neurosurgeon',
    nameHindi: 'रीढ़ / न्यूरोसर्जन',
    description: 'Advanced surgical care for Brain Tumor, Spine conditions, Trauma, and Epilepsy surgery.',
    descriptionHindi: 'ब्रेन ट्यूमर, रीढ़ की स्थिति, ट्रॉमा और मिर्गी की सर्जरी के लिए उन्नत सर्जिकल देखभाल।',
    iconName: 'Brain',
    symptoms: ['Brain Tumors', 'Severe Spine Injury', 'Seizures', 'Head Trauma'],
    symptomsHindi: ['ब्रेन ट्यूमर', 'गंभीर रीढ़ की चोट', 'दौरे पड़ना', 'सिर में चोट'],
    treatments: ['Brain Tumor Surgery', 'Spine Surgery', 'Trauma Surgery', 'Epilepsy Surgery'],
    treatmentsHindi: ['ब्रेन ट्यूमर सर्जरी', 'रीढ़ की सर्जरी', 'ट्रॉमा सर्जरी', 'मिर्गी सर्जरी']
  },
  {
    id: 'gynecology',
    name: 'Gynecology Surgery',
    nameHindi: 'स्त्री रोग सर्जरी',
    description: 'Comprehensive surgical care involving Uterus, Ovaries, Fallopian Tube, Myomectomy, Colposcopy, and D&C.',
    descriptionHindi: 'गर्भाशय, अंडाशय, फैलोपियन ट्यूब, मायोमेक्टोमी, कोल्पोस्कोपी, और डी एंड सी से जुड़ी व्यापक सर्जिकल देखभाल।',
    iconName: 'Users',
    symptoms: ['Uterus Issues', 'Ovarian Cysts', 'Pelvic Pain', 'Irregular Bleeding'],
    symptomsHindi: ['गर्भाशय की समस्या', 'अंडाशय में सिस्ट', 'पेल्विक दर्द', 'अनियमित रक्तस्राव'],
    treatments: ['Uterus Surgery', 'Ovaries/Fallopian Tube Surgery', 'Myomectomy', 'Colposcopy', 'D&C'],
    treatmentsHindi: ['गर्भाशय सर्जरी', 'अंडाशय/फैलोपियन ट्यूब सर्जरी', 'मायोमेक्टोमी', 'कोल्पोस्कोपी', 'डी एंड सी']
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-suraj',
    name: 'Dr. Suraj Singh (Dr. S. Sing)',
    specialties: ['General Surgery / Laparoscopy'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS (General Surgery), DIP-MAS, Laparoscopic Surgeon',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-rahul',
    name: 'Dr. Rahul Srinet',
    specialties: ['Medicine', 'ICU & Emergency'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MD (Medicine), Gold Medalist, ICU & Emergency Specialist',
    experience: '10+ Years',
    availability: 'Mon - Sat (09:00 AM - 05:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-devta',
    name: 'Dr. Devta Singh',
    specialties: ['Orthopedics', 'Spine Surgery', 'Trauma'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, D-Ortho, DNB, PDCC (Orthopedics). Ex- RMLIMS Lucknow, Ex- AIIMS Gorakhpur',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-pratima',
    name: 'Dr. Pratima Sharma',
    specialties: ['Gynecology'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, MS (Gynae-Obs). Gynecologist',
    experience: '10+ Years',
    availability: 'Mon - Sat (10:00 AM - 04:00 PM)',
    isAvailableToday: true
  },
  {
    id: 'dr-abhay',
    name: 'Dr. Abhay Kumar Sharma',
    specialties: ['Pediatrics', 'General Medicine', 'Emergency'],
    languages: ['Hindi', 'English'],
    education: 'MBBS, Fellowship in Pediatric, General Physician',
    experience: '10+ Years',
    availability: '24x7 Emergency Available',
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
