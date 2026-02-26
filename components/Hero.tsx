import React, { useState, useRef, useEffect } from 'react';
import { Translation, HeroSlide } from '../types';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import { db } from '../firebase'; 
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

interface HeroProps {
  t: Translation['hero'];
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ t, scrollToSection }) => {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const q = query(collection(db, 'hero_slides'), orderBy('createdAt', 'desc')); 
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedSlides = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as HeroSlide[];
      setSlides(loadedSlides);
    });
    return () => unsubscribe();
  }, []);

  const handleNext = () => {
    if (slides.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    if (slides.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [currentIndex]);

  if (slides.length === 0) {
    return (
      <section id="home" className="relative h-screen w-full bg-green-950 flex items-center justify-center">
         <div className="text-white text-opacity-50 font-bold">กำลังโหลดวิดีโอ...</div>
      </section>
    );
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-green-950">
      <div className="absolute inset-0 w-full h-full">
         <video 
            ref={videoRef}
            key={slides[currentIndex].id}
            autoPlay 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
            src={slides[currentIndex].url} 
            onEnded={handleNext}
          />
      </div>

      {slides.length > 1 && (
        <>
          <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition">
            <ChevronLeft size={48} />
          </button>
          <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition">
            <ChevronRight size={48} />
          </button>
        </>
      )}

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, idx) => (
          <div 
            key={idx} 
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-green-500 w-8' : 'bg-white/50'}`} 
          />
        ))}
      </div>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl drop-shadow-md">
          {t.subtitle}
        </p>
        <button 
          onClick={() => scrollToSection('products')}
          className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 border-2 border-transparent hover:border-white"
        >
          {t.cta}
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
        <ChevronDown size={48} className="text-white drop-shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;