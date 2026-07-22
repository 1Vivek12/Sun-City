export interface Department {
  id: string;
  name: string;
  nameHindi: string;
  description: string;
  descriptionHindi: string;
  iconName: string; // lucide icon name
  symptoms: string[];
  symptomsHindi: string[];
  treatments: string[];
  treatmentsHindi: string[];
}

export interface Doctor {
  id: string;
  name: string;
  specialties: string[]; // references Department.name
  languages: string[];
  education: string;
  experience: string;
  availability: string;
  isAvailableToday?: boolean;
}

export interface DiagnosticTest {
  id: string;
  name: string;
  fullName: string;
  price: number;
  description: string;
  turnaroundTime: string;
  requirements: string;
}

export interface HealthPackage {
  id: string;
  name: string;
  nameHindi: string;
  price: number;
  testsIncluded: string[];
  description: string;
  features: string[];
}

export interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  doctorId: string;
  departmentId: string;
  date: string;
  timeSlot: string;
  language: 'hi' | 'en';
  symptoms?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleHindi: string;
  category: string;
  summary: string;
  summaryHindi: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
