import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { BUSINESS_NAME, TAGLINE, PHONE, PHONE_DISPLAY, getWhatsAppUrl } from '@/lib/constants';
import { MessageCircle, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solid Wood Dining Furniture Bengaluru | Treescape Living',
  description: 'Handcrafted solid wood dining tables, 4-seater and 6-seater dining sets, ergonomic dining chairs, and dining sideboards by Treescape Living.',
};

export default function DiningCollectionsPage() {
  const whatsappUrl = getWhatsAppUrl('Hello Treescape Living, I am interested in your dining furniture collections.');

  return (
    <div className="bg-[#F8F5F0] text-[#3D2B1F] min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-[#FAF8F3] py-3.5 border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#5C3D2E]">
          <Link href="/" className="hover:text-[#2D5A3D]">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/collections" className="hover:text-[#2D5A3D]">Collections</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#3D2B1F] font-semibold">Dining Furniture</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[45vh] sm:min-h-[50vh] flex items-center justify-center bg-[#2D2420] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/beds/bed-design-08.webp"
            alt="Dining Furniture by Treescape Living"
            fill
            className="object-cover object-center filter brightness-70 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-16">
          <span className="inline-block px-3.5 py-1 bg-[#C9A84C] text-[#3D2B1F] text-xs font-bold uppercase tracking-widest rounded mb-4">
            Dining Atelier
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4">
            Dining Furniture Collections
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#E8E2D8] leading-relaxed">
            Handcrafted solid wood dining tables, ergonomic dining chairs, and dining sideboards. Tailored in 4, 6, 8, or 10-seater configurations.
          </p>
        </div>
      </section>

      {/* Overview & Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: Tables & Sets */}
        <section>
          <div className="border-b border-[#E8E2D8] pb-4 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#2D5A3D]">Table Craft</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3D2B1F] mt-1">
                Dining Tables & Dining Sets
              </h2>
              <p className="text-xs sm:text-sm text-[#5C3D2E] mt-1">
                Substantial solid wood tabletops, natural grain joinery, and durable food-safe protective polishes.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D] text-white text-xs font-semibold rounded-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Enquire About Dining Furniture</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-sm p-6 space-y-4">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#FAF8F3]">
                <Image
                  src="/images/sofas/sofa-design-04.webp"
                  alt="Living & Dining Suite Joinery"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#3D2B1F]">
                6-Seater Solid Timber Dining Table
              </h3>
              <p className="text-xs text-[#5C3D2E] leading-relaxed">
                Clean architectural silhouette with mortise-and-tenon structural underframing and heat-resistant finish.
              </p>
              <div className="flex items-center gap-4 text-xs text-[#2D5A3D] font-medium pt-2 border-t border-[#F8F5F0]">
                <span>✓ Custom Lengths</span>
                <span>•</span>
                <span>✓ Teak / Walnut Polishes</span>
                <span>•</span>
                <span>✓ Delivery & Installation</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-sm p-6 space-y-4">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#FAF8F3]">
                <Image
                  src="/images/beds/bed-design-12.webp"
                  alt="Minimalist Wood Table Joinery"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#3D2B1F]">
                Round Pedestal & Architectural Tables
              </h3>
              <p className="text-xs text-[#5C3D2E] leading-relaxed">
                Central pedestal bases that maximize legroom, paired with matching solid wood dining chairs.
              </p>
              <div className="flex items-center gap-4 text-xs text-[#2D5A3D] font-medium pt-2 border-t border-[#F8F5F0]">
                <span>✓ 4 & 6-Seater Formats</span>
                <span>•</span>
                <span>✓ Choice of Chairs</span>
                <span>•</span>
                <span>✓ Delivery & Installation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Chairs & Sideboards */}
        <section className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E8E2D8] shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#2D5A3D]">Storage & Seating</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3D2B1F] mt-1 mb-4">
              Dining Chairs, Benches & Sideboards
            </h2>
            <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed mb-6">
              Complete your dining room with space-efficient dining benches, upholstered dining chairs with lumbar support, and credenzas for crockery storage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#3D2B1F] mb-6">
              <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#E8E2D8]">
                <strong>Dining Chairs:</strong> Solid wood frames with stain-resistant cushioned seating.
              </div>
              <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#E8E2D8]">
                <strong>Dining Benches:</strong> Space-saving low profile benches that tuck cleanly under tables.
              </div>
              <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#E8E2D8]">
                <strong>Crockery Sideboards:</strong> Multi-drawer storage units with soft-close wooden drawers.
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D5A3D] text-white text-xs font-bold uppercase tracking-wider rounded-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire About Dining Furniture on WhatsApp</span>
            </a>
          </div>
        </section>

      </div>

    </div>
  );
}
