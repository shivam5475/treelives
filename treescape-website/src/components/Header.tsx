'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { PHONE, PHONE_DISPLAY, getWhatsAppUrl, ADDRESS, HOURS } from '@/lib/constants';
import { Phone, MessageCircle, Menu, X, MapPin, Clock } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Collections', href: '/collections' },
  { name: 'Living Room', href: '/collections/living-room' },
  { name: 'Bedroom', href: '/collections/bedroom' },
  { name: 'Custom Furniture', href: '/custom-furniture' },
  { name: 'Interiors', href: '/interior-design' },
  { name: 'Lookbook', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const defaultWhatsappMsg = 'Hello Treescape Living, I would like to explore your furniture collections and showroom details.';

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#2D2420] text-[#E8E2D8] text-xs py-2 px-4 border-b border-[#3D2B1F]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Showroom: Sarjapur Road, Opp. Prestige City, Bengaluru</span>
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Open Daily: {HOURS}</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <span className="hidden lg:inline text-[#C9A84C] font-serif italic">
              Crafted by Nature • Styled for Living
            </span>
            <a 
              href={`tel:${PHONE}`} 
              className="hover:text-[#C9A84C] transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 text-[#C9A84C]" />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#E8E2D8]' 
            : 'bg-[#FDFBF7] py-3.5 border-b border-[#E8E2D8]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo with Real Official Asset */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] rounded-sm p-1"
              aria-label="Treescape Living Home"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src="/images/brand/logo.webp"
                  alt="Treescape Living Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#3D2B1F] leading-tight group-hover:text-[#2D5A3D] transition-colors">
                  Treescape Living
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-[#5C3D2E] font-medium">
                  Crafted by Nature
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm tracking-wide font-medium transition-all relative py-1 ${
                      isActive 
                        ? 'text-[#2D5A3D] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#2D5A3D]' 
                        : 'text-[#3D2B1F] hover:text-[#2D5A3D]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#3D2B1F] hover:text-[#2D5A3D] border border-[#E8E2D8] hover:border-[#2D5A3D] rounded-md transition-all bg-white"
                title="Call showroom directly"
              >
                <Phone className="w-3.5 h-3.5 text-[#2D5A3D]" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>

              <a
                href={getWhatsAppUrl(defaultWhatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
                aria-label="Enquire on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={getWhatsAppUrl(defaultWhatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#2D5A3D] hover:bg-emerald-50 rounded-full transition-colors sm:hidden"
                aria-label="WhatsApp Treescape Living"
              >
                <MessageCircle className="w-6 h-6 fill-[#2D5A3D]" />
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#3D2B1F] hover:text-[#2D5A3D] hover:bg-[#F8F5F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D5A3D]"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#FDFBF7] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#E8E2D8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9">
                <Image
                  src="/images/brand/logo.webp"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-[#3D2B1F]">Treescape Living</div>
                <div className="text-[10px] text-[#5C3D2E] tracking-wider uppercase">Showroom Bengaluru</div>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#3D2B1F] hover:bg-[#E8E2D8] rounded-full"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="overflow-y-auto py-4 px-5 flex-1">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-3">Navigation</p>
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`block py-2.5 px-3 rounded-md text-base font-serif font-medium transition-colors ${
                        isActive 
                          ? 'bg-[#2D5A3D]/10 text-[#2D5A3D] font-bold' 
                          : 'text-[#3D2B1F] hover:bg-[#E8E2D8]/50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-6 border-t border-[#E8E2D8] space-y-3">
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500">Showroom Details</p>
              <p className="text-xs text-[#5C3D2E] leading-relaxed">
                {ADDRESS.line1}, {ADDRESS.line2}, {ADDRESS.street}, Bengaluru – {ADDRESS.pincode}
              </p>
              <p className="text-xs text-[#2D5A3D] font-medium flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Open {HOURS} daily</span>
              </p>
            </div>
          </div>

          {/* Drawer Bottom CTAs */}
          <div className="p-5 border-t border-[#E8E2D8] bg-[#F8F5F0] space-y-2.5">
            <a
              href={getWhatsAppUrl(defaultWhatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#2D5A3D] text-white rounded-md text-sm font-semibold tracking-wide shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Showroom</span>
            </a>
            <a
              href={`tel:${PHONE}`}
              className="w-full flex items-center justify-center gap-2 py-3 border border-[#3D2B1F] text-[#3D2B1F] rounded-md text-sm font-semibold bg-white"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {PHONE_DISPLAY}</span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
