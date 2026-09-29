import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Clock, HeartPulse, Check, Sparkles } from 'lucide-react';
import indianLadySaladImg from '../assets/images/indian_lady_saree_eating_salad_1790682726320.jpg';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      bangla: 'তাজা ও অরগানিক উপাদান',
      desc: 'প্রতিদিন স্থানীয় খামার থেকে সংগৃহীত সতেজ লেটুস, কাঁচা শাকসবজি, ফল ও বীজ।',
    },
    {
      icon: Clock,
      title: 'Daily Preparation',
      bangla: 'প্রতিদিনের ফ্রেশ প্রস্তুতি',
      desc: 'কোনো বাসি বা আগের দিনের প্রিজার্ভ করা খাবার নেই; প্রতিটি বাউল অর্ডার অনুযায়ী তাৎক্ষণিক তৈরি।',
    },
    {
      icon: Check,
      title: 'Chef Crafted',
      bangla: 'শেফের নিপুণ হাতের ছোঁয়া',
      desc: 'পুষ্টিবিদ ও অভিজ্ঞ শেফের তত্ত্বাবধানে তৈরি অনন্য ড্রেসিং ও নিখুঁত প্রেজেন্টেশন।',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-[#FFFDF5]">
      {/* Decorative subtle background circle */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#EAF4E3]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Fresh salad/vegetable visual */}
          <div className="lg:col-span-6 relative pt-4 sm:pt-6 lg:pt-10">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative frame with breathing glow animation */}
              <motion.div
                animate={{
                  rotate: [-2, 1, -2],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-4 bg-[#EAF4E3] rounded-[2.5rem] -z-10 shadow-lg border border-[#4F8F3A]/20"
              />
              
              {/* Selected Target Element: Animated Card Container */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                animate={{
                  y: [0, -10, 0],
                }}
                className="overflow-hidden rounded-[2.2rem] shadow-xl hover:shadow-2xl border-2 border-white hover:border-[#4F8F3A]/30 bg-white group cursor-pointer relative"
                style={{
                  animation: 'gentle-float 6s ease-in-out infinite',
                }}
              >
                <div className="relative overflow-hidden w-full h-[380px] sm:h-[460px]">
                  <motion.img
                    src={indianLadySaladImg}
                    alt="Indian woman in mustard saree gracefully enjoying fresh organic salad bowl"
                    referrerPolicy="no-referrer"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="w-full h-full object-cover object-center translate-y-0"
                  />
                  {/* Subtle dynamic sheen light overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#183D2B]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
                </div>
                
                {/* Floating badge over image - with interactive pulse & float */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="absolute bottom-4 left-4 sm:left-6 max-w-[280px] p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EAF4E3] shadow-lg flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#4F8F3A] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                    🌱
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#183D2B] uppercase tracking-wider">
                      Farm to Table Philosophy
                    </h4>
                    <p className="text-xs text-[#17251C]/75 font-bengali">
                      প্রকৃতির সবচেয়ে সেরা স্বাদ আপনার খাবার টেবিলে
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Bengali Story + 3 Elegant Rounded Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4F8F3A] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT FRESH SALAD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251C] tracking-tight leading-[1.25] font-sans">
              Freshness is our philosophy.
            </h2>

            <p className="text-base sm:text-lg text-[#17251C]/80 leading-relaxed font-bengali">
              আমরা বিশ্বাস করি স্বাস্থ্যকর খাওয়া মানে স্বাদ বিসর্জন দেওয়া নয়। আমাদের লক্ষ্য হলো প্রতিটি সালাদ বাউলে সতেজতা, প্রাকৃতিক রঙ এবং অনন্য স্বাদের এক নিখুঁত মেলবন্ধন তৈরি করা। 
            </p>

            <p className="text-sm text-[#17251C]/70 leading-relaxed font-bengali">
              খামারের তাজা শাকসবজি, প্রিমিয়াম বীজ, ড্রাই ফ্রুটস এবং কোল্ড-প্রেসড অলিভ অয়েল ড্রেসিং—সবকিছু মিলিয়ে একটি পরিপূর্ণ ব্যালেন্সড খাবার যা আপনার শরীর ও মন উভয়কেই রাখে চনমনে।
            </p>

            {/* 3 Elegant Rounded Cards */}
            <div className="pt-2 space-y-3.5">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white border border-[#EAF4E3] shadow-xs hover:shadow-md hover:border-[#4F8F3A]/40 transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#EAF4E3] text-[#4F8F3A] flex items-center justify-center shrink-0 group-hover:bg-[#4F8F3A] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-[#183D2B] tracking-tight">
                          {item.title}
                        </h4>
                        <span className="text-xs text-[#4F8F3A] font-semibold font-bengali">
                          • {item.bangla}
                        </span>
                      </div>
                      <p className="text-xs text-[#17251C]/70 mt-1 leading-normal font-bengali">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
