'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_DESIGNS, FurnitureDesign } from '@/data/catalogue';
import { getWhatsAppUrl, BUSINESS_NAME, TAGLINE } from '@/lib/constants';
import { MessageCircle, Maximize2, X, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'sofas' | 'beds'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const displayedDesigns = useMemo(() => {
    if (filter === 'sofas') return ALL_DESIGNS.filter(d => d.category === 'sofas');
    if (filter === 'beds') return ALL_DESIGNS.filter(d => d.category === 'beds');
    return ALL_DESIGNS;
  }, [filter]);

  const activeItem = lightboxIndex !== null ? displayedDesigns[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    } else if (lightboxIndex === 0) {
      setLightboxIndex(displayedDesigns.length - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null && lightboxIndex < displayedDesigns.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    } else if (lightboxIndex === displayedDesigns.length - 1) {
      setLightboxIndex(0);
    }
  };

  return (
    <div className="bg-[#F8F5F0] text-[#3D2B1F] min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-[#FAF8F3] py-3.5 border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#5C3D2E]">
          <Link href="/" className="hover:text-[#2D5A3D]">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#3D2B1F] font-semibold">Atelier Lookbook & Gallery</span>
        </div>
      </div>

      {/* Header */}
      <section className="py-14 sm:py-20 bg-[#FDFBF7] border-b border-[#E8E2D8] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">
            {BUSINESS_NAME} Visual Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#3D2B1F] mt-2 mb-4">
            Showroom Lookbook & Gallery
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-[#C9A84C] mb-4">
            {TAGLINE}
          </p>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#5C3D2E] leading-relaxed">
            Browse our complete collection of handcrafted living suites, master beds, and bespoke joinery. Tap any design to view full details or send a direct inquiry on WhatsApp.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 p-1.5 bg-[#E8E2D8] rounded-xl border border-[#D9D7CE]">
          <button
            onClick={() => { setFilter('all'); setLightboxIndex(null); }}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-[#3D2B1F] text-white shadow'
                : 'text-[#3D2B1F] hover:text-[#2D5A3D]'
            }`}
          >
            All Designs ({ALL_DESIGNS.length})
          </button>
          <button
            onClick={() => { setFilter('sofas'); setLightboxIndex(null); }}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              filter === 'sofas'
                ? 'bg-[#3D2B1F] text-white shadow'
                : 'text-[#3D2B1F] hover:text-[#2D5A3D]'
            }`}
          >
            Living Room Sofas ({ALL_DESIGNS.filter(d => d.category === 'sofas').length})
          </button>
          <button
            onClick={() => { setFilter('beds'); setLightboxIndex(null); }}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              filter === 'beds'
                ? 'bg-[#3D2B1F] text-white shadow'
                : 'text-[#3D2B1F] hover:text-[#2D5A3D]'
            }`}
          >
            Bedroom Suites ({ALL_DESIGNS.filter(d => d.category === 'beds').length})
          </button>
        </div>

        <div className="text-xs text-[#5C3D2E] flex items-center gap-2 font-medium">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#2D5A3D]" />
          <span>Showing {displayedDesigns.length} verified design examples</span>
        </div>
      </div>

      {/* Masonry-Style Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {displayedDesigns.map((item, index) => {
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl overflow-hidden border border-[#E8E2D8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div
                  className="relative aspect-[4/3] bg-[#FAF8F3] overflow-hidden cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                >
                  <Image
                    src={item.imageWebp || item.image}
                    alt={`${item.title} - Ref: ${item.refCode}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
                    <span className="px-2 py-0.5 bg-[#3D2B1F]/90 text-white font-mono text-[10px] font-semibold rounded">
                      {item.refCode}
                    </span>
                    <span className="px-1.5 py-0.2 bg-[#C9A84C] text-[#3D2B1F] text-[9px] font-bold rounded uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 bg-white text-[#3D2B1F] text-[11px] font-semibold rounded-full shadow flex items-center gap-1.5">
                      <Maximize2 className="w-3 h-3 text-[#2D5A3D]" />
                      <span>View</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D5A3D] block mb-1">
                      {item.subCategory}
                    </span>
                    <h3 className="font-serif text-sm font-semibold text-[#3D2B1F] leading-snug group-hover:text-[#2D5A3D] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#5C3D2E] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#F8F5F0]">
                    <a
                      href={getWhatsAppUrl(`Hello Treescape Living, I am interested in Design Ref: ${item.refCode} (${item.title}) from your lookbook.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2 bg-[#2D5A3D] hover:bg-[#234730] text-white text-[11px] font-semibold rounded transition-colors"
                    >
                      <MessageCircle className="w-3 h-3 fill-white" />
                      <span>Enquire Ref: {item.refCode}</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#E8E2D8]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/90 text-[#3D2B1F] rounded-full shadow hover:bg-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white text-[#3D2B1F] rounded-full shadow hidden sm:flex"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 md:right-[350px] top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white text-[#3D2B1F] rounded-full shadow hidden sm:flex"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="relative flex-1 bg-black/5 min-h-[300px] md:min-h-[500px]">
              <Image
                src={activeItem.imageWebp || activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain p-2"
                priority
              />
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-mono">
                {lightboxIndex! + 1} of {displayedDesigns.length}
              </div>
            </div>

            <div className="w-full md:w-[340px] p-6 flex flex-col justify-between bg-[#FDFBF7] border-t md:border-t-0 md:border-l border-[#E8E2D8]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 bg-[#3D2B1F] text-white font-mono text-xs font-bold rounded">
                    {activeItem.refCode}
                  </span>
                  <span className="px-2 py-0.5 bg-[#C9A84C]/20 text-[#5C3D2E] text-xs font-semibold rounded">
                    {activeItem.tag}
                  </span>
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#2D5A3D] mb-1">
                  {activeItem.subCategory}
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3D2B1F] leading-tight mb-3">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-[#5C3D2E] leading-relaxed mb-6">
                  {activeItem.description}
                </p>
                <div className="bg-white p-3.5 rounded-xl border border-[#E8E2D8] space-y-1.5 text-xs text-[#3D2B1F] mb-6">
                  <div className="font-semibold text-[11px] text-[#2D5A3D] uppercase">Showroom Standards:</div>
                  <div>✓ Custom dimensions available</div>
                  <div>✓ Choice of timber polishes & textiles</div>
                  <div>✓ After-sales showroom support</div>
                  <div>✓ Bengaluru delivery & installation</div>
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={getWhatsAppUrl(`Hello Treescape Living, I would like to inquire about Lookbook Design Ref: ${activeItem.refCode} (${activeItem.title}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
