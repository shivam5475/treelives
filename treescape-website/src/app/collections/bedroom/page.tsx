'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BED_DESIGNS, FurnitureDesign } from '@/data/catalogue';
import { getWhatsAppUrl, PHONE_DISPLAY, PHONE } from '@/lib/constants';
import { MessageCircle, CheckCircle2, Maximize2, X, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

export default function BedroomCollectionsPage() {
  const [modalItem, setModalItem] = useState<FurnitureDesign | null>(null);

  // Group beds by visual category
  const groups = [
    {
      title: 'Turned Post & Arched Headboards',
      subtitle: 'Monumental carved arches, architectural fluting, and handcrafted turned finial posts.',
      designs: BED_DESIGNS.filter(b => b.subCategory === 'Carved & Arched Headboards'),
    },
    {
      title: 'Traditional Woodwork & Lattice Carving',
      subtitle: 'Solid timber joinery featuring wrought iron lattice insets, rich wood grain, and master carpentry.',
      designs: BED_DESIGNS.filter(b => b.subCategory === 'Traditional Woodwork'),
    },
    {
      title: 'Classic Solid Wooden Beds',
      subtitle: 'Timeless wave crowns, cabriole legs, vertical slats, and warm honey and teak polishes.',
      designs: BED_DESIGNS.filter(b => b.subCategory === 'Classic Wooden Beds'),
    },
    {
      title: 'Modern Minimalist & Platform Beds',
      subtitle: 'Low-slung frames, broad wood-grain headboards, and grounded architectural lines.',
      designs: BED_DESIGNS.filter(b => b.subCategory === 'Modern Platform Beds'),
    },
  ];

  return (
    <div className="bg-[#F8F5F0] text-[#3D2B1F] min-h-screen">
      
      {/* Breadcrumb Bar */}
      <div className="bg-[#FAF8F3] py-3.5 border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#5C3D2E]">
          <Link href="/" className="hover:text-[#2D5A3D]">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/collections" className="hover:text-[#2D5A3D]">Collections</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#3D2B1F] font-semibold">Bedroom Furniture</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] sm:min-h-[50vh] flex items-center justify-center bg-[#2D2420] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/beds/bed-design-10.webp"
            alt="Handcrafted Solid Wood Bed Showcase by Treescape Living"
            fill
            className="object-cover object-center filter brightness-75 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-16">
          <span className="inline-block px-3.5 py-1 bg-[#C9A84C] text-[#3D2B1F] text-xs font-bold uppercase tracking-widest rounded mb-4">
            Showroom Showcase
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4">
            Bedroom Furniture Collections
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#E8E2D8] leading-relaxed">
            Authentic solid wood bed designs from our atelier. Tailored in King, Queen, or custom dimensions.
          </p>
        </div>
      </section>

      {/* Showroom Disclaimer & Customisation Strip */}
      <div className="bg-[#FAF8F3] border-b border-[#E8E2D8] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5C3D2E]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2D5A3D]" />
            <span><strong>Visual Portfolio:</strong> Designs shown represent showroom craftsmanship and aesthetic possibilities.</span>
          </div>
          <div className="flex items-center gap-4 font-semibold text-[#2D5A3D]">
            <span>✓ Custom Dimensions</span>
            <span>✓ Choice of Timber Polishes</span>
            <span>✓ Delivery & Installation</span>
          </div>
        </div>
      </div>

      {/* Visual Groups */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {groups.map((group, gIdx) => (
          <section key={group.title} className="scroll-mt-24">
            
            {/* Group Header */}
            <div className="border-b border-[#E8E2D8] pb-4 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#2D5A3D]">Visual Group 0{gIdx + 1}</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3D2B1F] mt-1">
                  {group.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#5C3D2E] mt-1 max-w-2xl">
                  {group.subtitle}
                </p>
              </div>

              {/* Group CTA */}
              <a
                href={getWhatsAppUrl(`Hello Treescape Living, I would like to inquire about designs in your "${group.title}" collection.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-semibold rounded-md transition-colors shadow-sm shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Ask About This Group</span>
              </a>
            </div>

            {/* Designs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {group.designs.map((item) => {
                const itemWhatsappMsg = `Hello Treescape Living, I am interested in Bedroom Design Ref: ${item.refCode} (${item.title}). Can you share customisation options and pricing for my room?`;

                return (
                  <div
                    key={item.id}
                    className="group bg-white rounded-xl overflow-hidden border border-[#E8E2D8] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Image */}
                    <div
                      className="relative aspect-[4/3] bg-[#FAF8F3] cursor-pointer overflow-hidden"
                      onClick={() => setModalItem(item)}
                    >
                      <Image
                        src={item.imageWebp || item.image}
                        alt={`${item.title} - ${item.refCode}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
                        <span className="px-2 py-0.5 bg-[#3D2B1F]/90 text-white font-mono text-[10px] font-semibold rounded">
                          {item.refCode}
                        </span>
                        <span className="px-1.5 py-0.5 bg-[#C9A84C] text-[#3D2B1F] text-[9px] font-bold rounded uppercase">
                          {item.tag}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 bg-white text-[#3D2B1F] text-[11px] font-semibold rounded-full shadow flex items-center gap-1">
                          <Maximize2 className="w-3 h-3" />
                          <span>Inspect</span>
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-base font-semibold text-[#3D2B1F] leading-snug group-hover:text-[#2D5A3D] transition-colors mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#5C3D2E] line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* WhatsApp CTA */}
                      <div className="mt-4 pt-3 border-t border-[#F8F5F0]">
                        <a
                          href={getWhatsAppUrl(itemWhatsappMsg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-semibold rounded-md transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          <span>Ask About This Design</span>
                        </a>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </section>
        ))}
      </div>

      {/* Custom Bed Sizing Banner */}
      <section className="bg-[#2D2420] text-white py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C]">Custom Atelier</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-2 mb-4">
            Need a Bed in Custom Proportions?
          </h2>
          <p className="text-sm text-[#D9D7CE] max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you need extra headboard height, integrated under-bed hydraulic storage, or specific timber finishes, our showroom craftsmen can build to your exact room blueprint.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppUrl('Hello Treescape Living, I would like to order a bed with custom dimensions and finishes.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Discuss Custom Bed on WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE}`}
              className="px-7 py-3.5 border border-white/40 text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {modalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setModalItem(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E8E2D8]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalItem(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/90 text-[#3D2B1F] rounded-full shadow"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-black/5">
              <Image
                src={modalItem.imageWebp || modalItem.image}
                alt={modalItem.title}
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            <div className="p-6 bg-[#FDFBF7]">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 bg-[#3D2B1F] text-white font-mono text-xs font-bold rounded">
                  {modalItem.refCode}
                </span>
                <span className="text-xs font-semibold text-[#2D5A3D]">
                  {modalItem.subCategory}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#3D2B1F] mb-2">
                {modalItem.title}
              </h3>
              <p className="text-xs text-[#5C3D2E] leading-relaxed mb-4">
                {modalItem.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-[#2D5A3D] font-medium mb-6">
                <span>✓ King / Queen / Custom Sizing</span>
                <span>•</span>
                <span>✓ Custom Polish Choices</span>
                <span>•</span>
                <span>✓ Delivery & Installation</span>
              </div>
              <a
                href={getWhatsAppUrl(`Hello Treescape Living, I would like to inquire about Bedroom Design Ref: ${modalItem.refCode} (${modalItem.title}). Please share details.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Ask About This Design on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
