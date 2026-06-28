import { useRef, useState, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

const events = [
  {
    title: "Destined by Qadr",
    date: "A Blessed Connection",
    description: "Two lives written to cross paths in perfect divine timing, finding immediate tranquility and mutual understanding in each other's presence.",
    image: "/stage.png"
  },
  {
    title: "The Sacred Nikah",
    date: "A Lifelong Covenant",
    description: "Accepting each other as partners for this Dunya and the Akhirah, uniting our lives in obedience and gratitude to Allah (SWT).",
    image: "/Nikah.png"
  }
];

// Premium easing curve used across entrance + hover animations
const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

function TiltImage({ image, title }: { image: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 200, damping: 20, mass: 0.5 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 200, damping: 20, mass: 0.5 });

  const glowX = useTransform(rotateY, [-12, 12], [0, 100]);
  const glowY = useTransform(rotateX, [12, -12], [0, 100]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateYRaw.set((px - 0.5) * 24);
    rotateXRaw.set((0.5 - py) * 24);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  };

  return (
    <div className="w-full md:w-1/2 px-4" style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative group rounded-[2.5rem] aspect-[4/5]"
      >
        {/* Ambient glow that follows the cursor */}
        <motion.div
          className="absolute -inset-6 rounded-[3rem] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"
          style={{
            background: useTransform(
              [glowX, glowY] as any,
              ([gx, gy]: number[]) =>
                `radial-gradient(circle at ${gx}% ${gy}%, rgba(212,175,90,0.35), transparent 60%)`
            ),
          }}
        />

        {/* Glass frame */}
        <div className="relative w-full h-full rounded-[2.5rem] border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl p-2 overflow-hidden">
          <div
            className="w-full h-full rounded-[2.2rem] overflow-hidden"
            style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-t from-romantic-dark/40 via-transparent to-white/10 mix-blend-overlay" />
          </div>

          {/* Specular sheen */}
          <motion.div
            className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 40%)',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="story" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-romantic-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-romantic-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-10 w-24 h-24 border border-romantic-gold/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-dashed border-romantic-gold/5 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: PREMIUM_EASE }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <Sparkles className="w-4 h-4 text-romantic-gold" />
            <span className="text-romantic-gold uppercase tracking-[0.4em] text-[10px] font-bold">With the Blessings of Allah</span>
            <Sparkles className="w-4 h-4 text-romantic-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: PREMIUM_EASE, delay: 0.1 }}
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
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.15, ease: PREMIUM_EASE }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                {/* Image Side */}
                <TiltImage image={event.image} title={event.title} />

                {/* Dot on Line */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white/70 backdrop-blur-md border border-romantic-gold/30 items-center justify-center z-10 shadow-sm">
                  <Heart className="w-3.5 h-3.5 text-romantic-gold fill-romantic-gold/10" />
                </div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, delay: index * 0.15 + 0.2, ease: PREMIUM_EASE }}
                  className={`w-full md:w-1/2 px-4 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                >
                  <div className="relative inline-block rounded-3xl border border-white/40 bg-white/30 backdrop-blur-xl shadow-xl px-6 py-6 max-w-sm">
                    <span className="text-romantic-gold font-sans text-[11px] tracking-[0.4em] uppercase font-bold">{event.date}</span>
                    <h3 className="text-3xl md:text-4xl font-serif text-romantic-dark mt-2 mb-4 leading-none">{event.title}</h3>
                    <p className="text-romantic-dark/70 font-sans text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
