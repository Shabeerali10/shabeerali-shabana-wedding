import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Letters() {
  return (
    <section id="invitation" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements inspired by traditional organic motifs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-romantic-blush/20 blur-3xl" />
        <div className="absolute bottom-12 right-10 w-72 h-72 rounded-full bg-romantic-gold/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-romantic-gold font-sans tracking-[0.4em] uppercase text-[10px] font-bold mb-2"
          >
            Blessed Union
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif tracking-tight text-romantic-dark"
          >
            Our Invitation
          </motion.h2>
          <div className="w-12 h-[1px] bg-romantic-gold/30 mx-auto mt-4" />
        </div>

        {/* Main Invitation Card with elegant arch-like border feeling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-romantic-beige/40 border border-romantic-gold/15 rounded-[2.5rem] p-8 md:p-16 text-center shadow-sm relative overflow-hidden glass"
        >
          {/* Subtle floral/geometric border accents */}
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-romantic-gold/5 rounded-[2.2rem] pointer-events-none" />

          {/* Basmala in elegant Arabic script and English Translation */}
          <div className="mb-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl text-romantic-gold tracking-wide leading-relaxed mb-3"
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </motion.div>
            <p className="text-xs md:text-sm font-serif italic text-romantic-dark/60 tracking-wider">
              "In the Name of Allah, the Most Gracious, the Most Merciful"
            </p>
          </div>

          {/* Islamic Greeting */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 bg-white/60 rounded-full text-xs md:text-sm font-sans font-medium text-romantic-gold border border-romantic-gold/10 tracking-wide">
              Assalamu Alaikum Wa Rahmatullahi Wa Barakatuh 🌙
            </span>
          </motion.div>

          {/* Main Invitation Body */}
          <div className="space-y-6 max-w-2xl mx-auto font-sans text-base md:text-lg text-romantic-dark/80 leading-relaxed mb-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              With hearts full of gratitude to Allah (SWT), we joyfully announce that
            </motion.p>
            
            {/* The Couple Names styled beautifully */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
              className="py-4 my-2 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4"
            >
              <span className="text-3xl md:text-4xl font-serif text-romantic-dark tracking-tight font-semibold">
                Shabeerali
              </span>
              <span className="text-xl md:text-2xl font-serif italic text-romantic-gold font-normal">
                &
              </span>
              <span className="text-3xl md:text-4xl font-serif text-romantic-dark tracking-tight font-semibold">
                Shabana
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="font-medium text-romantic-gold"
            >
              are to be united in the blessed bond of Nikah
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-sm md:text-base text-romantic-dark/70"
            >
              We humbly request the honor of your presence to share in this blessed occasion and pray that Allah fills our union with love, mercy, and barakah.
            </motion.p>
          </div>

          {/* Beautiful Quranic Verse card inside the main card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="bg-white/50 border border-romantic-gold/10 p-6 md:p-8 rounded-3xl max-w-xl mx-auto shadow-sm relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-romantic-beige px-4 py-0.5 rounded-full border border-romantic-gold/10 text-[10px] uppercase tracking-widest text-romantic-gold font-bold">
              Quran 30:21
            </div>
            <p className="font-serif italic text-sm md:text-base text-romantic-dark/80 leading-relaxed mb-4">
              "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."
            </p>
            <div className="w-6 h-[1px] bg-romantic-gold/30 mx-auto" />
          </motion.div>

          {/* Families' Signatures */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-12 space-y-2"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-romantic-gold font-bold">
              Jazakallahu Khayran 🤍
            </p>
            <p className="text-sm md:text-base font-serif italic text-romantic-dark">
              Shabeerali & Shabana's Families
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
