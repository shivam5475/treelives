import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_NAME, TAGLINE, PHONE, PHONE_DISPLAY, getWhatsAppUrl } from '@/lib/constants';
import { MessageCircle, Phone, Home, ChefHat, DoorClosed, Paintbrush, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interior Design & Joinery Solutions Bengaluru | Treescape Living',
  description: 'Expert residential interior design, custom kitchen cabinets, bespoke wardrobes, and painting services in Bengaluru by Treescape Living.',
};

export default function InteriorDesignPage() {
  const interiorWhatsappMsg = 'Hello Treescape Living, I would like to discuss an interior design requirement for my home.';

  const services = [
    {
      icon: Home,
      title: 'Interior Design',
      desc: 'Holistic space planning, room layout balance, furniture styling, and timber accents to make your home feel cohesive, warm, and personal.',
      highlights: ['Living Room & Bedroom Curation', 'Woodwork & Timber Styling', 'Space Planning & Ergonomics'],
    },
    {
      icon: ChefHat,
      title: 'Kitchen Cabinets',
      desc: 'Custom-built kitchen cabinetry designed to maximize Indian culinary workflow, featuring durable joinery, pantry storage, and premium hardware.',
      highlights: ['Custom Cabinetry Sizing', 'Durable Moisture-Resistant Joinery', 'Pantry & Counter Storage Units'],
    },
    {
      icon: DoorClosed,
      title: 'Wardrobes & Storage',
      desc: 'Floor-to-ceiling custom wardrobes, sliding and hinged doors, integrated dressing mirrors, and organized inner wardrobe partitions.',
      highlights: ['Sliding & Hinged Wardrobes', 'Tailored Shelf & Hanging Layouts', 'Dressing Consoles & Drawers'],
    },
    {
      icon: Paintbrush,
      title: 'Painting & Polishing',
      desc: 'Professional interior wall painting and protective woodwork polish finishes that bring light, texture, and character into every room.',
      highlights: ['Interior Wall Painting', 'Woodwork & Timber Polish Finishes', 'Clean, Dust-Free Application'],
    },
  ];

  return (
    <div className="bg-[#F8F5F0] text-[#3D2B1F] min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-[#FAF8F3] py-3.5 border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#5C3D2E]">
          <Link href="/" className="hover:text-[#2D5A3D]">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#3D2B1F] font-semibold">Interior Solutions</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center bg-[#2D2420] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sofas/sofa-design-07.webp"
            alt="Interior Solutions by Treescape Living"
            fill
            className="object-cover object-center filter brightness-70 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-16">
          <span className="inline-block px-3.5 py-1 bg-[#C9A84C] text-[#3D2B1F] text-xs font-bold uppercase tracking-widest rounded mb-4">
            Residential Interior Craft
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4">
            Interior Solutions
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-[#E8E2D8] mb-6">
            {TAGLINE}
          </p>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#D9D7CE] leading-relaxed mb-8">
            Tailored interior design, kitchen cabinets, custom wardrobes, and painting services designed around natural wood warmth and practical living in Bengaluru.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppUrl(interiorWhatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-lg transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Discuss Interior Requirement</span>
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

      {/* Confirmed Services Breakdown */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">Confirmed Capabilities</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#3D2B1F] mt-2 mb-4">
            Our Interior Services
          </h2>
          <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed">
            Focused, honest interior execution backed by our in-house carpentry and showroom team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 border border-[#E8E2D8] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2D5A3D]/10 text-[#2D5A3D] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#3D2B1F] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <div className="space-y-2 border-t border-[#F8F5F0] pt-4">
                    {s.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-[#3D2B1F]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A3D] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F8F5F0]">
                  <a
                    href={getWhatsAppUrl(`Hello Treescape Living, I would like to consult on your ${s.title} service for my home.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D5A3D] hover:text-[#1e3b28]"
                  >
                    <span>Enquire About {s.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Visual Showcase Split */}
      <section className="py-16 bg-[#FDFBF7] border-y border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E8E2D8]">
              <Image
                src="/images/sofas/sofa-design-09.webp"
                alt="Living Suite Interior Showcase"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">Integrated Experience</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#3D2B1F] leading-tight">
                From Single Pieces to Entire Rooms
              </h2>
              <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed">
                Whether you are outfitting a newly handed-over villa in Sarjapur, updating an apartment near Prestige City, or designing custom wardrobes for your master bedroom, we provide seamless coordination from design discussion to delivery and installation.
              </p>

              <div className="p-4 bg-white rounded-xl border border-[#E8E2D8] text-xs text-[#3D2B1F] space-y-2">
                <div className="font-semibold text-[#2D5A3D]">Showroom Consultation Available</div>
                <div>Visit us at Rana City Complex, Sarjapur Road to discuss floor plans with our interior joinery specialists.</div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppUrl(interiorWhatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow"
                >
                  WhatsApp Consultation
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 border border-[#3D2B1F] text-[#3D2B1F] hover:bg-[#FAF8F3] text-xs font-bold uppercase tracking-wider rounded-md"
                >
                  Visit Showroom
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
