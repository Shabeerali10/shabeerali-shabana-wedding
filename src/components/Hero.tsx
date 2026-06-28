import { motion } from 'motion/react';
import { ChevronDown, Moon, Sparkles, Music, Music2 } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with elegant overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop")',
          filter: 'brightness(0.55)'
        }}
      />

      {/* Elegant Golden-Amber Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-romantic-dark/20 to-romantic-beige" />

      {/* Stars/Sparkle ambient background particles using CSS */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-romantic-gold/40 rounded-full animate-ping duration-1000" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-romantic-gold/30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-romantic-gold/50 rounded-full animate-ping" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full h-full pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-left md:w-3/5"
        >
          {/* Islamic Greeting Element */}
          <div className="flex items-center gap-2 mb-4">
            <Moon className="w-5 h-5 text-romantic-gold fill-romantic-gold/10" />
            <span className="text-[10px] text-romantic-gold uppercase tracking-[0.5em] font-sans font-bold">In The Name of Allah</span>
            <Sparkles className="w-4 h-4 text-romantic-gold animate-pulse" />
          </div>

          {/* Golden Basmala */}
          <div className="text-romantic-gold text-2xl md:text-3xl font-serif mb-4 tracking-wide opacity-90 font-medium">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </div>

          <span className="text-white/80 uppercase tracking-[0.4em] text-xs md:text-sm mb-6 block font-sans font-medium">
            September 12, 2026
          </span>

          <h1 className="text-6xl md:text-[110px] text-white font-serif mb-8 leading-[0.9] tracking-tighter">
            Shabeerali<br />
            <span className="text-romantic-gold italic font-normal font-serif">&</span> Shabana
          </h1>

          <p className="text-base md:text-lg text-white/90 font-sans italic tracking-wide max-w-md border-l-2 border-romantic-gold/50 pl-6 py-2 leading-relaxed">
            "And of His signs is that He created for you from yourselves mates that you may find tranquility..." 
            <span className="block text-xs mt-2 text-romantic-gold uppercase tracking-wider font-semibold font-sans not-italic">— Quran 30:21</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="relative mt-12 md:mt-0"
        >
          {/* Frame inspired by elegant archways */}
          <div className="w-[280px] h-[380px] md:w-[350px] md:h-[480px] border border-romantic-gold/30 rounded-[3rem] overflow-hidden bg-white/5 relative p-2 shadow-2xl">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
              <img
                src="/Manali.jpeg"
                alt="The Couple"
                className="w-full h-full object-cover grayscale-[15%] contrast-[105%] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
          {/* Delicate Arch / Crescent Circle Detail */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-dashed border-romantic-gold/20 rounded-full animate-[spin_30s_linear_infinite]" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-romantic-gold/15 rounded-full" />

          <div className="absolute top-1/2 -right-16 translate-y-1/2 rotate-90 hidden lg:block font-sans text-[10px] uppercase tracking-[0.7em] text-white/30 whitespace-nowrap">
            BARAKALLAHU LAKUMA • 2026
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown className="text-white/60 w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Music Toggle */}
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full glass hover:bg-white/30 transition-all duration-300 group shadow-lg"
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <Music2 className="w-5 h-5 text-romantic-dark group-hover:scale-110 transition-transform" />
        ) : (
          <Music className="w-5 h-5 text-romantic-dark/50 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Audio Embed */}
      {isPlaying && (
        <div className="hidden">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          ></iframe>
        </div>
      )}
    </section>
  );
}
