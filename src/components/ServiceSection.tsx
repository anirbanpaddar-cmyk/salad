import React from 'react';
import { RESTAURANT_SERVICES } from '../data/saladData';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ServiceSectionProps {
  onOpenCustomBowl?: () => void;
  onCateringInquiry?: () => void;
  onExploreMenu?: () => void;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  onOpenCustomBowl,
  onCateringInquiry,
  onExploreMenu,
}) => {
  const handleServiceClick = (serviceId: string) => {
    if (serviceId === 'custom-bowl' && onOpenCustomBowl) {
      onOpenCustomBowl();
    } else if (serviceId === 'catering' && onCateringInquiry) {
      onCateringInquiry();
    } else if (onExploreMenu) {
      onExploreMenu();
    }
  };

  return (
    <section id="service" className="py-20 lg:py-28 bg-[#FFFDF5] relative overflow-hidden">
      {/* Decorative blurred background orb */}
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#EAF4E3]/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4F8F3A] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR PREMIUM SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251C] tracking-tight font-bengali">
            আমাদের পরিষেবা
          </h2>

          <p className="text-base text-[#17251C]/75 font-bengali">
            তাজা উপাদান ও সর্বোচ্চ গুণগত মানের নিশ্চয়তা নিয়ে আমাদের প্রতিটি সেবা নিবেদিত।
          </p>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANT_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-[#EAF4E3] shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Line that expands on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#4F8F3A] transition-all duration-300" />

              <div>
                {/* Icon with rotate / scale animation */}
                <div className="w-14 h-14 rounded-2xl bg-[#EAF4E3] text-3xl flex items-center justify-center mb-5 border border-[#4F8F3A]/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#4F8F3A] group-hover:shadow-md">
                  <span className="transition-transform duration-300">
                    {service.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#183D2B] tracking-tight group-hover:text-[#4F8F3A] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-bold text-[#4F8F3A] font-bengali mt-0.5">
                  {service.banglaTitle}
                </p>

                {/* Tagline specified by prompt */}
                <div className="mt-3 py-1.5 px-3 rounded-xl bg-[#FFFDF5] border border-[#EAF4E3] text-xs font-medium text-[#183D2B] font-bengali">
                  {service.tagline}
                </div>

                {/* Description */}
                <p className="mt-3 text-xs text-[#17251C]/70 leading-relaxed font-bengali">
                  {service.description}
                </p>
              </div>

              {/* Action affordance */}
              <div className="mt-6 pt-4 border-t border-[#EAF4E3]/60 flex items-center justify-between text-xs font-bold text-[#4F8F3A] group-hover:text-[#183D2B] transition-colors">
                <span className="font-bengali">
                  {service.id === 'custom-bowl'
                    ? 'বাউল তৈরি করুন'
                    : service.id === 'catering'
                    ? 'ক্যাটারিং বুক করুন'
                    : 'বিস্তারিত দেখুন'}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
