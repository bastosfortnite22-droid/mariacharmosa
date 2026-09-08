export interface BusinessConfig {
  name: string;
  tagline: string;
  segment: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappMessage: string;
  whatsappUrl: string;
  googleRating: number;
  googleReviewsCount: number;
  googleMapsUrl: string;
  googleReviewsUrl: string;
  instagramUrl: string;
  openingHoursNotice: string;
}

export type CategoryType = 'todas' | 'cabelo' | 'unhas' | 'sobrancelhas' | 'estetica' | 'espaco';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'cabelo' | 'unhas' | 'sobrancelhas' | 'estetica';
  description: string;
  iconName: string;
  recommendedPhotoKey?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cabelo' | 'unhas' | 'sobrancelhas' | 'estetica' | 'espaco';
  categoryLabel: string;
  description: string;
  defaultImagePath: string;
  photoKey: string;
  isBeforeAfter?: boolean;
}

export interface ReviewItem {
  id: string;
  comment: string;
  rating: number;
  authorLabel: string; // e.g. "Cliente Verificada no Google"
  verified: boolean;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
