import { motion } from 'motion/react';
import { Send, CheckCircle2, Sparkles, Moon } from 'lucide-react';
import { useState, FormEvent } from 'react';

// Paste the URL you get after deploying the Apps Script as a Web App (see SETUP_RSVP.md)
const RSVP_ENDPOINT = 'https://script.google.com/macros/s/AKfycbz8M6JKO_y7ojrUD8PVPwVXucuTxqmaeNQPm1-z5ByjeWTnZgW39dblZB6KjzWpL3A/exec';

export default function RSVP() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      attending: data.get('attending'),
      guests: data.get('guests'),
      message: data.get('message'),
    };

    try {
      await fetch(RSVP_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      });
      setFormStatus('success');
      form.reset();
      setAttending('yes');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="rsvp" className="py-24 bg-white relative">
      {/* Decorative floral or geometric accent frames */}
      <div className="absolute top-10 left-10 text-romantic-gold/5 pointer-events-none">
        <Moon size={90} className="stroke-current" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="relative p-8 md:p-16 rounded-[3rem] bg-romantic-beige overflow-hidden shadow-2xl border border-romantic-gold/10">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-romantic-blush opacity-30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-romantic-gold" />
                <span className="text-romantic-gold text-[10px] uppercase tracking-[0.4em] font-bold">Insha'Allah</span>
                <Sparkles className="w-3.5 h-3.5 text-romantic-gold" />
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-serif text-romantic-dark mb-3"
              >
                Will You Honor Us?
              </motion.h2>
              <p className="text-romantic-dark/60 font-sans tracking-widest uppercase text-[10px] md:text-xs">Please fill by August 28th, 2026</p>
            </div>

            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-romantic-gold/10 rounded-full flex items-center justify-center mb-6 border border-romantic-gold/20">
                  <CheckCircle2 className="w-10 h-10 text-romantic-gold" />
                </div>
                <h3 className="text-3xl font-serif mb-2">Jazakallahu Khayran!</h3>
                <p className="text-romantic-dark/70">Your response has been saved. We look forward to celebrating with you!</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-romantic-gold hover:underline font-sans text-[10px] tracking-widest uppercase font-bold"
                >
                  Edit Response
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-romantic-dark/60 ml-2">Full Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-6 py-4 rounded-full bg-white border border-romantic-gold/10 focus:outline-none focus:ring-2 focus:ring-romantic-gold/10 focus:border-romantic-gold transition-all font-sans text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-romantic-dark/60 ml-2">Email Address</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full px-6 py-4 rounded-full bg-white border border-romantic-gold/10 focus:outline-none focus:ring-2 focus:ring-romantic-gold/10 focus:border-romantic-gold transition-all font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-romantic-dark/60 ml-2">Will you attend?</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        className="hidden peer"
                        checked={attending === 'yes'}
                        onChange={() => setAttending('yes')}
                      />
                      <div className="px-6 py-4 rounded-full bg-white border border-romantic-gold/10 text-center text-xs tracking-wider uppercase font-semibold peer-checked:bg-romantic-gold peer-checked:text-white transition-all hover:bg-romantic-gold/5">
                        Yes, Insha'Allah!
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        className="hidden peer"
                        checked={attending === 'no'}
                        onChange={() => setAttending('no')}
                      />
                      <div className="px-6 py-4 rounded-full bg-white border border-romantic-gold/10 text-center text-xs tracking-wider uppercase font-semibold peer-checked:bg-romantic-dark peer-checked:text-white transition-all hover:bg-romantic-dark/5">
                        Sorry, I cannot attend
                      </div>
                    </label>
                  </div>
                  {attending === 'yes' && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-romantic-gold text-xs font-serif italic pt-1"
                    >
                      Alhamdulillah! We can't wait to celebrate with you.
                    </motion.p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-romantic-dark/60 ml-2">Number of Guests</label>
                  <div className="relative">
                    <select
                      name="guests"
                      className="w-full px-6 py-4 rounded-full bg-white border border-romantic-gold/10 focus:outline-none focus:ring-2 focus:ring-romantic-gold/10 focus:border-romantic-gold transition-all appearance-none font-sans text-sm"
                    >
                      <option>Just me</option>
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>Family (4+)</option>
                    </select>
                    <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-romantic-gold">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-romantic-dark/60 ml-2">Message for the Couple</label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Wishes, prayers, dietary requirements, etc."
                    className="w-full px-6 py-4 rounded-[2rem] bg-white border border-romantic-gold/10 focus:outline-none focus:ring-2 focus:ring-romantic-gold/10 focus:border-romantic-gold transition-all resize-none font-sans text-sm"
                  ></textarea>
                </div>

                {formStatus === 'error' && (
                  <p className="text-center text-red-500 text-xs font-sans">
                    Something went wrong sending your response. Please try again.
                  </p>
                )}

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-5 bg-romantic-gold text-white rounded-full font-sans font-bold text-[10px] md:text-xs tracking-[0.4em] uppercase hover:bg-romantic-dark transition-all duration-500 flex items-center justify-center gap-2 shadow-xl"
                >
                  {formStatus === 'submitting' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Kindly Respond
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
