import React from 'react';
import { ArrowUp, Instagram, Facebook, MessageCircle, Twitter } from 'lucide-react';
import { SaladLogo } from './SaladLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'MENU', href: '#menu' },
    { label: 'SERVICE', href: '#service' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-[#183D2B] text-white pt-16 pb-12 relative overflow-hidden">
      {/* Subtle organic light accent */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#4F8F3A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <SaladLogo size="lg" variant="dark" />

            {/* Prompt required text */}
            <p className="text-xl font-bold tracking-tight text-[#EAF4E3] pt-1">
              "Fresh food. Beautiful moments."
            </p>

            <p className="text-xs text-[#EAF4E3]/70 leading-relaxed font-bengali max-w-sm">
              প্রতিদিনের স্বাস্থ্যকর জীবনযাত্রায় তাজা শাকসবজি ও পুষ্টিকর সালাদের অনন্য অভিজ্ঞতা। বনানী ও গুলশান এলাকায় এক্সপ্রেস ডেলিভারি।
            </p>

            {/* Social Media Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#contact"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4F8F3A] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4F8F3A] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4F8F3A] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#4F8F3A] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#4F8F3A]">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold tracking-wider text-[#EAF4E3]/85 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating hours & hotline */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#4F8F3A]">
              HOURS & LOCATION
            </h4>
            <div className="text-xs text-[#EAF4E3]/80 space-y-2 font-bengali">
              <p>📍 রোড #১০, বনানী, ঢাকা-১২১৩</p>
              <p>⏰ সকাল ৯:০০ - রাত ১০:৩০ (প্রতিদিন)</p>
              <p>📞 হটলাইন: +৮৮০১৭১১-০০০১১১</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAF4E3]/60">
          <p>© {new Date().getFullYear()} FRESH SALAD. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="cursor-pointer inline-flex items-center gap-1.5 text-xs text-[#EAF4E3]/80 hover:text-white hover:underline transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
