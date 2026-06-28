import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Moon, Sparkles } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2074&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop"
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-romantic-beige relative overflow-hidden">
      {/* Decorative starry or moon elements in the background */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 hidden lg:block font-sans text-xs uppercase tracking-[0.6em] text-romantic-gold/20 whitespace-nowrap">
        BLESSED MEMORIES • 2026
      </div>
      <div className="absolute top-12 right-12 text-romantic-gold/10 pointer-events-none">
        <Moon size={120} className="stroke-current" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-romantic-gold" />
            <span className="text-romantic-gold font-sans tracking-[0.4em] uppercase text-[10px] font-bold">A glimpse into our beautiful journey</span>
            <Sparkles className="w-3.5 h-3.5 text-romantic-gold" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-romantic-dark mt-1"
          >
            Treasured Moments
          </motion.h2>
          <div className="w-12 h-[1px] bg-romantic-gold/30 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative aspect-[3/4] group cursor-pointer overflow-hidden rounded-[3rem] border border-romantic-gold/15 bg-white p-3 shadow-xl hover:shadow-2xl transition-all duration-500 ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
              onClick={() => setSelectedImage(img)}
            >
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                <img 
                  src={img} 
                  alt={`Wedding memory ${index + 1}`} 
                  className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-romantic-gold/25 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <motion.div 
                    initial={false}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/35 backdrop-blur-md p-4 rounded-full border border-white/40 shadow-xl"
                  >
                    <Maximize2 className="text-white w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-[85vh] rounded-[2rem] border border-white/15 shadow-2xl p-1.5 bg-white/5"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
