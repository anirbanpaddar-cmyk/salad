import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles, Clock, Truck, ShieldCheck, BadgePercent } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    preferredTime: 'এখনই ডেলিভারি (Instant 35-45 mins)',
    orderNote: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFDF5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4F8F3A] uppercase">
            <Truck className="w-3.5 h-3.5" />
            <span>EXPRESS HOME DELIVERY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#183D2B] tracking-tight font-sans">
            Home Delivery Order
          </h2>

          <p className="text-base text-[#183D2B]/80 font-bengali">
            তাজা ও স্বাস্থ্যকর সালাদ উপভোগ করুন আপনার বাসা কিংবা অফিসে। অর্ডার করলেই পৌঁছে যাবে দ্রুত ও ফ্রেশ।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Direct Delivery Info & Hotline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAF4E3] shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-[#183D2B] tracking-tight font-bengali">
                ডেলিভারি হটলাইন ও সহায়তা
              </h3>

              <div className="space-y-5">
                {/* Phone Hotline */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF4E3] text-[#4F8F3A] flex items-center justify-center shrink-0 group-hover:bg-[#4F8F3A] group-hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#17251C]/50 uppercase tracking-wider">
                      Order Helpline
                    </span>
                    <a
                      href="tel:+8801711000111"
                      className="block text-base font-bold text-[#183D2B] hover:text-[#4F8F3A] transition-colors"
                    >
                      +880 1711-000111
                    </a>
                    <span className="text-xs text-[#17251C]/60 font-bengali">
                      সকাল ৯টা থেকে রাত ১০টা পর্যন্ত সক্রিয়
                    </span>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF4E3] text-[#4F8F3A] flex items-center justify-center shrink-0 group-hover:bg-[#4F8F3A] group-hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#17251C]/50 uppercase tracking-wider">
                      Email Support
                    </span>
                    <a
                      href="mailto:order@freshsalad.com.bd"
                      className="block text-base font-bold text-[#183D2B] hover:text-[#4F8F3A] transition-colors"
                    >
                      order@freshsalad.com.bd
                    </a>
                    <span className="text-xs text-[#17251C]/60 font-bengali">
                      বাল্ক বা কর্পোরেট ডেলিভারি সহায়তা
                    </span>
                  </div>
                </div>

                {/* Delivery Zone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF4E3] text-[#4F8F3A] flex items-center justify-center shrink-0 group-hover:bg-[#4F8F3A] group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#17251C]/50 uppercase tracking-wider">
                      Delivery Coverage
                    </span>
                    <p className="text-sm font-bold text-[#183D2B]">
                      বনানী, গুলশান, বারিধারা, ডিওএইচএস ও সংলগ্ন এলাকা
                    </p>
                    <span className="text-xs text-[#17251C]/60 font-bengali">
                      কোল্ড-ইনসুলেটেড হাইজিন বক্সে ডেলিভারি
                    </span>
                  </div>
                </div>
              </div>

              {/* Delivery Highlights */}
              <div className="pt-4 border-t border-[#EAF4E3] space-y-2.5 text-xs text-[#17251C]/80 font-bengali">
                <div className="flex items-center gap-2 text-[#4F8F3A] font-semibold">
                  <Truck className="w-4 h-4 shrink-0" />
                  <span>গড় ডেলিভারি সময়: ৩৫ থেকে ৪৫ মিনিট</span>
                </div>
                <div className="flex items-center gap-2 text-[#183D2B]">
                  <ShieldCheck className="w-4 h-4 text-[#4F8F3A] shrink-0" />
                  <span>ক্যাশ অন ডেলিভারি ও বিকাশ/কার্ড পেমেন্ট প্রযোজ্য</span>
                </div>
                <div className="flex items-center gap-2 text-[#183D2B]">
                  <Clock className="w-4 h-4 text-[#4F8F3A] shrink-0" />
                  <span>প্রতিদিন সকাল ৯:০০ থেকে রাত ১০:৩০</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Modern Delivery Address & Details Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAF4E3] shadow-md relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EAF4E3] text-[#4F8F3A] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#183D2B] font-bengali">
                    ধন্যবাদ! আপনার ডেলিভারি রিকোয়েস্ট সফল হয়েছে।
                  </h3>
                  <p className="text-sm text-[#17251C]/70 font-bengali max-w-md mx-auto">
                    আমাদের রাইডার দ্রুত আপনার ঠিকানায় তাজা সালাদ পৌঁছে দেওয়ার প্রস্তুতি নিচ্ছে। বিস্তারিত তথ্যের জন্য আমাদের কল সেন্টার থেকে শীঘ্রই ফোন করা হবে।
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        address: '',
                        preferredTime: 'এখনই ডেলিভারি (Instant 35-45 mins)',
                        orderNote: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-[#4F8F3A] hover:bg-[#183D2B] rounded-full transition-colors cursor-pointer"
                  >
                    আরেকটি অর্ডার করুন
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-[#183D2B] tracking-tight">
                      Place Home Delivery Order
                    </h3>
                    <p className="text-xs text-[#17251C]/60 mt-0.5 font-bengali">
                      সরাসরি আপনার ঠিকানায় ডেলিভারি পেতে নিচের তথ্যগুলো পূরণ করুন।
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#183D2B] uppercase tracking-wider mb-1.5">
                        আপনার নাম (Name) <span className="text-[#4F8F3A]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="আপনার পূর্ণ নাম লিখুন"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFFDF5] border border-[#EAF4E3] text-sm text-[#183D2B] placeholder:text-[#17251C]/40 focus:outline-none focus:border-[#4F8F3A] focus:bg-white transition-all font-bengali"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-[#183D2B] uppercase tracking-wider mb-1.5">
                        মোবাইল নম্বর (Phone) <span className="text-[#4F8F3A]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="০১৭xxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFFDF5] border border-[#EAF4E3] text-sm text-[#183D2B] placeholder:text-[#17251C]/40 focus:outline-none focus:border-[#4F8F3A] focus:bg-white transition-all font-bengali"
                      />
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <label className="block text-xs font-semibold text-[#183D2B] uppercase tracking-wider mb-1.5">
                      ডেলিভারি ঠিকানা (Detailed Address) <span className="text-[#4F8F3A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="বাড়ি নং, রোড নং, এলাকা/ব্লক (যেমন: বাড়ি ১২, রোড ৭, বনানী)"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFFDF5] border border-[#EAF4E3] text-sm text-[#183D2B] placeholder:text-[#17251C]/40 focus:outline-none focus:border-[#4F8F3A] focus:bg-white transition-all font-bengali"
                    />
                  </div>

                  {/* Preferred Delivery Time */}
                  <div>
                    <label className="block text-xs font-semibold text-[#183D2B] uppercase tracking-wider mb-1.5">
                      ডেলিভারি সময় (Delivery Slot) <span className="text-[#4F8F3A]">*</span>
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFFDF5] border border-[#EAF4E3] text-sm text-[#183D2B] focus:outline-none focus:border-[#4F8F3A] focus:bg-white transition-all font-bengali"
                    >
                      <option value="এখনই ডেলিভারি (Instant 35-45 mins)">এখনই ডেলিভারি (Instant 35-45 mins)</option>
                      <option value="আজ দুপুরের লাঞ্চ (1:00 PM - 2:00 PM)">আজ দুপুরের লাঞ্চ (1:00 PM - 2:00 PM)</option>
                      <option value="আজ বিকেলের স্ন্যাক্স (5:00 PM - 6:00 PM)">আজ বিকেলের স্ন্যাক্স (5:00 PM - 6:00 PM)</option>
                      <option value="আজ রাতের ডিনার (8:00 PM - 9:00 PM)">আজ রাতের ডিনার (8:00 PM - 9:00 PM)</option>
                    </select>
                  </div>

                  {/* Order Note or Preferred Salads */}
                  <div>
                    <label className="block text-xs font-semibold text-[#183D2B] uppercase tracking-wider mb-1.5">
                      পছন্দের সালাদ ও বিশেষ নির্দেশনা (Salads & Notes)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="কোন সালাদটি চান? (যেমন: ১টি গ্রিন সালাদ ও ১টি চিকেন সালাদ, অতিরিক্ত অলিভ অয়েল ড্রেসিং ইত্যাদি)"
                      value={formData.orderNote}
                      onChange={(e) => setFormData({ ...formData, orderNote: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFFDF5] border border-[#EAF4E3] text-sm text-[#183D2B] placeholder:text-[#17251C]/40 focus:outline-none focus:border-[#4F8F3A] focus:bg-white transition-all resize-none font-bengali"
                    />
                  </div>

                  {/* Submit Button: ORDER FOR HOME DELIVERY */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold tracking-wider text-white bg-[#4F8F3A] hover:bg-[#183D2B] rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 disabled:opacity-70 cursor-pointer"
                    >
                      <Truck className="w-4 h-4" />
                      <span>{isSubmitting ? 'প্রসেসিং হচ্ছে...' : 'ORDER FOR HOME DELIVERY'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
