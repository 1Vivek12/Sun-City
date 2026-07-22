import React from 'react';
import HeroHeader from './HeroHeader';
import DoctorShowcase from './DoctorShowcase';
import LandmarkSpotlight from './LandmarkSpotlight';
import SpecialtiesTeaser from './SpecialtiesTeaser';
import PmjayTeaser from './PmjayTeaser';
import OperationalHours from './OperationalHours';
import HospitalSlider from './HospitalSlider';

interface HeroProps {
  language: 'hi' | 'en';
  onNavigate: (section: string) => void;
  onBookWithDoctor?: (doctorId: string, deptId: string) => void;
}

export default function Hero({ language, onNavigate, onBookWithDoctor }: HeroProps) {
  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      <HeroHeader language={language} onNavigate={onNavigate} />
      <DoctorShowcase language={language} onBookWithDoctor={onBookWithDoctor} />
      <HospitalSlider language={language} />
      <LandmarkSpotlight language={language} />
      <SpecialtiesTeaser language={language} onNavigate={onNavigate} />
      <PmjayTeaser language={language} onNavigate={onNavigate} />
      <OperationalHours language={language} onNavigate={onNavigate} />
    </div>
  );
}
