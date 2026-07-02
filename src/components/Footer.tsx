import { Heart, Sparkles, Instagram } from 'lucide-react';

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

        {/* Instagram */}
        <div className="mb-8">
          <p className="text-white/40 text-[10px] uppercase tracking-widest font-sans mb-3">
            Wishes · Questions · Updates
          </p>
          <a
            href="https://www.instagram.com/x.pyler/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-romantic-gold/40 transition-all duration-300 group"
          >
            <Instagram className="w-4 h-4 text-romantic-gold group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white/70 group-hover:text-white transition-colors text-xs font-sans tracking-wider">@x.pyler</span>
          </a>
        </div>

        <div className="h-px w-24 bg-white/10 mx-auto mb-8" />
        <p className="text-white/30 text-[10px] uppercase tracking-widest font-sans">
          &copy; 2026 Shabeerali & Shabana Wedding. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
