import React from 'react';
import { HERO_FEATURES } from '../data/saladData';

export const FeatureStrip: React.FC = () => {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {HERO_FEATURES.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-[#EAF4E3] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-[#EAF4E3] hover:shadow-md cursor-pointer flex items-center gap-3.5"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#FFFDF5] group-hover:bg-white flex items-center justify-center text-2xl shrink-0 shadow-xs border border-[#EAF4E3]/80 transition-all duration-300 group-hover:scale-110">
              {item.icon}
            </div>

            {/* Texts */}
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-[#183D2B] tracking-tight group-hover:text-[#183D2B] transition-colors truncate">
                {item.title}
              </h3>
              <p className="text-xs text-[#4F8F3A] font-semibold font-bengali mt-0.5 truncate">
                {item.banglaTitle}
              </p>
              <p className="hidden sm:block text-[11px] text-[#17251C]/60 truncate mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
