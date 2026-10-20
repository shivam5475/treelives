import Link from 'next/link';
import Image from 'next/image';
import { 
  BUSINESS_NAME, 
  TAGLINE, 
  PHONE, 
  PHONE_DISPLAY, 
  EMAIL, 
  FULL_ADDRESS, 
  HOURS, 
  INSTAGRAM, 
  INSTAGRAM_URL, 
  GOOGLE_MAPS_URL, 
  getWhatsAppUrl 
} from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Footer() {
  const whatsappMsg = 'Hello Treescape Living, I would like to get more information about your showroom collections.';

  return (
    <footer className="bg-[#2D2420] text-[#D9D7CE] border-t border-[#3D2B1F]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12 bg-white/10 rounded-full p-1 border border-white/20">
                <Image
                  src="/images/brand/logo.webp"
                  alt="Treescape Living Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight block">
                  {BUSINESS_NAME}
                </span>
                <span className="text-[11px] font-medium text-[#C9A84C] tracking-widest uppercase">
                  Showroom Bengaluru
                </span>
              </div>
            </Link>

            <p className="font-serif italic text-sm text-[#C9A84C]">
              {TAGLINE}
            </p>

            <p className="text-xs leading-relaxed text-[#D9D7CE]/90">
              Handcrafted solid wood furniture, tailored living suites, bedroom craftsmanship, and bespoke interior solutions for modern Indian homes.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-semibold rounded-md shadow-sm transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg font-medium mb-4 text-[#C9A84C]">Quick Links</h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/collections" className="hover:text-white transition-colors">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/collections/living-room" className="hover:text-white transition-colors">
                  Living Room Suites
                </Link>
              </li>
              <li>
                <Link href="/collections/bedroom" className="hover:text-white transition-colors">
                  Bedroom Collections
                </Link>
              </li>
              <li>
                <Link href="/custom-furniture" className="hover:text-white transition-colors">
                  Custom Furniture Atelier
                </Link>
              </li>
              <li>
                <Link href="/interior-design" className="hover:text-white transition-colors">
                  Interior Solutions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Design Lookbook (90+ Designs)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Showroom
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Visit & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Showroom Location */}
          <div>
            <h3 className="text-white font-serif text-lg font-medium mb-4 text-[#C9A84C]">Experience Showroom</h3>
            <address className="not-italic space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                <span>{FULL_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#C9A84C] font-medium">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Opening Hours: {HOURS} (Daily)</span>
              </div>
              <div className="pt-1">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-[#C9A84C] hover:underline font-semibold"
                >
                  Get Google Maps Directions →
                </a>
              </div>
            </address>
          </div>

          {/* Col 4: Contact & Social */}
          <div>
            <h3 className="text-white font-serif text-lg font-medium mb-4 text-[#C9A84C]">Connect With Us</h3>
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors font-semibold"
              >
                <Phone className="w-4 h-4 text-[#C9A84C]" />
                <span>Call: {PHONE_DISPLAY}</span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C9A84C]" />
                <span>{EMAIL}</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <span className="w-4 h-4 inline-flex items-center justify-center font-bold text-[#C9A84C]">IG</span>
                <span>Instagram: {INSTAGRAM}</span>
              </a>
            </div>

            <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10 text-[11px] text-[#D9D7CE]/80 leading-relaxed">
              <span className="font-semibold text-white block mb-0.5">Physical Showroom Visits</span>
              Walk in anytime between 9:30 AM and 9:30 PM to inspect timber finishes and test seating ergonomics.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#D9D7CE]/60">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
