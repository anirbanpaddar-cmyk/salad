import React, { useState } from 'react';
import { X, Check, Sparkles, Plus } from 'lucide-react';
import { SaladItem } from '../types';
import heroImg from '../assets/images/hero_fresh_salad_1790602902024.jpg';

interface CustomBowlModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCustomBowl: (customSalad: SaladItem) => void;
}

export const CustomBowlModal: React.FC<CustomBowlModalProps> = ({
  isOpen,
  onClose,
  onAddCustomBowl,
}) => {
  const [base, setBase] = useState('রোমাইন ও বেবি স্পিনাচ');
  const [selectedVeggies, setSelectedVeggies] = useState<string[]>([
    'চেরি টমেটো',
    'শসা স্লাইস',
    'সুইট কর্ন',
  ]);
  const [protein, setProtein] = useState('গ্রিল্ড চিকেন ব্রেস্ট');
  const [dressing, setDressing] = useState('কোল্ড-প্রেসড অলিভ অয়েল ও লেমন');
  const [crunch, setCrunch] = useState('রোস্টেড পাম্পকিন ও চিয়া সিডস');

  if (!isOpen) return null;

  const bases = [
    'রোমাইন ও বেবি স্পিনাচ',
    'আইসবার্গ লেটুস ও রুকোলা',
    'মিক্সড মেসকালিন গ্রিনস',
  ];

  const veggies = [
    'চেরি টমেটো',
    'শসা স্লাইস',
    'সুইট কর্ন',
    'গ্রেটেড গাজর',
    'ক্যাপসিকাম ও পেঁয়াজ',
    'ব্ল্যাক অলিভস',
  ];

  const proteins = [
    'গ্রিল্ড চিকেন ব্রেস্ট',
    'ফার্ম ফ্রেশ সেদ্ধ ডিম (২টি)',
    'ছোলা ও রেড কিডনি বিনস',
    'গ্রীক ফেটা চিজ কিউবস',
  ];

  const dressings = [
    'কোল্ড-প্রেসড অলিভ অয়েল ও লেমন',
    'বালসামিক ভিনেগারেট',
    'হানি মাস্টার্ড হার্ব',
    'গার্লিক ইয়োগার্ট ড্রেসিং',
  ];

  const crunches = [
    'রোস্টেড পাম্পকিন ও চিয়া সিডস',
    'টasted আমন্ড ও আখরোট',
    'গার্লিক হার্ব ক্রুটনস',
  ];

  const toggleVeggie = (v: string) => {
    if (selectedVeggies.includes(v)) {
      if (selectedVeggies.length > 1) {
        setSelectedVeggies(selectedVeggies.filter((item) => item !== v));
      }
    } else {
      if (selectedVeggies.length < 4) {
        setSelectedVeggies([...selectedVeggies, v]);
      }
    }
  };

  const handleCreate = () => {
    const customSalad: SaladItem = {
      id: `custom-${Date.now()}`,
      name: 'Custom Chef Salad Bowl',
      banglaName: 'আপনার কাস্টম সালাদ বাউল',
      ingredients: `${base}, ${selectedVeggies.join(', ')}, ${protein}, ${crunch}`,
      price: 360,
      calories: 290,
      protein: protein.includes('চিকেন') ? '26g' : '15g',
      category: 'special',
      categoryLabel: 'কাস্টম বাউল',
      image: heroImg,
    };
    onAddCustomBowl(customSalad);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-[#FFFDF5] rounded-3xl shadow-2xl border border-[#EAF4E3] overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#EAF4E3] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-[#EAF4E3] text-[#4F8F3A] flex items-center justify-center text-lg">
                🍱
              </span>
              <div>
                <h3 className="font-bold text-lg text-[#183D2B]">
                  Custom Salad Bowl Builder
                </h3>
                <p className="text-xs text-[#4F8F3A] font-bengali">
                  আপনার পছন্দমতো উপাদান বেছে বাউল তৈরি করুন
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#183D2B] hover:bg-[#EAF4E3] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Step 1: Base */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-[#183D2B] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#4F8F3A] text-white flex items-center justify-center text-[10px]">
                  ১
                </span>
                <span>বেস বা শাকসবজি বেস (Choose Base)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {bases.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBase(b)}
                    className={`p-3 rounded-2xl border text-xs text-left font-bengali transition-all ${
                      base === b
                        ? 'border-[#4F8F3A] bg-[#EAF4E3] text-[#183D2B] font-bold shadow-xs'
                        : 'border-[#EAF4E3] bg-white text-[#17251C]/75 hover:border-[#4F8F3A]/40'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Veggies */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#183D2B] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#4F8F3A] text-white flex items-center justify-center text-[10px]">
                    ২
                  </span>
                  <span>সবজি নির্বাচন (Choose up to 4 veggies)</span>
                </label>
                <span className="text-[11px] text-[#4F8F3A] font-semibold">
                  {selectedVeggies.length}/4 নির্বাচিত
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {veggies.map((v) => {
                  const isChecked = selectedVeggies.includes(v);
                  return (
                    <button
                      key={v}
                      type="button"
                      onClick={() => toggleVeggie(v)}
                      className={`p-2.5 rounded-xl border text-xs text-left font-bengali flex items-center justify-between transition-all ${
                        isChecked
                          ? 'border-[#4F8F3A] bg-[#EAF4E3] text-[#183D2B] font-bold'
                          : 'border-[#EAF4E3] bg-white text-[#17251C]/70 hover:border-[#4F8F3A]/40'
                      }`}
                    >
                      <span>{v}</span>
                      {isChecked && <Check className="w-3.5 h-3.5 text-[#4F8F3A]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Protein */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-[#183D2B] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#4F8F3A] text-white flex items-center justify-center text-[10px]">
                  ৩
                </span>
                <span>প্রোটিন নির্বাচন (Choose Protein)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {proteins.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setProtein(p)}
                    className={`p-3 rounded-2xl border text-xs text-left font-bengali transition-all ${
                      protein === p
                        ? 'border-[#4F8F3A] bg-[#EAF4E3] text-[#183D2B] font-bold shadow-xs'
                        : 'border-[#EAF4E3] bg-white text-[#17251C]/75 hover:border-[#4F8F3A]/40'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Dressing & Crunch */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#183D2B] uppercase tracking-wider">
                  ৪. স্পেশাল ড্রেসিং
                </label>
                <select
                  value={dressing}
                  onChange={(e) => setDressing(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-[#EAF4E3] text-xs font-bengali text-[#183D2B] focus:outline-none focus:border-[#4F8F3A]"
                >
                  {dressings.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#183D2B] uppercase tracking-wider">
                  ৫. ক্রাঞ্চ ও টপিং
                </label>
                <select
                  value={crunch}
                  onChange={(e) => setCrunch(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-[#EAF4E3] text-xs font-bengali text-[#183D2B] focus:outline-none focus:border-[#4F8F3A]"
                >
                  {crunches.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-6 border-t border-[#EAF4E3] bg-white flex items-center justify-between">
            <div>
              <span className="text-[11px] text-[#17251C]/50 uppercase font-semibold">
                Custom Bowl Price
              </span>
              <div className="text-2xl font-extrabold text-[#183D2B]">₹360</div>
            </div>

            <button
              onClick={handleCreate}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4F8F3A] hover:bg-[#183D2B] text-white font-bold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>বাউল অর্ডার করুন</span>
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
