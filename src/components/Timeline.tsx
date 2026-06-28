import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

const events = [
  {
    title: "Destined by Qadr",
    date: "A Blessed Connection",
    description: "Two lives written to cross paths in perfect divine timing, finding immediate tranquility and mutual understanding in each other's presence.",
    image: "https://images.unsplash.com/photo-1518196775791-3e9de6088d40?q=80&w=2074&auto=format&fit=crop"
  },
  {
    title: "The Sacred Nikah",
    date: "A Lifelong Covenant",
    description: "Accepting each other as partners for this Dunya and the Akhirah, uniting our lives in obedience and gratitude to Allah (SWT).",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Timeline() {
  return (
    <section id="story" className="py-24 px-4 bg-white relative">
      <div className="absolute top-0 left-10 w-24 h-24 border border-romantic-gold/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-dashed border-romantic-gold/5 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <Sparkles className="w-4 h-4 text-romantic-gold" />
            <span className="text-romantic-gold uppercase tracking-[0.4em] text-[10px] font-bold">With the Blessings of Allah</span>
            <Sparkles className="w-4 h-4 text-romantic-gold" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-romantic-dark mt-2"
          >
            Our Blessed Journey
          </motion.h2>
          <div className="w-12 h-[1px] bg-romantic-gold/30 mx-auto mt-4" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-romantic-gold/20 hidden md:block" />

          <div className="space-y-24">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 px-4">
                  <div className="relative group overflow-hidden rounded-[2.5rem] border border-romantic-gold/10 aspect-[4/5] shadow-2xl bg-slate-50 p-2">
                    <div className="w-full h-full rounded-[2.2rem] overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Dot on Line */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border border-romantic-gold/30 items-center justify-center z-10 shadow-sm">
                  <Heart className="w-3.5 h-3.5 text-romantic-gold fill-romantic-gold/10" />
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 px-4 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-romantic-gold font-sans text-[11px] tracking-[0.4em] uppercase font-bold">{event.date}</span>
                  <h3 className="text-3xl md:text-4xl font-serif text-romantic-dark mt-2 mb-4 leading-none">{event.title}</h3>
                  <p className="text-romantic-dark/70 font-sans text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
