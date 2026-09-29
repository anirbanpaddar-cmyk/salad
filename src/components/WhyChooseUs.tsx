import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animated states
  const [count1, setCount1] = useState(0); // 100%
  const [count2, setCount2] = useState(0); // 11+
  const [count3, setCount3] = useState(false); // Daily
  const [count4, setCount4] = useState(0); // 100%

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate count1 to 100
          let c1 = 0;
          const interval1 = setInterval(() => {
            c1 += 2;
            if (c1 >= 100) {
              setCount1(100);
              clearInterval(interval1);
            } else {
              setCount1(c1);
            }
          }, 20);

          // Animate count2 to 11
          let c2 = 0;
          const interval2 = setInterval(() => {
            c2 += 1;
            if (c2 >= 11) {
              setCount2(11);
              clearInterval(interval2);
            } else {
              setCount2(c2);
            }
          }, 80);

          // Animate count4 to 100
          let c4 = 0;
          const interval4 = setInterval(() => {
            c4 += 2;
            if (c4 >= 100) {
              setCount4(100);
              clearInterval(interval4);
            } else {
              setCount4(c4);
            }
          }, 20);

          setTimeout(() => setCount3(true), 400);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    {
      value: `${count1}%`,
      title: 'Fresh Ingredients',
      bangla: '১০০% তাজা উপাদান',
      detail: 'খামার থেকে সংগৃহীত অর্গানিক শাকসবজি ও ফলমূল',
    },
    {
      value: `${count2}+`,
      title: 'Signature Salads',
      bangla: '১১+ সিগনেচার সালাদ',
      detail: 'শেফের নিপুণ হাতের আর্ট ও অনন্য স্বাদের সমাহার',
    },
    {
      value: count3 ? 'Daily' : '...',
      title: 'Fresh Preparation',
      bangla: 'প্রতিদিনের ফ্রেশ প্রস্তুতি',
      detail: 'প্রতিটি অর্ডারে তাৎক্ষণিক কাটিং ও প্রিপারেশন',
    },
    {
      value: `${count4}%`,
      title: 'Quality Care',
      bangla: '১০০% মান নিয়ন্ত্রণ',
      detail: 'সর্বোচ্চ হাইজিন ও ফ্রেশনেস নিশ্চিত করার অঙ্গীকার',
    },
  ];

  const testimonials = [
    {
      quote:
        'বনানীতে এত চমৎকার প্রিমিয়াম সালাদের অভিজ্ঞতা আগে পাইনি। গ্রিক সালাদের ফেটা চিজ আর ড্রেসিং ছিল অবিশ্বাস্য ফ্রেশ।',
      author: 'সাবরিনা আহমেদ',
      role: 'নিউট্রিশনিস্ট & ফুড ব্লগার',
      rating: 5,
    },
    {
      quote:
        'অফিসের লাঞ্চে হাই-প্রোটিন চিকেন বাউল নিয়মিত অর্ডার করি। সময়মতো ডেলিভারি ও ক্রাঞ্চি স্বাদের কোনো তুলনা হয় না।',
      author: 'তানভীর হাসান',
      role: 'আইটি এক্সিকিউটিভ, গুলশান',
      rating: 5,
    },
    {
      quote:
        'বাসায় গেট-টুগেদারে হোম ডেলিভারির জন্য স্পেশাল বাউল অর্ডার করেছিলাম। সময়মতো এসেছে, প্যাকেজিং ছিল প্রিমিয়াম এবং সালাদ ছিল একদম টাটকা ও মুচমুচে!',
      author: 'ফারহানা চৌধুরী',
      role: 'আর্কিটেক্ট & ফিটনেস লাভার',
      rating: 5,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#FFFDF5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4F8F3A] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR PROMISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251C] tracking-tight font-bengali">
            কেন বেছে নেবেন Fresh Salad?
          </h2>

          <p className="text-base text-[#17251C]/75 font-bengali">
            আমরা শুধু খাবার তৈরি করি না, প্রতিটি বাউলে পৌঁছে দিই প্রকৃতির সতেজতা ও স্বাস্থ্যকর জীবন।
          </p>
        </div>

        {/* 4 Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#EAF4E3] shadow-xs hover:shadow-lg hover:-translate-y-1.5 hover:border-[#4F8F3A]/40 transition-all duration-300 text-center flex flex-col justify-between group"
            >
              <div>
                {/* Big Number */}
                <div className="text-4xl sm:text-5xl font-extrabold text-[#4F8F3A] tracking-tight tabular-nums group-hover:scale-105 transition-transform duration-300 font-sans">
                  {stat.value}
                </div>

                {/* English Title */}
                <h3 className="mt-3 text-lg font-bold text-[#183D2B] tracking-tight">
                  {stat.title}
                </h3>

                {/* Bengali Subtitle */}
                <p className="text-xs font-semibold text-[#4F8F3A] font-bengali mt-0.5">
                  {stat.bangla}
                </p>
              </div>

              {/* Detail */}
              <p className="mt-4 pt-4 border-t border-[#EAF4E3] text-xs text-[#17251C]/65 leading-relaxed font-bengali">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* CUSTOMER EXPERIENCE: "Good Food. Great Moments." */}
        <div className="mt-20 pt-16 border-t border-[#EAF4E3]">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4F8F3A] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TESTIMONIALS</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251C] tracking-tight font-sans">
              Good Food. Great Moments.
            </h3>

            <p className="text-base text-[#17251C]/75 font-bengali">
              আমাদের নিয়মিত গ্রাহকদের অনুভূতি ও ভালোবাসা যা প্রতিদিন আমাদের আরও ভালো করার অনুপ্রেরণা জোগায়।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[26px] p-7 sm:p-8 border border-[#EAF4E3] shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#4F8F3A]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-base">★</span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[#17251C]/80 leading-relaxed font-bengali italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAF4E3]/80">
                  <h4 className="text-sm font-bold text-[#183D2B] font-bengali">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#4F8F3A] font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
