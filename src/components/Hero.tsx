import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Heart,
  Salad,
  Truck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Flame,
} from 'lucide-react';
import { HERO_IMAGE, ABOUT_IMAGE } from '../data/saladData';
import greekImg from '../assets/images/salad_green_greek_1790602974677.jpg';
import fruitImg from '../assets/images/salad_fruit_mango_1790602988524.jpg';
import chickenImg from '../assets/images/salad_chicken_protein_1790603000138.jpg';
import { TextScanner } from '@/components/ui/animated-text-10';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onExploreMenu: () => void;
  onOrderNow: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    image: HERO_IMAGE,
    name: 'Green Signature Salad',
    bangla: 'গ্রিন সিগনেচার সালাদ',
    badge: '১০০% টাটকা খামার',
    calories: '110 kcal',
    tag: 'Daily Fresh',
    icon: '🥗',
  },
  {
    id: 2,
    image: greekImg,
    name: 'Greek Mediterranean Salad',
    bangla: 'গ্রীক ফেটা অ্যান্ড অলিভ',
    badge: 'প্রিমিয়াম ফেটা চিজ',
    calories: '190 kcal',
    tag: 'Chef Signature',
    icon: '🫒',
  },
  {
    id: 3,
    image: fruitImg,
    name: 'Exotic Fruit & Mango Salad',
    bangla: 'ফ্রুট অ্যান্ড ম্যাঙ্গো সালাদ',
    badge: 'অ্যান্টিঅক্সিডেন্ট রিচ',
    calories: '175 kcal',
    tag: 'Seasonal Special',
    icon: '🥭',
  },
  {
    id: 4,
    image: chickenImg,
    name: 'Grilled Chicken Protein Bowl',
    bangla: 'হাই-প্রোটিন চিকেন বাউল',
    badge: '২৮ গ্রাম পিওর প্রোটিন',
    calories: '320 kcal',
    tag: 'Fitness Diet',
    icon: '🍗',
  },
  {
    id: 5,
    image: ABOUT_IMAGE,
    name: 'Crisp Farm Vegetable Salad',
    bangla: 'ক্রিস্প ভেজিটেবল সালাদ',
    badge: 'সরাসরি খামার থেকে',
    calories: '140 kcal',
    tag: 'Garden Harvest',
    icon: '🌱',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOrderNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Sequential automatic slide animation every 3.8s
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const activeSlideData = HERO_SLIDES[currentSlide];
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-gradient-to-b from-[#FFFDF5] via-[#FFFDF5] to-[#F5FAF0]"
    >
      {/* Subtle organic background glow accents */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#EAF4E3]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#EAF4E3]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE: Hero text and CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Small label: FRESH • HEALTHY • HANDCRAFTED */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4E3] text-[#4F8F3A] border border-[#4F8F3A]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#4F8F3A]" />
              <TextScanner
                text="FRESH • HEALTHY • HANDCRAFTED"
                className="text-xs font-bold tracking-widest uppercase"
                inkColor="#4F8F3A"
                accentColor="#183D2B"
                duration={3.0}
              />
            </div>

            {/* Large Bengali headline: তাজা স্বাদের এক নতুন অভিজ্ঞতা */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#17251C] leading-[1.25] tracking-tight font-bengali">
              <span className="block">
                <TextScanner
                  text="তাজা স্বাদের"
                  className="text-[#17251C] inline-block font-extrabold font-bengali whitespace-normal sm:whitespace-pre"
                  inkColor="#17251C"
                  accentColor="#4F8F3A"
                  duration={2.8}
                />
              </span>
              <span className="block mt-1 sm:mt-2">
                <TextScanner
                  text="এক নতুন অভিজ্ঞতা"
                  className="text-[#4F8F3A] inline-block font-extrabold font-bengali whitespace-normal sm:whitespace-pre"
                  inkColor="#4F8F3A"
                  accentColor="#183D2B"
                  duration={3.2}
                />
              </span>
            </h1>

            {/* Supporting text: তাজা উপকরণ, রঙিন সবজি এবং যত্নে তৈরি স্বাস্থ্যকর খাবারের এক premium dining experience. */}
            <p className="text-base sm:text-lg text-[#17251C]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal font-bengali">
              তাজা উপকরণ, রঙিন সবজি এবং যত্নে তৈরি স্বাস্থ্যকর খাবারের এক premium dining experience.
            </p>

            {/* CTA buttons with shadcn Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* [ EXPLORE MENU ] */}
              <Button
                onClick={onExploreMenu}
                size="lg"
                className="w-full sm:w-auto rounded-full px-7 py-6 text-sm font-bold tracking-wider text-white bg-[#4F8F3A] hover:bg-[#183D2B] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 gap-2.5 cursor-pointer group"
              >
                <span>EXPLORE MENU</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              {/* [ HOME DELIVERY ORDER ] */}
              <Button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full px-7 py-6 text-sm font-bold tracking-wider text-[#183D2B] hover:text-white bg-white hover:bg-[#4F8F3A] border-2 border-[#4F8F3A]/40 hover:border-[#4F8F3A] transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 active:scale-95 gap-2.5 cursor-pointer group"
              >
                <span>HOME DELIVERY</span>
                <Truck className="w-4 h-4 text-[#4F8F3A] group-hover:text-white transition-colors duration-300" />
              </Button>
            </div>

            {/* Bengali Trust Mini-Note */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#17251C]/70">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#4F8F3A]" /> শতভাগ রাসায়নিক মুক্ত
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#4F8F3A]" /> অর্ডারের পর প্রস্তুত
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: Uploaded salad image inside large organic curved container */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[480px] lg:max-w-[540px] aspect-square">
              {/* Organic decorative backdrop shapes */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#EAF4E3] via-[#D5ECC8]/40 to-[#FFFDF5] rounded-[3rem] lg:rounded-[4rem] rotate-3 scale-95 transition-transform duration-700 pointer-events-none" />
              <div className="absolute inset-2 border-2 border-dashed border-[#4F8F3A]/25 rounded-[3rem] lg:rounded-[4rem] -rotate-2 pointer-events-none" />

              {/* Organic curved frame with gentle floating movement, hover interaction & sequential slide animation */}
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="relative w-full h-full p-4 sm:p-6 rounded-[2.5rem] lg:rounded-[3.5rem] bg-white/90 backdrop-blur-sm shadow-2xl hover:shadow-[0_30px_70px_-15px_rgba(79,143,58,0.3)] border-2 border-white hover:border-[#4F8F3A]/40 flex items-center justify-center animate-gentle-float hover:-translate-y-2 transition-all duration-700 ease-out group cursor-pointer select-none"
              >
                {/* Image Slide Viewport */}
                <div className="w-full h-full overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-[#F5FAF0] relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full relative"
                    >
                      <img
                        src={activeSlideData.image}
                        alt={activeSlideData.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.055] group-hover:rotate-1 group-hover:brightness-105"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Subtle inner soft shadow overlay */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none rounded-[2rem] lg:rounded-[3rem] z-10" />

                  {/* Previous / Next Arrow Controls (visible on hover) */}
                  <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none z-20">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous slide"
                      className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#183D2B] shadow-md backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto hover:scale-110 active:scale-95 cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next slide"
                      className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#183D2B] shadow-md backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto hover:scale-110 active:scale-95 cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Slide Indicators / Segmented Progress Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                    {HERO_SLIDES.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(idx);
                        }}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                          currentSlide === idx
                            ? 'w-6 h-2 bg-[#4F8F3A] shadow-xs'
                            : 'w-2 h-2 bg-white/60 hover:bg-white'
                        }`}
                        aria-label={`Jump to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Label 1: "100% Fresh" (Top Right) */}
                <motion.div
                  key={`badge-top-${currentSlide}`}
                  initial={{ opacity: 0, y: -6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute -top-3 -right-2 sm:top-4 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#EAF4E3] flex items-center gap-2.5 animate-float-badge-1 hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer z-30"
                >
                  <span className="w-8 h-8 rounded-xl bg-[#EAF4E3] text-[#4F8F3A] flex items-center justify-center font-bold text-sm">
                    🌱
                  </span>
                  <div>
                    <div className="text-[12px] font-bold text-[#183D2B] tracking-wide">
                      100% Fresh
                    </div>
                    <div className="text-[10px] text-[#4F8F3A] font-medium font-bengali">
                      {activeSlideData.badge}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Label 2: "Chef Crafted" (Bottom Left) */}
                <motion.div
                  key={`badge-left-${currentSlide}`}
                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute -bottom-3 -left-2 sm:bottom-6 sm:-left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#EAF4E3] flex items-center gap-2.5 animate-float-badge-2 hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer z-30"
                >
                  <span className="w-8 h-8 rounded-xl bg-[#EAF4E3] text-[#4F8F3A] flex items-center justify-center font-bold text-sm">
                    👨‍🍳
                  </span>
                  <div>
                    <div className="text-[12px] font-bold text-[#183D2B] tracking-wide">
                      Chef Crafted
                    </div>
                    <div className="text-[10px] text-[#4F8F3A] font-medium font-bengali">
                      সিগনেচার রেসিপি
                    </div>
                  </div>
                </motion.div>

                {/* Floating Label 3: "Healthy Choice" (Bottom Right) */}
                <motion.div
                  key={`badge-right-${currentSlide}`}
                  initial={{ opacity: 0, x: 6, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute -bottom-4 right-4 sm:-bottom-2 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-[#EAF4E3] flex items-center gap-2 animate-float-badge-3 hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer z-30"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4F8F3A] animate-ping" />
                  <div className="text-left">
                    <div className="text-[11px] font-bold text-[#183D2B]">
                      Healthy Choice
                    </div>
                    <div className="text-[10px] text-[#4F8F3A] font-medium font-bengali">
                      {activeSlideData.bangla}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
