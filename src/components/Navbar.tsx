import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { SaladLogo } from './SaladLogo';

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount = 0, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ['home', 'about', 'menu', 'service', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'MENU', href: '#menu', id: 'menu' },
    { label: 'SERVICE', href: '#service', id: 'service' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF5]/95 backdrop-blur-md shadow-sm border-b border-[#EAF4E3]/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: SALAD / Fresh Food • Healthy Life Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
            aria-label="SALAD - Fresh Food • Healthy Life"
          >
            <SaladLogo size="md" variant={isScrolled ? 'light' : 'light'} />
          </a>

          {/* Right Navigation for Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm tracking-wider font-semibold py-1 transition-all duration-200 group ${
                    isActive ? 'text-[#4F8F3A]' : 'text-[#183D2B] hover:text-[#4F8F3A]'
                  }`}
                >
                  {link.label}
                  {/* Underline hover effect */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#4F8F3A] rounded-full transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                  {/* Small active green dot indicator */}
                  {isActive && (
                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#4F8F3A]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action on Desktop: Bag / Order trigger & ORDER ONLINE CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#183D2B] hover:text-[#4F8F3A] transition-colors rounded-full hover:bg-[#EAF4E3]"
              title="View Order"
              aria-label="View Order"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#4F8F3A] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wider text-white bg-[#4F8F3A] hover:bg-[#183D2B] rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              HOME DELIVERY
            </a>
          </div>

          {/* Mobile Hamburger & Cart */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#183D2B] rounded-lg"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute 0 top-0 right-0 bg-[#4F8F3A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#183D2B] hover:text-[#4F8F3A] focus:outline-none rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF5] border-b border-[#EAF4E3] shadow-lg animate-in slide-in-from-top duration-200">
          <div className="px-6 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block py-2 text-base font-semibold tracking-wider transition-colors ${
                    isActive ? 'text-[#4F8F3A] pl-2 border-l-2 border-[#4F8F3A]' : 'text-[#183D2B] hover:text-[#4F8F3A]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#menu"
                onClick={(e) => handleNavClick(e, '#menu')}
                className="block text-center w-full py-2.5 px-4 bg-[#4F8F3A] text-white font-bold rounded-xl text-sm"
              >
                EXPLORE MENU
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
