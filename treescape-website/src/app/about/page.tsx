import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  BUSINESS_NAME, 
  TAGLINE, 
  PHONE, 
  PHONE_DISPLAY, 
  EMAIL, 
  FULL_ADDRESS, 
  HOURS, 
  INSTAGRAM, 
  GOOGLE_MAPS_URL, 
  getWhatsAppUrl 
} from '@/lib/constants';
import { MapPin, Clock, Phone, Mail, ShieldCheck, Sparkles, Truck, Wrench, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Treescape Living | Furniture & Interior Showroom Bengaluru',
  description: 'Learn about Treescape Living, Bengaluru. Handcrafted wooden furniture, custom living suites, bedroom craftsmanship, and bespoke interior solutions on Sarjapur Road.',
};

export default function AboutPage() {
  const whatsappMsg = 'Hello Treescape Living, I would like to learn more about your showroom and custom furniture services.';

  return (
    <div className="bg-[#F8F5F0] text-[#3D2B1F] min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-[#FAF8F3] py-3.5 border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#5C3D2E]">
          <Link href="/" className="hover:text-[#2D5A3D]">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#3D2B1F] font-semibold">About Treescape Living</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-14 sm:py-20 bg-[#FDFBF7] border-b border-[#E8E2D8] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <Image
              src="/images/brand/logo.webp"
              alt="Treescape Living Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">
            Physical Furniture Showroom • Bengaluru
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#3D2B1F] mt-2 mb-3">
            About {BUSINESS_NAME}
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-[#C9A84C] mb-4">
            {TAGLINE}
          </p>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#5C3D2E] leading-relaxed">
            Located on Sarjapur Road opposite Prestige City, Treescape Living brings together wooden furniture, custom furniture solutions, and interior-focused craftsmanship for homes that feel personal, warm, and thoughtfully designed.
          </p>
        </div>
      </section>

      {/* Main Narrative Split */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-5">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">Craft & Vision</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#3D2B1F] leading-tight">
              Furniture Rooted in Natural Warmth
            </h2>
            <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed">
              We believe a home should reflect the individuality of those who inhabit it. At Treescape Living, we don’t offer mass-produced cookie-cutter pieces. Instead, our physical showroom showcases a rich variety of solid wood beds, curved living suites, dining furniture, and custom cabinetry crafted with genuine attention to joinery and grain.
            </p>
            <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed">
              Whether you are planning a single room refresh or furnishing an entire residence, our in-house team assists you with dimensional adjustments, timber polish selection, and space planning.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E8E2D8]">
              <div className="p-4 bg-white rounded-xl border border-[#E8E2D8]">
                <ShieldCheck className="w-5 h-5 text-[#2D5A3D] mb-1.5" />
                <div className="font-serif text-xl font-bold text-[#3D2B1F]">Open Daily</div>
                <div className="text-[11px] text-[#5C3D2E]">9:30 AM – 9:30 PM</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#E8E2D8]">
                <Sparkles className="w-5 h-5 text-[#2D5A3D] mb-1.5" />
                <div className="font-serif text-xl font-bold text-[#3D2B1F]">100% Bespoke</div>
                <div className="text-[11px] text-[#5C3D2E]">Custom Sizing</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Connect With Our Showroom</span>
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E8E2D8]">
            <Image
              src="/images/sofas/sofa-design-04.webp"
              alt="Treescape Living Showroom Atmosphere"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* Showroom Details Card */}
      <section className="py-16 bg-[#FDFBF7] border-y border-[#E8E2D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E8E2D8] shadow-md">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">Experience In Person</span>
            <h2 className="font-serif text-3xl font-semibold text-[#3D2B1F] mt-1 mb-6">
              Our Physical Showroom
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-xs sm:text-sm text-[#3D2B1F]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#3D2B1F] mb-1">Showroom Address</div>
                  <div className="text-[#5C3D2E] leading-relaxed">{FULL_ADDRESS}</div>
                  <div className="text-xs text-[#7C9A6E] mt-1">Opposite Prestige City</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#3D2B1F] mb-1">Showroom Timings</div>
                  <div className="text-[#5C3D2E]">{HOURS}</div>
                  <div className="text-xs text-[#7C9A6E] mt-1">Open 7 Days a Week</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#3D2B1F] mb-1">Direct Contacts</div>
                  <div className="text-[#5C3D2E]">Call: {PHONE_DISPLAY}</div>
                  <div className="text-[#5C3D2E] mt-0.5">{EMAIL}</div>
                  <div className="text-xs text-[#7C9A6E] mt-1">Instagram: {INSTAGRAM}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3.5 pt-4 border-t border-[#F8F5F0]">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#3D2B1F] hover:bg-[#2D2420] text-white text-xs font-bold uppercase tracking-wider rounded-md"
              >
                Get Google Maps Directions
              </a>
              <a
                href={`tel:${PHONE}`}
                className="px-6 py-3 border border-[#3D2B1F] text-[#3D2B1F] hover:bg-[#FAF8F3] text-xs font-bold uppercase tracking-wider rounded-md"
              >
                Call: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
