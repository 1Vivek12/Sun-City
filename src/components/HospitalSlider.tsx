import React, { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';
import { getGalleryImages, GalleryImage } from '../utils/galleryStore';

interface HospitalSliderProps {
  language: 'hi' | 'en';
}

export default function HospitalSlider({ language }: HospitalSliderProps) {
  const isEn = language === 'en';
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const allImages = getGalleryImages();
    setImages(allImages.filter(img => img.location === 'home_slider' || img.location === 'both'));
  }, []);

  const sliderImages = images.map(img => ({
    id: img.id,
    url: img.url,
    caption: isEn ? img.caption : img.captionHindi
  }));

  if (images.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8 md:mt-12">
      <div className="mb-4 text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-bold text-slate-800">
          {isEn ? 'Our Facilities' : 'हमारी सुविधाएँ'}
        </h3>
        <p className="text-sm text-slate-500">
          {isEn ? 'Take a look inside Sun City Hospital' : 'सन सिटी हॉस्पिटल के अंदर की एक झलक'}
        </p>
      </div>
      <ImageSlider images={sliderImages} autoPlay={true} interval={3500} />
    </div>
  );
}
