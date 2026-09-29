import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import lifestyleImg1 from '../assets/images/women_sleeveless_saree_salad_1790623622168.jpg';
import lifestyleImg2 from '../assets/images/indian_lady_saree_eating_salad_1790682726320.jpg';

interface LifestyleSectionProps {
  onExploreMenu: () => void;
}

const LIFESTYLE_SLIDES = [
  {
    id: 1,
    image: lifestyleImg1,
    alt: 'Three elegant Indian women in traditional sarees dining together with fresh healthy salad at a luxury restaurant',
    tag: 'Warmth & Togetherness',
    title: 'ঐতিহ্যবাহী আতিথেয়তা ও অর্গানিক ডাইনিং',
    desc: 'বন্ধুবান্ধব ও পরিবারের সাথে স্বাস্থ্যকর আড্ডার সেরা মুহূর্ত।',
  },
  {
    id: 2,
    image: lifestyleImg2,
    alt: 'Graceful Indian lady in ochre saree smiling while enjoying a fresh crisp salad bowl in a sunlit ambiance',
    tag: 'Pure Delight & Wellness',
    title: 'তাজা সালাদে প্রতিটি কামড়ে সতেজতা',
    desc: 'প্রাকৃতিক পুষ্টি, ক্রাঞ্চি সবজি আর প্রাণবন্ত সুস্বাস্থ্যের অনুভূতি।',
  },
];

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({ onExploreMenu }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slideshow transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LIFESTYLE_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % LIFESTYLE_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + LIFESTYLE_SLIDES.length) % LIFESTYLE_SLIDES.length);
  };

  const currentSlide = LIFESTYLE_SLIDES[currentIndex];

  return (
    <section className="relative bg-[#FFFDF5] pt-16 sm:pt-20 lg:pt-24 pb-16 overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#EAF4E3]/40 to-transparent pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#EAF4E3] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF4E3] border border-[#4F8F3A]/20 text-[#183D2B] text-xs font-bold tracking-widest uppercase mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#4F8F3A]" />
            <span className="text-[#183D2B]">HEALTHY DINING & LIFESTYLE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#183D2B] tracking-tight font-bengali leading-tight"
          >
            স্বাদের সঙ্গে সুন্দর মুহূর্ত
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#4F8F3A] font-serif italic mt-2 tracking-wide font-semibold"
          >
            "Fresh food, meaningful moments."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base text-[#183D2B]/80 font-bengali mt-3 max-w-xl mx-auto leading-relaxed font-medium"
          >
            প্রিয় মানুষদের সঙ্গে তাজা ও স্বাস্থ্যকর খাবারের আনন্দ উপভোগ করুন।
          </motion.p>
        </div>

        {/* 16:9 Cinematic Dual-Image Animated Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-[#EAF4E3] bg-[#183D2B] group"
        >
          {/* Main 16:9 Aspect Ratio Frame with Animated Crossfade */}
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide.id}
                src={currentSlide.image}
                alt={currentSlide.alt}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.06, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.98, filter: 'blur(2px)' }}
                transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Subtle Gradient Overlays for Elegance */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#183D2B]/80 via-black/15 to-transparent pointer-events-none" />

            {/* Top Badge: Slide indicator */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2 bg-[#FFFDF5]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#EAF4E3] text-[11px] font-bold text-[#183D2B] shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#4F8F3A] animate-pulse" />
              <span>{currentSlide.tag}</span>
            </div>

            {/* Left & Right Interactive Navigation Controls */}
            <div className="absolute inset-y-0 left-3 sm:left-5 flex items-center z-20">
              <button
                onClick={prevSlide}
                aria-label="Previous Image"
                className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white text-[#183D2B] shadow-lg backdrop-blur-xs flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-[#EAF4E3]"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-3 sm:right-5 flex items-center z-20">
              <button
                onClick={nextSlide}
                aria-label="Next Image"
                className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white text-[#183D2B] shadow-lg backdrop-blur-xs flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-[#EAF4E3]"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Bottom floating micro card with animated caption */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto max-w-md p-4 sm:p-5 rounded-2xl bg-[#FFFDF5]/95 backdrop-blur-md border border-[#EAF4E3] shadow-xl z-20">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#4F8F3A] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Heart className="w-5 h-5 text-white fill-white/30" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#183D2B] font-bengali">
                    {currentSlide.title}
                  </h4>
                  <p className="text-xs text-[#183D2B]/85 font-bengali mt-0.5 leading-snug">
                    {currentSlide.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Indicator dots */}
            <div className="absolute bottom-4 sm:bottom-6 right-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {LIFESTYLE_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx ? 'w-6 h-2 bg-[#4F8F3A]' : 'w-2 h-2 bg-white/60 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dual Thumbnail Switchers Below */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {LIFESTYLE_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center gap-3 px-4 py-2 rounded-2xl transition-all duration-300 border text-left cursor-pointer ${
                currentIndex === idx
                  ? 'bg-[#EAF4E3] border-[#4F8F3A] shadow-sm'
                  : 'bg-white border-[#EAF4E3] hover:border-[#4F8F3A]/40 opacity-75 hover:opacity-100'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-10 h-10 rounded-xl object-cover"
              />
              <div className="text-left hidden sm:block">
                <span className="text-[11px] font-bold text-[#183D2B] block">
                  ছবি {idx + 1}: {slide.tag}
                </span>
                <span className="text-[10px] text-[#4F8F3A] font-semibold">
                  {currentIndex === idx ? '● প্রদর্শন হচ্ছে' : 'ক্লিক করে দেখুন'}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* CTA Button & Transition Area */}
        <div className="text-center pt-8">
          <motion.button
            onClick={onExploreMenu}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group cursor-pointer inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-[#4F8F3A] hover:bg-[#183D2B] rounded-full transition-all duration-300 shadow-lg hover:shadow-[#4F8F3A]/30"
          >
            <span>EXPLORE OUR MENU</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
