import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ExternalLink, Sparkles } from 'lucide-react';

const weddingDetails = [
  {
    icon: <Calendar className="w-6 h-6" />,
    label: "Date",
    value: "September 12, 2026",
    sub: "Saturday"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: "Blessed Hour",
    value: "01:00 PM",
    sub: "Nikah Ceremony & Feast"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Venue",
    value: "Sofia Lounge",
    sub: "Kadappadi, Malappuram"
  }
];

export default function Details() {
  return (
    <section id="details" className="py-24 bg-romantic-beige relative">
      <div className="absolute top-0 right-10 w-24 h-24 border border-romantic-gold/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-32 h-32 border border-romantic-gold/5 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-romantic-gold" />
            <span className="text-romantic-gold uppercase tracking-[0.4em] text-[10px] font-bold">Barakah & Celebration</span>
            <Sparkles className="w-3.5 h-3.5 text-romantic-gold" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-romantic-dark mt-1"
          >
            Ceremony Details
          </motion.h2>
          <p className="text-romantic-dark/60 font-sans tracking-widest uppercase text-[11px] mt-2">Save the date for our sacred celebration</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Details Column */}
          <div className="space-y-6">
            {weddingDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 p-8 bg-white/30 rounded-3xl border border-romantic-gold/10 hover:border-romantic-gold/20 transition-colors duration-300 shadow-sm"
              >
                <div className="text-romantic-gold pt-1">
                  {detail.icon}
                </div>
                <div>
                  <span className="text-romantic-gold text-[10px] uppercase tracking-[0.4em] font-bold block mb-2">{detail.label}</span>
                  <h4 className="text-2xl md:text-3xl font-serif text-romantic-dark mb-1">{detail.value}</h4>
                  <p className="text-romantic-dark/50 font-sans text-xs tracking-wider uppercase">{detail.sub}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-4"
            >
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Shabeerali+%26+Shabana+Wedding&dates=20260912T130000/20260912T170000&details=Blessed+Nikah+Ceremony+and+wedding+feast+at+Sofia+Lounge,+Kadappadi,+Malappuram.&location=Sofia+Lounge,+Kadappadi,+Malappuram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-romantic-gold text-white rounded-full hover:bg-romantic-dark transition-colors duration-300 w-full sm:w-auto justify-center shadow-md font-sans text-xs font-semibold tracking-widest uppercase"
              >
                <ExternalLink className="w-4 h-4" />
                Add to Google Calendar
              </a>
            </motion.div>
          </div>

          {/* Venue Photo + Map Link */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col gap-4"
          >
            <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-xl bg-white border border-romantic-gold/10 p-2">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                <img
                  src="/Venue.jpg"
                  alt="Sofia Lounge, Kadappadi, Malappuram"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-romantic-gold/20 pointer-events-none">
                  <span className="text-[10px] text-romantic-gold uppercase tracking-[0.3em] font-bold">Sofia Lounge</span>
                </div>
              </div>
            </div>

            {/* Map Link */}
            <div className="text-center mt-2">
              <a
                href="https://maps.app.goo.gl/7cv5nh6fsNr8iYqv9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-romantic-gold hover:text-romantic-dark transition-colors duration-300 bg-white/50 px-6 py-3 rounded-full border border-romantic-gold/10"
              >
                <div className="w-8 h-8 border border-romantic-gold/20 rounded-full flex items-center justify-center bg-white">
                  <MapPin className="w-4 h-4 text-romantic-gold" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-serif font-bold">View on Google Maps</p>
                  <p className="text-[9px] text-romantic-dark/50 font-sans uppercase tracking-widest">Sofia Lounge · Kadappadi, Malappuram</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-50" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
