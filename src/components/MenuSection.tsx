import React, { useState, useMemo } from 'react';
import { SaladItem } from '../types';
import { SALAD_MENU } from '../data/saladData';
import { Plus, Search, Flame, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  onOrderSalad: (salad: SaladItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOrderSalad }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'সবগুলো (All 11)', english: 'All Items' },
    { id: 'green', label: 'কাঁচা ও ভেজি', english: 'Green & Veg' },
    { id: 'protein', label: 'হাই প্রোটিন', english: 'High Protein' },
    { id: 'fruit', label: 'ফ্রুটস ও সিজনাল', english: 'Fruits & Seasonal' },
    { id: 'special', label: 'স্পেশাল বাউল', english: 'Special Bowls' },
  ];

  const filteredSalads = useMemo(() => {
    return SALAD_MENU.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.banglaName.includes(searchQuery) ||
        item.ingredients.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#F8FAF4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4F8F3A] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDITORIAL RESTAURANT CREATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17251C] tracking-tight font-sans">
            Signature Salad
          </h2>

          <p className="text-base sm:text-lg text-[#17251C]/75 font-sans">
            Fresh ingredients. Beautiful presentation. Exceptional taste.
          </p>
        </div>

        {/* 4 FEATURED SIGNATURE SALADS (EDITORIAL SHOWCASE) */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'green-salad',
                name: 'GREEN SALAD',
                bangla: 'শসা • লেটুস • টমেটো • গাজর',
                desc: 'Crisp romaine, cucumber, vine-ripened tomatoes & sweet carrots',
                price: 220,
                tag: 'Chef Signature',
                img: SALAD_MENU.find((s) => s.id === 'green-salad')?.image || SALAD_MENU[0].image,
                saladItem: SALAD_MENU.find((s) => s.id === 'green-salad') || SALAD_MENU[0],
              },
              {
                id: 'greek-salad',
                name: 'GREEK SALAD',
                bangla: 'শসা • টমেটো • অলিভ • ফেটা চিজ',
                desc: 'Greek Kalamata olives, creamy feta cheese, extra virgin olive oil',
                price: 320,
                tag: 'Authentic Mediterranean',
                img: SALAD_MENU.find((s) => s.id === 'greek-salad')?.image || SALAD_MENU[8].image,
                saladItem: SALAD_MENU.find((s) => s.id === 'greek-salad') || SALAD_MENU[8],
              },
              {
                id: 'chicken-salad',
                name: 'CHICKEN SALAD',
                bangla: 'চিকেন • লেটুস • সবজি • ড্রেসিং',
                desc: 'Grilled tender breast chicken, herb seasoning & citrus honey dressing',
                price: 340,
                tag: 'High Protein',
                img: SALAD_MENU.find((s) => s.id === 'chicken-salad')?.image || SALAD_MENU[5].image,
                saladItem: SALAD_MENU.find((s) => s.id === 'chicken-salad') || SALAD_MENU[5],
              },
              {
                id: 'fruit-salad',
                name: 'FRUIT SALAD',
                bangla: 'আপেল • কলা • আঙুর • কমলা',
                desc: 'Hand-picked crisp apples, ripe bananas, sweet grapes & juicy oranges',
                price: 280,
                tag: 'Naturally Sweet',
                img: SALAD_MENU.find((s) => s.id === 'fruit-salad')?.image || SALAD_MENU[2].image,
                saladItem: SALAD_MENU.find((s) => s.id === 'fruit-salad') || SALAD_MENU[2],
              },
            ].map((featured) => (
              <div
                key={featured.id}
                className="group bg-white rounded-[28px] overflow-hidden border border-[#EAF4E3] hover:border-[#4F8F3A] hover:ring-2 hover:ring-[#4F8F3A]/20 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 pb-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-[#EAF4E3]/40">
                      <img
                        src={featured.img}
                        alt={featured.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-106 group-hover:brightness-105"
                      />
                      <div className="absolute top-3 left-3 bg-[#183D2B]/90 backdrop-blur-xs text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                        {featured.tag}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-4">
                    <h3 className="text-lg font-extrabold text-[#183D2B] tracking-wide group-hover:text-[#4F8F3A] transition-colors">
                      {featured.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#4F8F3A] mt-1 font-bengali">
                      {featured.bangla}
                    </p>
                    <p className="text-xs text-[#17251C]/70 mt-2 leading-relaxed">
                      {featured.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 flex items-center justify-between gap-3 border-t border-[#EAF4E3]/60 pt-3">
                  <div>
                    <span className="text-[10px] text-[#17251C]/50 uppercase font-semibold block">Price</span>
                    <span className="text-xl font-extrabold text-[#183D2B]">₹{featured.price}</span>
                  </div>
                  <button
                    onClick={() => onOrderSalad(featured.saladItem)}
                    className="cursor-pointer inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-full text-xs font-bold tracking-wider text-white bg-[#4F8F3A] hover:bg-[#183D2B] transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 uppercase"
                  >
                    <span>ORDER NOW</span>
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION DIVIDER & ALL 11 SALADS MENU GRID */}
        <div className="text-center max-w-xl mx-auto mb-8 pt-8 border-t border-[#EAF4E3]">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#183D2B] tracking-tight">
            Explore All 11 Handcrafted Salads
          </h3>
          <p className="text-xs sm:text-sm text-[#17251C]/70 mt-1 font-bengali">
            তাজা শাকসবজি, প্রোটিন বা ফ্রুটস বাউলের সম্পূর্ণ মেনু তালিকা
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-2xl border border-[#EAF4E3] shadow-xs">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#4F8F3A] text-white shadow-sm'
                      : 'text-[#183D2B] hover:text-[#4F8F3A] hover:bg-[#EAF4E3]/50'
                  }`}
                >
                  <span className="font-bengali">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#17251C]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="সালাদ খুঁজুন (Search)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white border border-[#EAF4E3] focus:outline-none focus:border-[#4F8F3A] transition-colors"
            />
          </div>
        </div>

        {/* Menu Cards Grid: 11 Salads with Premium Individual & Global Animations */}
        {filteredSalads.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#EAF4E3] p-8">
            <p className="text-base text-[#17251C]/70 font-bengali">
              দুঃখিত, আপনার অনুসন্ধানের সাথে মিল রেখে কোনো সালাদ পাওয়া যায়নি।
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-[#4F8F3A] hover:underline cursor-pointer"
            >
              সব সালাদ দেখুন
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredSalads.map((salad, index) => {
              // Salad-specific animation configuration
              let floatClass = 'animate-float-a';
              let imgHoverEffect = 'group-hover:scale-[1.05] group-hover:brightness-105';
              let cardSpecialStyle = '';

              switch (salad.id) {
                case 'green-salad':
                  // 1. GREEN SALAD: Gentle floating, slow zoom-in, rotation 1-2 deg, smooth shadow
                  floatClass = 'animate-float-a';
                  imgHoverEffect = 'group-hover:scale-[1.05] group-hover:rotate-1 group-hover:brightness-105';
                  cardSpecialStyle = 'hover:shadow-[0_22px_45px_-12px_rgba(79,143,58,0.25)]';
                  break;

                case 'vegetable-salad':
                  // 2. VEGETABLE SALAD: Slow upward floating, vegetables appear closer, smooth scale
                  floatClass = 'animate-float-d';
                  imgHoverEffect = 'group-hover:scale-[1.055] group-hover:-translate-y-1';
                  cardSpecialStyle = 'hover:shadow-2xl';
                  break;

                case 'fruit-salad':
                  // 3. FRUIT SALAD: Gentle floating, hover scale 1.05x, subtle brightness enhancement
                  floatClass = 'animate-float-c';
                  imgHoverEffect = 'group-hover:scale-[1.05] group-hover:brightness-[1.07]';
                  cardSpecialStyle = 'hover:shadow-2xl hover:shadow-amber-500/10';
                  break;

                case 'potato-salad':
                  // 4. POTATO SALAD: Slow floating, smooth zoom, card lifts slightly
                  floatClass = 'animate-float-b';
                  imgHoverEffect = 'group-hover:scale-[1.05]';
                  cardSpecialStyle = 'hover:-translate-y-[8px] hover:shadow-2xl';
                  break;

                case 'egg-salad':
                  // 5. EGG SALAD: Gentle vertical movement, image zooms and card rises, smooth shadow
                  floatClass = 'animate-float-a';
                  imgHoverEffect = 'group-hover:scale-[1.05] group-hover:-translate-y-0.5';
                  cardSpecialStyle = 'hover:-translate-y-[8px] hover:shadow-2xl';
                  break;

                case 'chicken-salad':
                  // 6. CHICKEN SALAD: Slow premium floating, hover zoom 1.05x, slight parallax
                  floatClass = 'animate-float-d';
                  imgHoverEffect = 'group-hover:scale-[1.05] group-hover:-translate-y-1 group-hover:translate-x-0.5';
                  cardSpecialStyle = 'hover:shadow-2xl hover:shadow-[#4F8F3A]/20';
                  break;

                case 'bean-salad':
                  // 7. BEAN SALAD: Gentle floating, hover image zoom, smooth green accent around card
                  floatClass = 'animate-float-b';
                  imgHoverEffect = 'group-hover:scale-[1.05]';
                  cardSpecialStyle = 'hover:ring-2 hover:ring-[#4F8F3A] hover:border-[#4F8F3A] hover:shadow-xl';
                  break;

                case 'pasta-salad':
                  // 8. PASTA SALAD: Slow floating, hover zoom + slight rotation, smooth transition
                  floatClass = 'animate-float-c';
                  imgHoverEffect = 'group-hover:scale-[1.05] group-hover:rotate-1 group-hover:brightness-105';
                  cardSpecialStyle = 'hover:shadow-2xl';
                  break;

                case 'greek-salad':
                  // 9. GREEK SALAD: Gentle floating, hover zoom, slight brightness increase
                  floatClass = 'animate-float-a';
                  imgHoverEffect = 'group-hover:scale-[1.05] group-hover:brightness-[1.06]';
                  cardSpecialStyle = 'hover:shadow-2xl hover:shadow-[#4F8F3A]/15';
                  break;

                case 'corn-salad':
                  // 10. CORN SALAD: Soft floating, hover zoom and card lift, smooth shadow
                  floatClass = 'animate-float-b';
                  imgHoverEffect = 'group-hover:scale-[1.05]';
                  cardSpecialStyle = 'hover:-translate-y-[8px] hover:shadow-xl';
                  break;

                case 'mango-salad':
                  // 11. MANGO SALAD: Gentle floating, hover zoom 1.05x, warm brightness enhancement
                  floatClass = 'animate-float-c';
                  imgHoverEffect = 'group-hover:scale-[1.05] group-hover:brightness-[1.08]';
                  cardSpecialStyle = 'hover:shadow-2xl hover:shadow-amber-500/15';
                  break;

                default:
                  floatClass = 'animate-float-a';
                  imgHoverEffect = 'group-hover:scale-105 group-hover:brightness-105';
                  cardSpecialStyle = 'hover:shadow-xl';
              }

              return (
                <div
                  key={salad.id}
                  style={{ animationDelay: `${(index % 6) * 0.08}s` }}
                  className={`food-card-reveal group bg-white rounded-[26px] overflow-hidden border border-[#EAF4E3] hover:border-[#4F8F3A] hover:ring-2 hover:ring-[#4F8F3A]/20 shadow-md hover:shadow-2xl hover:-translate-y-[6px] transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer ${cardSpecialStyle}`}
                >
                  <div>
                    {/* Food Image Container with subtle floating animation & border-radius: 20-30px */}
                    <div className="p-3 pb-0">
                      <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#EAF4E3]/30 ${floatClass}`}>
                        <img
                          src={salad.image}
                          alt={salad.name}
                          referrerPolicy="no-referrer"
                          className={`w-full h-full object-cover object-center transition-all duration-500 ease-out ${imgHoverEffect}`}
                        />

                        {/* Subtle inner gloss vignette */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[20px] pointer-events-none" />

                        {/* Tag / Category Badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10 pointer-events-none">
                          {salad.isPopular && (
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#183D2B] text-white shadow-xs">
                              ★ Popular
                            </span>
                          )}
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 backdrop-blur-xs text-[#4F8F3A] shadow-xs font-bengali border border-[#EAF4E3]/60">
                            {salad.categoryLabel}
                          </span>
                        </div>

                        {/* Calorie Pill */}
                        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-medium text-[#17251C] flex items-center gap-1 shadow-xs border border-[#EAF4E3]/60 z-10 pointer-events-none">
                          <Flame className="w-3 h-3 text-amber-500" />
                          <span>{salad.calories} kcal</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 pt-4">
                      {/* Salad Name */}
                      <div className="flex items-baseline justify-between gap-2 mb-1.5">
                        <h3 className="text-lg font-bold text-[#183D2B] tracking-tight group-hover:text-[#4F8F3A] transition-colors duration-300">
                          {salad.name}
                        </h3>
                        <span className="text-xs font-semibold text-[#4F8F3A] font-bengali">
                          {salad.banglaName}
                        </span>
                      </div>

                      {/* Short Ingredients */}
                      <p className="text-xs text-[#17251C]/70 leading-relaxed font-bengali min-h-[36px] line-clamp-2">
                        {salad.ingredients}
                      </p>

                      {/* Nutritional micro-metadata */}
                      <div className="mt-3 flex items-center gap-3 text-[11px] text-[#17251C]/60 pt-2 border-t border-[#EAF4E3]/60">
                        <span>
                          প্রোটিন: <strong className="text-[#183D2B]">{salad.protein}</strong>
                        </span>
                        <span>·</span>
                        <span className="text-[#4F8F3A] font-medium">১০০% ফ্রেশ</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Order Now Button */}
                  <div className="px-5 pb-5 pt-0 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#17251C]/50 uppercase font-semibold">দাম (Price)</span>
                      <span className="text-xl font-extrabold text-[#183D2B] tabular-nums">
                        ₹{salad.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onOrderSalad(salad)}
                      className="cursor-pointer inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold tracking-wider text-[#183D2B] bg-[#EAF4E3] group-hover:bg-[#4F8F3A] group-hover:text-white transition-all duration-300 shadow-xs hover:shadow-md active:scale-95"
                    >
                      <span>Order Now</span>
                      <Plus className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-90" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
