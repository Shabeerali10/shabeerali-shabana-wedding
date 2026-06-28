import { Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 bg-romantic-dark text-white text-center relative overflow-hidden">
      {/* Decorative moon background shadow */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-romantic-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-romantic-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="font-serif text-4xl md:text-5xl mb-4 text-white">
          Shabeerali <span className="text-romantic-gold italic font-normal">&</span> Shabana
        </div>
        
        {/* Beautiful traditional Sunnah blessing */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="text-romantic-gold text-lg md:text-xl font-serif mb-2 tracking-wide opacity-90 font-medium">
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </div>
          <p className="text-white/60 font-sans italic text-xs tracking-wider leading-relaxed">
            "May Allah bless you both, shower His blessings upon you, and unite you in goodness and love."
          </p>
        </div>

        <div className="flex justify-center items-center gap-3 text-white/40 font-sans text-[10px] tracking-[0.4em] uppercase mb-8">
          <Sparkles size={10} className="text-romantic-gold" />
          Made with <Heart size={10} className="text-romantic-gold fill-romantic-gold" /> for Shabeerali & Shabana
          <Sparkles size={10} className="text-romantic-gold" />
        </div>

        <div className="h-px w-24 bg-white/10 mx-auto mb-8" />
        <p className="text-white/30 text-[10px] uppercase tracking-widest font-sans">
          &copy; 2026 Shabeerali & Shabana Wedding. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
