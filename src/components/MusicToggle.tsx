import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Music, Pause } from 'lucide-react';

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Autoplay is blocked by browsers until the user interacts with the page.
    const startOnFirstInteraction = () => {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
      window.removeEventListener('click', startOnFirstInteraction);
      window.removeEventListener('touchstart', startOnFirstInteraction);
    };
    window.addEventListener('click', startOnFirstInteraction);
    window.addEventListener('touchstart', startOnFirstInteraction);

    return () => {
      window.removeEventListener('click', startOnFirstInteraction);
      window.removeEventListener('touchstart', startOnFirstInteraction);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
      <motion.button
        onClick={toggle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full border border-white/30 bg-white/20 backdrop-blur-xl shadow-2xl flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={isPlaying ? { duration: 6, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }}
          className="w-9 h-9 rounded-full bg-romantic-gold/90 flex items-center justify-center text-white"
        >
          {isPlaying ? <Pause size={16} fill="currentColor" /> : <Music size={16} />}
        </motion.div>
      </motion.button>
    </>
  );
}
