import React, { useState, useEffect } from 'react';
import { Translation } from '../types';
import { Award, ShieldCheck, Leaf, History, CheckCircle, ChevronLeft, ChevronRight, Truck } from 'lucide-react';

interface AboutProps {
  t: Translation['about'];
}

const About: React.FC<AboutProps> = ({ t }) => {
  const facilityImages = [
    // สามารถใส่รูปภาพกองเหล็ก รถบรรทุก หรือหน้าร้านของคุณได้ที่นี่
    'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1518534846495-ea57476e3d2d?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facilityImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [facilityImages.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % facilityImages.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="w-full lg:w-5/12 flex justify-center order-2 lg:order-1">
            <div className="relative rounded-full overflow-hidden shadow-xl border-8 border-green-50 aspect-square w-64 md:w-80 lg:w-full max-w-md bg-green-600 flex items-center justify-center text-white">
              {/* รอรูปภาพโลโก้ หรือใช้ข้อความชั่วคราว */}
              <span className="text-4xl font-bold text-center">บุญปก<br/>รีไซเคิล</span>
            </div>
          </div>

          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 border-b-2 border-green-600 pb-4 inline-flex">
              <History className="text-green-600" size={32} />
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-900">
                {t.title}
              </h2>
            </div>
            
            <div className="text-gray-700 leading-relaxed space-y-4 mb-8 text-base md:text-lg">
              {t.description.split('\n').map((paragraph, idx) => (
                paragraph.trim() !== '' && <p key={idx} className="indent-4">{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-green-100">
              <div className="flex flex-col items-center text-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition">
                <ShieldCheck size={36} className="text-green-600 mb-2" />
                <span className="font-bold text-green-900 text-sm">เครื่องชั่งมาตรฐาน</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition">
                <Truck size={36} className="text-green-600 mb-2" />
                <span className="font-bold text-green-900 text-sm">บริการรับถึงที่</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition">
                <Award size={36} className="text-green-600 mb-2" />
                <span className="font-bold text-green-900 text-sm">ให้ราคายุติธรรม</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-900 rounded-3xl shadow-lg p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-3/5 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2 text-green-300">
                <CheckCircle className="text-green-400" size={28} />
                {t.certTitle}
              </h3>
              <p className="text-green-50 text-lg leading-relaxed mb-6">
                {t.certDesc.split('\n').map((paragraph, idx) => (
                   <React.Fragment key={idx}>
                      {paragraph}
                      <br/>
                   </React.Fragment>
                ))}
              </p>
            </div>
            <div className="w-full md:w-2/5">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm text-center">
                    <Leaf className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <p className="text-white font-bold text-xl">มุ่งมั่นดูแลสิ่งแวดล้อม</p>
                </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-green-900 mb-3">{t.processTitle}</h3> 
            <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100 max-w-5xl mx-auto flex flex-col md:flex-row group">
            
            <div className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-auto md:h-[450px] bg-green-950 overflow-hidden">
              {facilityImages.map((src, index) => (
                <img 
                  key={index}
                  src={src} 
                  alt={`Process ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay transition-all duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                  }`}
                />
              ))}
            </div>

            <div className="w-full md:w-1/2 relative bg-white flex items-center justify-center min-h-[250px] md:min-h-[450px] p-8 md:p-12">
              {t.facilities.map((desc, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center transition-all duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 z-0 pointer-events-none'
                  }`}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}

              <button 
                onClick={handlePrev} 
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-green-600/80 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition opacity-0 group-hover:opacity-100 z-20 shadow-md backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNext} 
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-green-600/80 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition opacity-0 group-hover:opacity-100 z-20 shadow-md backdrop-blur-sm"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {facilityImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'bg-green-600 w-8' : 'bg-gray-300 w-2.5 hover:bg-green-400'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;