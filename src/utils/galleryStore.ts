export interface GalleryImage {
  id: string;
  url: string;
  caption?: string;
  captionHindi?: string;
  location: 'home_slider' | 'gallery_page' | 'both';
}

// Initial default images for the hospital
const DEFAULT_IMAGES: GalleryImage[] = [
  {
    id: '1',
    url: '/sun-city-front.jpg',
    caption: 'Sun City Hospital - Front View',
    captionHindi: 'सन सिटी हॉस्पिटल - सामने का दृश्य',
    location: 'both'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    caption: 'State-of-the-art ICU',
    captionHindi: 'अत्याधुनिक आईसीयू',
    location: 'home_slider'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop',
    caption: 'Advanced Operation Theatre',
    captionHindi: 'उन्नत ऑपरेशन थियेटर',
    location: 'gallery_page'
  }
];

export const getGalleryImages = (): GalleryImage[] => {
  if (typeof window === 'undefined') return DEFAULT_IMAGES;
  
  const stored = localStorage.getItem('suncity_gallery');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Error parsing gallery from local storage', e);
    }
  }
  
  // Initialize with defaults if empty
  localStorage.setItem('suncity_gallery', JSON.stringify(DEFAULT_IMAGES));
  return DEFAULT_IMAGES;
};

export const saveGalleryImages = (images: GalleryImage[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('suncity_gallery', JSON.stringify(images));
  }
};
