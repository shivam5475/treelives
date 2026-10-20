import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  BUSINESS_NAME, 
  TAGLINE, 
  PHONE, 
  PHONE_DISPLAY, 
  FULL_ADDRESS, 
  HOURS, 
  GOOGLE_MAPS_URL, 
  getWhatsAppUrl 
} from '@/lib/constants';
import FurnitureShowcase from '@/components/FurnitureShowcase';
import { 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  Wrench, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Check, 
  Paintbrush, 
  Home, 
  DoorClosed, 
  ChefHat 
} from 'lucide-react';

export const metadata: Metadata = {
  title: `${BUSINESS_NAME} | ${TAGLINE} • Furniture Showroom Bengaluru`,
  description:
    'Experience handcrafted solid wood furniture, bespoke living suites, bedroom craftsmanship, and interior solutions at Treescape Living. Showroom on Sarjapur Road, opposite Prestige City, Bengaluru.',
  openGraph: {
    title: `${BUSINESS_NAME} | ${TAGLINE}`,
    description: 'Premier furniture showroom on Sarjapur Road, Bengaluru. Custom wooden furniture, beds, sofas, wardrobes, and interiors.',
    images: ['/images/sofas/sofa-design-04.webp'],
  },
};

export default function HomePage() {
  const heroWhatsappMsg = 'Hello Treescape Living, I am interested in exploring your furniture collections and visiting the showroom.';

  return (
    <div className="bg-[#F8F5F0] text-[#3D2B1F] overflow-hidden">
      
      {/* ========================================================================
          SECTION 1: HERO (High-End Luxury Editorial)
          ======================================================================== */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center bg-[#2D2420]">
        {/* Background Showcase Visual */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/sofas/sofa-design-04.webp"
            alt="Treescape Living Handcrafted Solid Wood Furniture Suite"
            fill
            sizes="100vw"
            className="object-cover object-center scale-105 filter brightness-[0.78]"
            priority
          />
          {/* Subtle vignette gradient for text clarity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-[#FDFBF7]">
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#E8E2D8] text-xs font-medium tracking-widest uppercase mb-6 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>Showroom on Sarjapur Road, Opp. Prestige City • Bengaluru</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight leading-[1.05] mb-5 text-[#FDFBF7]">
            TREESCAPE LIVING
          </h1>

          {/* Tagline */}
          <p className="font-serif italic text-lg sm:text-2xl lg:text-3xl font-light text-[#E8E2D8] tracking-wide mb-6">
            {TAGLINE}
          </p>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-[#D9D7CE] leading-relaxed mb-10 font-normal">
            Bespoke wooden furniture, custom living room suites, and interior craftsmanship built to fit the natural contours of your home.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5">
            <Link
              href="#showcase"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#C9A84C] hover:bg-[#b8953d] text-[#3D2B1F] text-xs sm:text-sm font-bold uppercase tracking-widest rounded-md shadow-lg transition-all hover:scale-105"
            >
              Explore Collections
            </Link>

            <a
              href={getWhatsAppUrl(heroWhatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-md shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-semibold tracking-wider rounded-md transition-all"
            >
              Visit Showroom
            </Link>
          </div>

        </div>

        {/* Showroom Trust Strip */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#2D2420]/85 backdrop-blur-md border-t border-white/15 py-3 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-4 text-center text-xs text-[#E8E2D8]">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
              <span>After-Sales Support</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C9A84C]" />
              <span>100% Custom Dimensions</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-4 h-4 text-[#C9A84C]" />
              <span>White-Glove Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Wrench className="w-4 h-4 text-[#C9A84C]" />
              <span>Professional Installation</span>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================
          SECTION 2: EXPLORE COLLECTIONS (Visual Category Cards)
          ======================================================================== */}
      <section className="py-16 sm:py-24 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">Showroom Portfolio</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D2B1F] mt-2">
              Explore Our Collections
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5C3D2E]">
              From handcrafted wooden beds to sculptured living suites and tailored storage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Bedroom Card */}
            <Link
              href="/collections/bedroom"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
            >
              <Image
                src="/images/beds/bed-design-10.webp"
                alt="Bedroom Furniture by Treescape Living"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#C9A84C]">Master Suites</span>
                <h3 className="font-serif text-2xl font-semibold mt-1 mb-2">Bedroom</h3>
                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                  Solid wooden beds, arched headboards, lattice carvings, and custom storage beds.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#C9A84C] group-hover:translate-x-1 transition-transform">
                  <span>Explore Bedroom Designs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>

            {/* Living Room Card */}
            <Link
              href="/collections/living-room"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
            >
              <Image
                src="/images/sofas/sofa-design-07.webp"
                alt="Living Room Furniture by Treescape Living"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#C9A84C]">Living Atelier</span>
                <h3 className="font-serif text-2xl font-semibold mt-1 mb-2">Living Room</h3>
                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                  Curved architectural suites, spindle-back wooden frames, and accent loungers.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#C9A84C] group-hover:translate-x-1 transition-transform">
                  <span>Explore Living Suites</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>

            {/* Dining Card */}
            <Link
              href="/collections/dining"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
            >
              <Image
                src="/images/beds/bed-design-08.webp"
                alt="Dining Furniture by Treescape Living"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#C9A84C]">Dining Craft</span>
                <h3 className="font-serif text-2xl font-semibold mt-1 mb-2">Dining Furniture</h3>
                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                  Solid wood dining tables, ergonomic dining chairs, benches, and sideboards.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#C9A84C] group-hover:translate-x-1 transition-transform">
                  <span>Explore Dining Furniture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>

            {/* Wardrobes Card */}
            <Link
              href="/collections/wardrobes"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
            >
              <Image
                src="/images/sofas/sofa-design-12.webp"
                alt="Wardrobes and Storage by Treescape Living"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#C9A84C]">Storage Solutions</span>
                <h3 className="font-serif text-2xl font-semibold mt-1 mb-2">Wardrobes & Storage</h3>
                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                  Bespoke wardrobe woodwork, floor-to-ceiling closets, and space-focused cabinetry.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#C9A84C] group-hover:translate-x-1 transition-transform">
                  <span>Explore Wardrobes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>

            {/* Kitchen Cabinets Card */}
            <Link
              href="/collections/kitchen"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
            >
              <Image
                src="/images/sofas/sofa-design-20.webp"
                alt="Kitchen Cabinets by Treescape Living"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#C9A84C]">Cabinetry</span>
                <h3 className="font-serif text-2xl font-semibold mt-1 mb-2">Kitchen Cabinets</h3>
                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                  Custom kitchen cabinetry, pantry units, and solid joinery solutions.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#C9A84C] group-hover:translate-x-1 transition-transform">
                  <span>Explore Kitchen Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>

            {/* Custom Furniture Card */}
            <Link
              href="/custom-furniture"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
            >
              <Image
                src="/images/beds/bed-design-05.webp"
                alt="Custom Furniture atelier by Treescape Living"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#C9A84C]">Bespoke Joinery</span>
                <h3 className="font-serif text-2xl font-semibold mt-1 mb-2">Custom Furniture</h3>
                <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                  Tailored millimeter dimensions, timber polish selection, and space-specific designs.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#C9A84C] group-hover:translate-x-1 transition-transform">
                  <span>Start Custom Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>

          </div>

        </div>
      </section>


      {/* ========================================================================
          SECTION 3: CRAFTED FOR LIVING (Verified Brand Narrative)
          ======================================================================== */}
      <section className="py-16 sm:py-24 bg-[#F8F5F0] border-y border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image Block */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E8E2D8]">
              <Image
                src="/images/sofas/sofa-design-17.webp"
                alt="Crafted for Living - Treescape Living"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E8E2D8] shadow-md flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-sm text-[#3D2B1F]">Treescape Living Showroom</div>
                  <div className="text-[11px] text-[#5C3D2E]">Sarjapur Road, Yamare, Bengaluru</div>
                </div>
                <span className="text-xs font-semibold text-[#2D5A3D] bg-[#2D5A3D]/10 px-2.5 py-1 rounded">
                  Open Daily
                </span>
              </div>
            </div>

            {/* Narrative Block */}
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">Philosophy</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D2B1F] mt-2 mb-6 leading-tight">
                Crafted for Living
              </h2>
              
              <blockquote className="text-base sm:text-lg text-[#3D2B1F] font-serif italic border-l-2 border-[#C9A84C] pl-4 mb-6 leading-relaxed">
                “Treescape Living brings together wooden furniture, custom furniture solutions and interior-focused craftsmanship for homes that feel personal, warm and thoughtfully designed.”
              </blockquote>

              <p className="text-sm sm:text-base text-[#5C3D2E] leading-relaxed mb-6">
                Every piece in our collection is created with attention to timber grain, functional durability, and proportion. Rather than mass-produced uniformity, we provide furniture that anchors your everyday life — from restful master bedrooms to welcoming family living rooms.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E8E2D8] mb-8">
                <div>
                  <div className="font-serif text-2xl font-bold text-[#3D2B1F]">Showroom</div>
                  <div className="text-xs text-[#5C3D2E]">Open All 7 Days</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#3D2B1F]">Bespoke</div>
                  <div className="text-xs text-[#5C3D2E]">Customized to Your Space</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3 bg-[#3D2B1F] hover:bg-[#2D2420] text-white text-xs font-semibold tracking-wider uppercase rounded-md shadow transition-colors"
                >
                  About Showroom
                </Link>
                <a
                  href={getWhatsAppUrl('Hello Treescape Living, I would like to consult with your furniture design team.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#2D5A3D] text-[#2D5A3D] hover:bg-[#2D5A3D] hover:text-white text-xs font-semibold tracking-wider uppercase rounded-md transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================
          SECTION 4: FEATURED FURNITURE SHOWCASE (Real PPTX Designs & Filters)
          ======================================================================== */}
      <FurnitureShowcase 
        initialCategory="all"
        title="Featured Furniture Examples"
        subtitle="Explore authentic showroom examples from our living and bedroom design collections. Click on any design to inspect details or start a WhatsApp enquiry."
      />


      {/* ========================================================================
          SECTION 5: CUSTOM FURNITURE ATELIER (5-Step Verified Process)
          ======================================================================== */}
      <section className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">Bespoke Process</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D2B1F] mt-2 mb-4">
              Designed Around Your Space
            </h2>
            <p className="text-sm sm:text-base text-[#5C3D2E] leading-relaxed">
              Every home has unique dimensions. At Treescape Living, we build custom furniture tailored specifically to your room layout, timber preference, and functional needs.
            </p>
          </div>

          {/* 5-Step Linear Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            
            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-bold text-[#C9A84C]">01</span>
                <h3 className="font-serif text-base font-semibold text-[#3D2B1F] mt-3 mb-2">
                  Share Your Requirement
                </h3>
                <p className="text-xs text-[#5C3D2E] leading-relaxed">
                  Send us your room dimensions, layout photo, or design inspiration on WhatsApp.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-bold text-[#C9A84C]">02</span>
                <h3 className="font-serif text-base font-semibold text-[#3D2B1F] mt-3 mb-2">
                  Discuss Design
                </h3>
                <p className="text-xs text-[#5C3D2E] leading-relaxed">
                  We collaborate with you on proportions, structural joinery, and functional ergonomics.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-bold text-[#C9A84C]">03</span>
                <h3 className="font-serif text-base font-semibold text-[#3D2B1F] mt-3 mb-2">
                  Choose Your Finish
                </h3>
                <p className="text-xs text-[#5C3D2E] leading-relaxed">
                  Select timber polish tones (natural, teak, walnut, honey) and upholstery textiles.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-bold text-[#C9A84C]">04</span>
                <h3 className="font-serif text-base font-semibold text-[#3D2B1F] mt-3 mb-2">
                  Finalise Your Furniture
                </h3>
                <p className="text-xs text-[#5C3D2E] leading-relaxed">
                  Approve final dimensions and specifications before crafting begins in our atelier.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E2D8] shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-bold text-[#C9A84C]">05</span>
                <h3 className="font-serif text-base font-semibold text-[#3D2B1F] mt-3 mb-2">
                  Delivery & Installation
                </h3>
                <p className="text-xs text-[#5C3D2E] leading-relaxed">
                  Delivered directly to your home with careful assembly and placement by our team.
                </p>
              </div>
            </div>

          </div>

          {/* Custom CTA */}
          <div className="text-center">
            <a
              href={getWhatsAppUrl('Hello Treescape Living, I have a custom furniture requirement and would like to share my room details.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-md shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Discuss Your Requirement on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>


      {/* ========================================================================
          SECTION 6: INTERIORS (Confirmed Solutions Only)
          ======================================================================== */}
      <section className="py-16 sm:py-24 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">Comprehensive Space Craft</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D2B1F] mt-2 mb-6">
                Interior Solutions
              </h2>
              <p className="text-sm sm:text-base text-[#5C3D2E] leading-relaxed mb-8">
                Beyond standalone furniture, Treescape Living brings cohesive design and joinery expertise to complete residential spaces across Bengaluru.
              </p>

              {/* Confirmed Capabilities List */}
              <div className="space-y-4 mb-8">
                
                <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-[#E8E2D8]">
                  <Home className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#3D2B1F]">Interior Design</h3>
                    <p className="text-xs text-[#5C3D2E] mt-0.5">Thoughtful space curation, room balance, and interior furniture styling.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-[#E8E2D8]">
                  <ChefHat className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#3D2B1F]">Kitchen Cabinets</h3>
                    <p className="text-xs text-[#5C3D2E] mt-0.5">Custom cabinet configurations built with durable hardware and finishes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-[#E8E2D8]">
                  <DoorClosed className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#3D2B1F]">Wardrobes & Storage</h3>
                    <p className="text-xs text-[#5C3D2E] mt-0.5">Floor-to-ceiling tailored closets, sliding and hinged storage joinery.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl border border-[#E8E2D8]">
                  <Paintbrush className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#3D2B1F]">Painting</h3>
                    <p className="text-xs text-[#5C3D2E] mt-0.5">Premium interior wall painting and protective woodwork polishing.</p>
                  </div>
                </div>

              </div>

              <Link
                href="/interior-design"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#3D2B1F] hover:bg-[#2D2420] text-white text-xs font-semibold tracking-wider uppercase rounded-md shadow transition-colors"
              >
                <span>Explore Interior Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Visual showcase */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E8E2D8]">
              <Image
                src="/images/sofas/sofa-design-09.webp"
                alt="Interior solutions showcase by Treescape Living"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================
          SECTION 7: WHY TREESCAPE LIVING (Confirmed Benefits Only)
          ======================================================================== */}
      <section className="py-16 sm:py-20 bg-[#2D2420] text-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">Showroom Promise</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-2">
              Why Treescape Living
            </h2>
            <p className="mt-3 text-sm text-[#D9D7CE]">
              Built with honesty, natural materials, and dedicated Bengaluru customer care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#C9A84C]/50 transition-colors">
              <Sparkles className="w-7 h-7 text-[#C9A84C] mb-4" />
              <h3 className="font-serif text-lg font-bold text-white mb-2">Customisation</h3>
              <p className="text-xs text-[#D9D7CE] leading-relaxed">
                Furniture tailored to exact dimensions, room layouts, and polish preferences.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#C9A84C]/50 transition-colors">
              <Truck className="w-7 h-7 text-[#C9A84C] mb-4" />
              <h3 className="font-serif text-lg font-bold text-white mb-2">Delivery</h3>
              <p className="text-xs text-[#D9D7CE] leading-relaxed">
                Direct doorstep transportation across Bengaluru with protective furniture handling.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#C9A84C]/50 transition-colors">
              <Wrench className="w-7 h-7 text-[#C9A84C] mb-4" />
              <h3 className="font-serif text-lg font-bold text-white mb-2">Installation</h3>
              <p className="text-xs text-[#D9D7CE] leading-relaxed">
                On-site assembly and precise placement handled by our trained installation crew.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#C9A84C]/50 transition-colors">
              <ShieldCheck className="w-7 h-7 text-[#C9A84C] mb-4" />
              <h3 className="font-serif text-lg font-bold text-white mb-2">After-Sales Support</h3>
              <p className="text-xs text-[#D9D7CE] leading-relaxed">
                Dedicated showroom support for maintenance, touch-ups, and any post-delivery assistance.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================
          SECTION 8: SHOWROOM & LOCATION
          ======================================================================== */}
      <section className="py-16 sm:py-24 bg-[#FDFBF7]" id="showroom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-[#E8E2D8] p-8 sm:p-12 lg:p-16 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">Physical Furniture Showroom</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D2B1F] mt-2 mb-6">
                  Visit Our Showroom
                </h2>

                <div className="space-y-4 mb-8 text-sm text-[#5C3D2E]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#3D2B1F] text-base">{BUSINESS_NAME}</div>
                      <div className="leading-relaxed mt-0.5">{FULL_ADDRESS}</div>
                      <div className="text-xs text-[#7C9A6E] mt-1 font-medium">Located directly opposite Prestige City</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#2D5A3D] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#3D2B1F]">Opening Hours: </span>
                      <span>{HOURS} (Open all 7 days)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#2D5A3D] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#3D2B1F]">Direct Contact: </span>
                      <a href={`tel:${PHONE}`} className="text-[#2D5A3D] font-bold hover:underline">
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3 Showroom Buttons */}
                <div className="flex flex-wrap gap-3.5">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-[#3D2B1F] hover:bg-[#2D2420] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow transition-colors flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-[#C9A84C]" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={`tel:${PHONE}`}
                    className="px-6 py-3.5 border border-[#3D2B1F] text-[#3D2B1F] hover:bg-[#FAF8F3] text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={getWhatsAppUrl('Hello Treescape Living, I would like directions and assistance to visit your showroom today.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>

              {/* Showroom preview image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-md">
                <Image
                  src="/images/sofas/sofa-design-04.webp"
                  alt="Treescape Living Showroom Sarjapur Road"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#3D2B1F] shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Showroom Open Today</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================
          SECTION 9: GALLERY PREVIEW
          ======================================================================== */}
      <section className="py-16 sm:py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">Design Catalogue</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#3D2B1F] mt-1">
                Atelier Lookbook
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-xs font-bold uppercase tracking-wider text-[#2D5A3D] hover:text-[#1e3b28] flex items-center gap-1.5 border-b border-[#2D5A3D] pb-1"
            >
              <span>View Full 90+ Design Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/beds/bed-design-11.webp" alt="Lookbook bed" fill sizes="25vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/sofas/sofa-design-08.webp" alt="Lookbook sofa" fill sizes="25vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/beds/bed-design-14.webp" alt="Lookbook bed" fill sizes="25vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/sofas/sofa-design-20.webp" alt="Lookbook sofa" fill sizes="25vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================
          SECTION 10: FINAL CTA
          ======================================================================== */}
      <section className="py-20 sm:py-28 bg-[#3D2B1F] text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">Start Your Home Journey</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal mt-3 mb-6">
            Bring Your Space to Life
          </h2>
          <p className="text-sm sm:text-base text-[#D9D7CE] leading-relaxed mb-10 max-w-xl mx-auto">
            Visit our Sarjapur Road showroom or connect with our design team on WhatsApp to explore custom options for your residence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl('Hello Treescape Living, I would like to consult on furniture for my home.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-md shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-[#3D2B1F] text-xs sm:text-sm font-bold uppercase tracking-widest rounded-md shadow-lg transition-all hover:scale-105"
            >
              Visit Our Showroom
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
