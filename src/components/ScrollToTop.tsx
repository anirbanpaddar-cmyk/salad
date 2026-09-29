import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollToTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      if (currentScroll > 320) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {showScroll && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group relative w-12 h-12 rounded-full bg-[#183D2B] text-white shadow-xl hover:shadow-[#4F8F3A]/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-[#EAF4E3] cursor-pointer"
          >
            {/* Circular SVG Scroll Progress Indicator */}
            <svg className="absolute -inset-1 w-14 h-14 -rotate-90 pointer-events-none">
              <circle
                cx="28"
                cy="28"
                r="22"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                className="text-[#EAF4E3]/30"
              />
              <circle
                cx="28"
                cy="28"
                r="22"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="138"
                strokeDashoffset={138 - (138 * scrollProgress) / 100}
                strokeLinecap="round"
                className="text-[#4F8F3A] transition-all duration-150"
              />
            </svg>

            <ArrowUp className="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
