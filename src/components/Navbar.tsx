import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';

const links = [
  { name: 'Our Story', href: '#story' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Invitation', href: '#invitation' },
  { name: 'Details', href: '#details' },
  { name: 'RSVP', href: '#rsvp' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <motion.div
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            className={`font-serif text-2xl tracking-tighter ${isScrolled ? 'text-romantic-dark' : 'text-white'}`}
          >
            S <span className="text-romantic-blush h-4 w-4 inline-block mx-0.5"><Heart fill="currentColor" className="w-full h-full" /></span> S
          </motion.div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-[11px] font-sans tracking-[0.3em] uppercase transition-colors hover:text-romantic-gold ${
                isScrolled ? 'text-romantic-dark' : 'text-white/70'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-romantic-dark' : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-romantic-blush/20 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-romantic-dark hover:text-romantic-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
