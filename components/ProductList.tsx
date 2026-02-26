import React, { useState, useEffect } from 'react';
import { Translation, Product, Language } from '../types';
import { db } from '../firebase'; 
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { Search, ChevronDown, Percent } from 'lucide-react';

interface ProductListProps {
  t: Translation['products'];
  currentLang: Language;
}

const ProductCard: React.FC<{ product: Product, currentLang: Language }> = ({ product, currentLang }) => {  
  const variants = product.variants && product.variants.length > 0 
    ? product.variants 
    : (product.weight ? [{ weight: product.weight, price: product.price || 0 }] : []);
  
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeVariant = variants[selectedIdx] || { weight: '-', price: 0 };

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 flex flex-col h-full relative">
      
      <div className="relative overflow-hidden aspect-square bg-gray-100 flex-shrink-0">
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.isNew && (
            <span className="bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full shadow-sm">อัปเดตใหม่</span>
          )}
          {product.isBestSeller && (
            <span className="bg-yellow-400 text-yellow-900 text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full shadow-sm">🔥 รับซื้อไม่อั้น</span>
          )}
        </div>

        <img 
          src={product.image || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80'} 
          alt={product.name[currentLang]} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        
        <div className="absolute inset-0 bg-green-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
          <span className="text-white font-bold border-2 border-white px-4 py-2 rounded-full">
            ดูรายละเอียด
          </span>
        </div>
      </div>

      <div className="p-4 text-center flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-3 min-h-[3rem] flex items-center justify-center line-clamp-2">
            {product.name[currentLang]}
          </h3>
          
          {variants.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-1.5 mb-3">
              {variants.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIdx(i)}
                  className={`text-xs px-2 sm:px-3 py-1 rounded-md border font-medium transition-all ${
                    selectedIdx === i 
                    ? 'bg-green-600 text-white border-green-600' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-green-500'
                  }`}
                >
                  {v.weight}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-xs text-gray-400 mb-3">ประเมินหน้างาน</p>
          )}
        </div>

        <div className="mt-auto">
          {activeVariant.price > 0 ? (
            <p className="text-green-700 font-bold text-xl sm:text-2xl">
              ฿{activeVariant.price}
            </p>
          ) : (
            <p className="text-green-600 text-sm font-medium bg-green-50 py-1 rounded-md">
              ประเมินราคาตามตลาด
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductList: React.FC<ProductListProps> = ({ t, currentLang }) => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [banners, setBanners] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const qProduct = query(collection(db, 'products'), orderBy('category'));
    const unsubProduct = onSnapshot(qProduct, (snapshot) => {
      setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[]);
      setLoading(false);
    });

    const qBanner = query(collection(db, 'banners'));
    const unsubBanner = onSnapshot(qBanner, (snapshot) => {
      setBanners(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => { unsubProduct(); unsubBanner(); };
  }, []);

  useEffect(() => {
    setVisibleCount(12);
  }, [filter, searchTerm]);

  const filteredProducts = products.filter(p => {
    if ((p as any).isHidden) return false; 
    const matchCategory = filter === 'all' || p.category === filter;
    const matchSearch = p.name.th.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        (p.name.en && p.name.en.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // เปลี่ยนหมวดหมู่ตรงนี้ให้ตรงกับธุรกิจเหล็ก
  const categories = [
    { id: 'all', label: t.filterAll },
    { id: 'steel', label: t.filterSteel },
    { id: 'copper', label: t.filterCopper },
    { id: 'aluminum', label: t.filterAluminum },
  ];

  return (
    <section id="products" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {banners.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 border-l-4 border-green-600 pl-3">
              <Percent className="text-green-600" size={24} />
              <h3 className="text-2xl font-bold text-gray-800">โปรโมชั่นพิเศษ (รับซื้อไม่อั้น)</h3>
            </div>
            
            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">
              {banners.map((b) => (
                <div key={b.id} className="snap-center flex-shrink-0 w-[85%] md:w-[60%] lg:w-[45%]">
                  <img 
                    src={b.url} 
                    alt="Promotion Banner" 
                    className="w-full h-auto aspect-[16/9] object-cover rounded-2xl shadow-lg border border-green-200"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-green-900 mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600" size={20} />
            <input 
              type="text" 
              placeholder="ค้นหาประเภทเศษเหล็ก..." 
              className="w-full pl-12 pr-4 py-3 rounded-full border border-green-200 shadow-sm focus:ring-2 focus:ring-green-500 outline-none transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${
                filter === cat.id 
                  ? 'bg-green-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-green-700 border border-green-200 hover:bg-green-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20 text-green-600 flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mb-4"></div>
            กำลังโหลดข้อมูลราคารับซื้อ...
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} currentLang={currentLang} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
               <div className="text-center text-gray-500 mt-12 bg-white p-8 rounded-xl border border-dashed border-green-300">
                 ไม่พบรายการที่คุณค้นหา
               </div>
            )}

            {filteredProducts.length > visibleCount && (
              <div className="text-center mt-12">
                <button 
                  onClick={() => setVisibleCount(prev => prev + 12)}
                  className="inline-flex items-center px-8 py-3 bg-white border border-green-600 text-green-600 font-bold rounded-full hover:bg-green-600 hover:text-white transition shadow-sm"
                >
                  ดูรายการเพิ่มเติม <ChevronDown size={20} className="ml-2" />
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
};

export default ProductList;