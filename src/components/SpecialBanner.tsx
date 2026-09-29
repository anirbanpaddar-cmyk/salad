import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck } from 'lucide-react';
import specialSaladImg from '../assets/images/special_salad_showcase_1790602924458.jpg';

interface SpecialBannerProps {
  onTrySalads: () => void;
}

export const SpecialBanner: React.FC<SpecialBannerProps> = ({ onTrySalads }) => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#FFFDF5] to-[#EAF4E3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] lg:rounded-[3.5rem] bg-gradient-to-br from-[#183D2B] via-[#1F4934] to-[#122B1E] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Organic Green Shapes in Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4F8F3A]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#4F8F3A]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left copy */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#EAF4E3] border border-white/15 text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#4F8F3A]" />
                <span>SIGNATURE EXPERIENCE</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
                Chef's Special
              </h2>

              {/* Text */}
              <div className="space-y-1 text-base sm:text-lg text-white/90 leading-relaxed font-sans max-w-lg mx-auto lg:mx-0">
                <p>Freshly prepared.</p>
                <p>Beautifully served.</p>
                <p>Made with care.</p>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2 max-w-sm mx-auto lg:mx-0">
                <div className="flex items-center gap-2 text-xs text-white/80 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <Award className="w-4 h-4 text-[#4F8F3A] shrink-0" />
                  <span>শেফ ড্রেসিং স্পেশাল</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/80 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#4F8F3A] shrink-0" />
                  <span>কোল্ড চেইন ফ্রেশনেস</span>
                </div>
              </div>

              {/* CTA button: DISCOVER SPECIALS */}
              <div className="pt-2">
                <button
                  onClick={onTrySalads}
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold tracking-wider text-[#183D2B] bg-[#EAF4E3] hover:bg-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>DISCOVER SPECIALS</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: Large salad image with organic styling, floating animation & hover interaction */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-[16/10] sm:aspect-[16/11] rounded-[2.2rem] overflow-hidden shadow-2xl hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-white/25 hover:border-white/50 group animate-float-c hover:-translate-y-2 transition-all duration-700 ease-out cursor-pointer">
                <img
                  src={specialSaladImg}
                  alt="Special Chef Salad Presentation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.055] group-hover:brightness-105 group-hover:rotate-0.5"
                />
                
                {/* Floating pill */}
                <div className="absolute top-4 right-4 bg-[#183D2B]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-[#EAF4E3] flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#4F8F3A] animate-ping" />
                  <span>Chef's Choice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
