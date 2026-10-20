import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { BUSINESS_NAME, TAGLINE, PHONE, PHONE_DISPLAY, getWhatsAppUrl } from '@/lib/constants';
import { MessageCircle, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kitchen Cabinets & Custom Kitchen Solutions Bengaluru | Treescape Living',
  description: 'Custom kitchen cabinets and kitchen woodwork handcrafted by Treescape Living in Bengaluru. Durable cabinetry, pantry storage, and customized layouts.',
};

export default function KitchenCollectionsPage() {
  const whatsappUrl = getWhatsAppUrl('Hello Treescape Living, I would like to discuss custom kitchen cabinets for my home.');

  return (
    <div className="bg-[#F8F5F0] text-[#3D2B1F] min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-[#FAF8F3] py-3.5 border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#5C3D2E]">
          <Link href="/" className="hover:text-[#2D5A3D]">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/collections" className="hover:text-[#2D5A3D]">Collections</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#3D2B1F] font-semibold">Kitchen Cabinets</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[45vh] sm:min-h-[50vh] flex items-center justify-center bg-[#2D2420] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sofas/sofa-design-20.webp"
            alt="Kitchen Cabinets & Joinery by Treescape Living"
            fill
            className="object-cover object-center filter brightness-70 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-16">
          <span className="inline-block px-3.5 py-1 bg-[#C9A84C] text-[#3D2B1F] text-xs font-bold uppercase tracking-widest rounded mb-4">
            Custom Cabinetry
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4">
            Kitchen Cabinets
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#E8E2D8] leading-relaxed">
            Custom kitchen cabinets and tailored kitchen joinery solutions built with durable woodwork and dependable fittings.
          </p>
        </div>
      </section>

      {/* Solutions Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E8E2D8] shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#2D5A3D]">Tailored Joinery</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3D2B1F] mt-1 mb-4">
              Custom Kitchen Solutions
            </h2>
            <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed mb-6">
              Our kitchen cabinet solutions focus on durability, practical organization, and easy maintenance. We craft base units, wall overhead cabinets, and tall pantry storage units tailored to your kitchen floorplan.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-[#3D2B1F] mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
                <span><strong>Custom Kitchen Cabinets:</strong> Built for your specific wall lengths and appliance openings.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
                <span><strong>Pantry & Storage Units:</strong> Deep storage drawers and vertical pull-out organizers.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
                <span><strong>Moisture & Heat Resistance:</strong> Robust carcass materials suited for Indian culinary conditions.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
                <span><strong>Delivery & Installation:</strong> Professional on-site fitment and installation across Bengaluru.</span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Discuss Your Kitchen on WhatsApp</span>
            </a>
          </div>

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/sofas/sofa-design-09.webp"
              alt="Kitchen Cabinetry Craftsmanship"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>

    </div>
  );
}
