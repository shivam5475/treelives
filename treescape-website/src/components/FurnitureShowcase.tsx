'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { FurnitureDesign, ALL_DESIGNS, SOFA_DESIGNS, BED_DESIGNS } from '@/data/catalogue';
import { getWhatsAppUrl } from '@/lib/constants';
import { MessageCircle, Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2, SlidersHorizontal } from 'lucide-react';

interface ShowcaseProps {
  initialCategory?: 'all' | 'sofas' | 'beds';
  limit?: number;
  title?: string;
  subtitle?: string;
}

export default function FurnitureShowcase({
  initialCategory = 'all',
  limit,
  title = 'Curated Furniture Showcase',
  subtitle = 'Explore authentic design examples crafted by Treescape Living. Every piece can be customised in dimensions, timber polish, and fabric to match your home.',
}: ShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'sofas' | 'beds'>(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  // Available sub-categories based on active tab
  const subCategories = useMemo(() => {
    let list: FurnitureDesign[] = [];
    if (activeTab === 'sofas') list = SOFA_DESIGNS;
    else if (activeTab === 'beds') list = BED_DESIGNS;
    else list = ALL_DESIGNS;

    const subs = Array.from(new Set(list.map(d => d.subCategory)));
    return ['all', ...subs];
  }, [activeTab]);

  // Filtered designs
  const filteredDesigns = useMemo(() => {
    let list: FurnitureDesign[] = [];
    if (activeTab === 'sofas') list = SOFA_DESIGNS;
    else if (activeTab === 'beds') list = BED_DESIGNS;
    else list = ALL_DESIGNS;

    if (selectedSubCategory !== 'all') {
      list = list.filter(d => d.subCategory === selectedSubCategory);
    }

    if (limit && limit > 0) {
      return list.slice(0, limit);
    }

    return list;
  }, [activeTab, selectedSubCategory, limit]);

  // Modal navigation
  const currentModalItem = modalIndex !== null ? filteredDesigns[modalIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex !== null && modalIndex > 0) {
      setModalIndex(modalIndex - 1);
    } else if (modalIndex === 0) {
      setModalIndex(filteredDesigns.length - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex !== null && modalIndex < filteredDesigns.length - 1) {
      setModalIndex(modalIndex + 1);
    } else if (modalIndex === filteredDesigns.length - 1) {
      setModalIndex(0);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8F5F0] text-[#3D2B1F]" id="showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-xs font-semibold uppercase tracking-widest mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Showroom Visual Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3D2B1F] tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5C3D2E] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Primary Collection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-[#E8E2D8] rounded-xl border border-[#D9D7CE] shadow-inner max-w-full overflow-x-auto">
            <button
              onClick={() => { setActiveTab('all'); setSelectedSubCategory('all'); }}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium tracking-wide transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#3D2B1F] text-white shadow'
                  : 'text-[#3D2B1F] hover:text-[#2D5A3D]'
              }`}
            >
              All Designs ({ALL_DESIGNS.length})
            </button>
            <button
              onClick={() => { setActiveTab('sofas'); setSelectedSubCategory('all'); }}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium tracking-wide transition-all whitespace-nowrap ${
                activeTab === 'sofas'
                  ? 'bg-[#3D2B1F] text-white shadow'
                  : 'text-[#3D2B1F] hover:text-[#2D5A3D]'
              }`}
            >
              Living Room Suites ({SOFA_DESIGNS.length})
            </button>
            <button
              onClick={() => { setActiveTab('beds'); setSelectedSubCategory('all'); }}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium tracking-wide transition-all whitespace-nowrap ${
                activeTab === 'beds'
                  ? 'bg-[#3D2B1F] text-white shadow'
                  : 'text-[#3D2B1F] hover:text-[#2D5A3D]'
              }`}
            >
              Bedroom Suites ({BED_DESIGNS.length})
            </button>
          </div>
        </div>

        {/* Secondary Sub-Category Filter Pills */}
        {subCategories.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-2">
            {subCategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubCategory(sub)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                  selectedSubCategory === sub
                    ? 'bg-[#2D5A3D] text-white border-[#2D5A3D] font-semibold shadow-sm'
                    : 'bg-white text-[#3D2B1F] border-[#E8E2D8] hover:border-[#2D5A3D]'
                }`}
              >
                {sub === 'all' ? 'All Styles' : sub}
              </button>
            ))}
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDesigns.map((item, index) => {
            const enquiryMessage = `Hello Treescape Living, I am interested in Design Ref: ${item.refCode} (${item.title}). Can you share customisation details and showroom pricing?`;
            
            return (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Image Container with Zoom & Badge */}
                <div 
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F3] cursor-pointer"
                  onClick={() => setModalIndex(index)}
                >
                  <Image
                    src={item.imageWebp || item.image}
                    alt={`${item.title} - Treescape Living Design ${item.refCode}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/95 text-[#3D2B1F] text-xs font-semibold rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5 text-[#2D5A3D]" />
                      <span>View Design Details</span>
                    </span>
                  </div>

                  {/* Ref Code Badge */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                    <span className="px-2.5 py-1 bg-[#3D2B1F]/90 backdrop-blur-md text-white font-mono text-[11px] font-semibold rounded tracking-wider">
                      {item.refCode}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#C9A84C] text-[#3D2B1F] text-[10px] font-bold rounded uppercase tracking-wider shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-[#7C9A6E] uppercase tracking-wider mb-1">
                      {item.subCategory}
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#3D2B1F] group-hover:text-[#2D5A3D] transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C3D2E] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Trust highlight */}
                  <div className="mt-4 pt-4 border-t border-[#F8F5F0] flex items-center justify-between text-[11px] text-[#4A6741]">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A3D]" />
                      <span>Custom Dimensions</span>
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A3D]" />
                      <span>Showroom Support</span>
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 pt-3 flex items-center gap-2">
                    <a
                      href={getWhatsAppUrl(enquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                      aria-label={`Enquire on WhatsApp about ${item.refCode}`}
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                    
                    <button
                      onClick={() => setModalIndex(index)}
                      className="p-2.5 border border-[#E8E2D8] hover:border-[#2D5A3D] text-[#3D2B1F] hover:text-[#2D5A3D] rounded-lg transition-colors bg-[#FAF8F3]"
                      title="Inspect full image"
                      aria-label="Inspect design"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state fallback */}
        {filteredDesigns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-base text-gray-500">No designs match the selected filter.</p>
          </div>
        )}

      </div>

      {/* High-Resolution Interactive Lightbox Modal */}
      {currentModalItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setModalIndex(null)}
        >
          <div 
            className="relative bg-[#FDFBF7] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#E8E2D8]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white text-[#3D2B1F] rounded-full shadow-md transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white text-[#3D2B1F] rounded-full shadow-md transition-colors hidden sm:flex"
              aria-label="Previous design"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={handleNext}
              className="absolute right-3 md:right-[360px] top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white text-[#3D2B1F] rounded-full shadow-md transition-colors hidden sm:flex"
              aria-label="Next design"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Big Image Viewer */}
            <div className="relative flex-1 bg-black/5 min-h-[300px] md:min-h-[500px]">
              <Image
                src={currentModalItem.imageWebp || currentModalItem.image}
                alt={currentModalItem.title}
                fill
                className="object-contain p-2"
                priority
              />
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-mono">
                {modalIndex! + 1} of {filteredDesigns.length}
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="w-full md:w-[350px] p-6 sm:p-8 flex flex-col justify-between bg-white border-t md:border-t-0 md:border-l border-[#E8E2D8]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 bg-[#3D2B1F] text-white font-mono text-xs font-bold rounded">
                    {currentModalItem.refCode}
                  </span>
                  <span className="px-2 py-0.5 bg-[#C9A84C]/20 text-[#5C3D2E] text-xs font-semibold rounded">
                    {currentModalItem.tag}
                  </span>
                </div>

                <div className="text-xs text-[#2D5A3D] font-semibold uppercase tracking-wider mb-1">
                  {currentModalItem.subCategory}
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#3D2B1F] leading-tight mb-3">
                  {currentModalItem.title}
                </h3>

                <p className="text-sm text-[#5C3D2E] leading-relaxed mb-6">
                  {currentModalItem.description}
                </p>

                {/* Showroom Specs Guarantee */}
                <div className="bg-[#FAF8F3] p-4 rounded-xl border border-[#E8E2D8] space-y-2 mb-6 text-xs text-[#3D2B1F]">
                  <div className="font-semibold text-xs text-[#2D5A3D] uppercase tracking-wider mb-1">
                    Atelier Highlights:
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
                    <span>Customizable in King, Queen, or Custom Dimensions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
                    <span>Choice of Natural Timber Polishes & Fabrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
                    <span>Includes After-Sales Showroom Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
                    <span>Showroom Delivery & Installation in Bengaluru</span>
                  </div>
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="space-y-2 pt-2">
                <a
                  href={getWhatsAppUrl(`Hello Treescape Living, I would like to order or customise Design Ref: ${currentModalItem.refCode} (${currentModalItem.title}). Please share details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#2D5A3D] hover:bg-[#234730] text-white rounded-lg text-sm font-semibold tracking-wide shadow transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire for Ref: {currentModalItem.refCode}</span>
                </a>
                
                <a
                  href="/custom-furniture"
                  className="w-full flex items-center justify-center py-2.5 border border-[#3D2B1F] text-[#3D2B1F] hover:bg-[#FAF8F3] rounded-lg text-xs font-semibold transition-colors"
                >
                  Discuss Custom Sizing
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
