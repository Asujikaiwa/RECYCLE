export type Language = 'th' | 'en' | 'cn';

export interface ProductVariant {
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  category: string;
  name: {
    th: string;
    en: string;
    cn: string;
  };

  description?: {
    th: string;
    en: string;
    cn: string;
  };

  weight: string;
  price: number; 

  variants?: ProductVariant[]; 
  isBestSeller?: boolean;      

  image: string; 
  isNew?: boolean;
}

export interface Translation {
  nav: {
    home: string;
    products: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    certTitle: string; 
    certDesc: string; 
    processTitle: string; 
    facilities: string[]; 
  };
  products: {
    title: string;
    filterAll: string;
    filterSteel: string;     // เปลี่ยนหมวดหมู่ให้เข้ากับเศษเหล็ก
    filterCopper: string;    // เปลี่ยนหมวดหมู่ให้เข้ากับเศษเหล็ก
    filterAluminum: string;  // เปลี่ยนหมวดหมู่ให้เข้ากับเศษเหล็ก
  };
  contact: {
    title: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    followUs: string;
  };
}

export interface HeroSlide {
  id: string;
  url: string; 
  type: 'video'; 
}