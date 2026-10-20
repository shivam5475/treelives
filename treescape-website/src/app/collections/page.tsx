import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { BUSINESS_NAME, TAGLINE, getWhatsAppUrl } from '@/lib/constants';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Furniture Collections | Treescape Living Bengaluru',
  description: 'Explore handcrafted wooden furniture collections at Treescape Living. Master bedroom suites, living room sets, dining tables, custom wardrobes, and kitchen joinery.',
};

const collections = [
  {
    title: 'Bedroom Furniture',
    subtitle: '48+ Artisanal Bed Designs',
    description: 'Turned post beds, arched headboards, lattice carved suites, and modern low-profile platforms.',
    href: '/collections/bedroom',
    image: '/images/beds/bed-design-10.webp',
    tag: 'Beds & Nightstands',
  },
  {
    title: 'Living Room Furniture',
    subtitle: '42+ Curated Living Suites',
    description: 'Sculptural curved sofas, exposed timber spindle-back lounges, coffee tables, and accent seating.',
    href: '/collections/living-room',
    image: '/images/sofas/sofa-design-04.webp',
    tag: 'Sofas & Seating',
  },
  {
    title: 'Dining Furniture',
    subtitle: 'Handcrafted Dining Suites',
    description: 'Solid wood dining tables, ergonomic dining chairs, benches, and dining credenzas.',
    href: '/collections/dining',
    image: '/images/beds/bed-design-08.webp',
    tag: 'Tables & Chairs',
  },
  {
    title: 'Wardrobes & Storage',
    subtitle: 'Bespoke Storage Joinery',
    description: 'Floor-to-ceiling closets, custom sliding and hinged wardrobes, dressing tables, and consoles.',
    href: '/collections/wardrobes',
    image: '/images/sofas/sofa-design-12.webp',
    tag: 'Closets & Storage',
  },
  {
    title: 'Kitchen Cabinets',
    subtitle: 'Custom Kitchen Joinery',
    description: 'Durable kitchen cabinetry, pantry units, and tailored kitchen woodwork built for Indian homes.',
    href: '/collections/kitchen',
    image: '/images/sofas/sofa-design-20.webp',
    tag: 'Kitchen Woodwork',
  },
  {
    title: 'Custom Furniture Atelier',
    subtitle: 'Built Around Your Room',
    description: 'Bespoke furniture tailored to millimeter specifications, choice of wood polish, and fabrics.',
    href: '/custom-furniture',
    image: '/images/beds/bed-design-05.webp',
    tag: '100% Bespoke',
  },
  {
    title: 'Interior Design',
    subtitle: 'Holistic Home Spaces',
    description: 'Space curation, custom wardrobes, kitchen joinery, and interior painting services.',
    href: '/interior-design',
    image: '/images/sofas/sofa-design-07.webp',
    tag: 'Interior Solutions',
  },
];

export default function CollectionsPage() {
  return (
    <div className="bg-[#F8F5F0] text-[#3D2B1F] min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-[#FAF8F3] py-3.5 border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#5C3D2E]">
          <Link href="/" className="hover:text-[#2D5A3D]">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#3D2B1F] font-semibold">Collections</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-14 sm:py-20 bg-[#FDFBF7] border-b border-[#E8E2D8] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">
            {BUSINESS_NAME} Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#3D2B1F] mt-2 mb-4">
            Our Furniture Collections
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-[#C9A84C] mb-4">
            {TAGLINE}
          </p>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#5C3D2E] leading-relaxed">
            Every category reflects our commitment to natural timber, warm aesthetics, and tailored craftsmanship. Explore each collection below or visit our showroom on Sarjapur Road.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="relative aspect-[16/11] bg-[#FAF8F3] overflow-hidden">
                <Image
                  src={item.imageWebp || item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#3D2B1F]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-semibold">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#2D5A3D]">
                    {item.subtitle}
                  </span>
                  <h2 className="font-serif text-2xl font-semibold text-[#3D2B1F] group-hover:text-[#2D5A3D] transition-colors mt-1 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#5C3D2E] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F8F5F0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#3D2B1F] group-hover:text-[#2D5A3D] transition-colors flex items-center gap-1.5">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] text-[#2D5A3D] font-medium">Custom Available</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Showroom CTA */}
      <section className="bg-[#2D2420] text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Sparkles className="w-6 h-6 text-[#C9A84C] mx-auto mb-3" />
          <h2 className="font-serif text-3xl font-normal mb-3">
            Looking for Something Specific?
          </h2>
          <p className="text-xs sm:text-sm text-[#D9D7CE] mb-8 leading-relaxed">
            Our master carpenters can build around your custom design references. Send us a photograph or sketch on WhatsApp.
          </p>
          <a
            href={getWhatsAppUrl('Hello Treescape Living, I have a specific furniture design in mind that I would like to discuss.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
}
