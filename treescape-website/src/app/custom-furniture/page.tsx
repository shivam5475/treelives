import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_NAME, TAGLINE, PHONE, PHONE_DISPLAY, getWhatsAppUrl } from '@/lib/constants';
import { MessageCircle, Phone, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom Furniture Atelier Bengaluru | Treescape Living',
  description: 'Bespoke custom wooden furniture made around your space. Share your room blueprint and get custom beds, sofas, wardrobes, and dining tables crafted to your specifications.',
};

export default function CustomFurniturePage() {
  const customWhatsappMsg = 'Hello Treescape Living, I have a custom furniture requirement and would like to share my room details.';

  const steps = [
    {
      num: '01',
      title: 'Share Your Requirement',
      desc: 'Send us your room dimensions, floorplan sketch, or reference photo directly on WhatsApp or visit our Sarjapur Road showroom.',
    },
    {
      num: '02',
      title: 'Discuss Design',
      desc: 'Our design team collaborates with you on proportions, structural joinery, headboard heights, and ergonomic seating comfort.',
    },
    {
      num: '03',
      title: 'Choose Your Finish',
      desc: 'Inspect genuine timber polish samples (natural teak, smoked walnut, honey) and choose from premium linen, velvet, or leatherette.',
    },
    {
      num: '04',
      title: 'Finalise Your Furniture',
      desc: 'Review and approve finalized millimeter measurements, joinery details, and specifications before crafting commences.',
    },
    {
      num: '05',
      title: 'Delivery & Installation',
      desc: 'Delivered directly to your home anywhere in Bengaluru with white-glove assembly, leveling, and positioning by our crew.',
    },
  ];

  return (
    <div className="bg-[#F8F5F0] text-[#3D2B1F] min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-[#FAF8F3] py-3.5 border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#5C3D2E]">
          <Link href="/" className="hover:text-[#2D5A3D]">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#3D2B1F] font-semibold">Custom Furniture Atelier</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center bg-[#2D2420] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sofas/sofa-design-04.webp"
            alt="Custom Furniture Crafting by Treescape Living"
            fill
            className="object-cover object-center filter brightness-70 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-16">
          <span className="inline-block px-3.5 py-1 bg-[#C9A84C] text-[#3D2B1F] text-xs font-bold uppercase tracking-widest rounded mb-4">
            Bespoke Joinery Atelier
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4">
            Furniture Made Around Your Space
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-[#E8E2D8] mb-6">
            {TAGLINE}
          </p>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-[#D9D7CE] leading-relaxed mb-8">
            Standard store furniture rarely fits irregular room corners or specific height ceilings. We design and build custom wooden furniture tailored to the exact millimeters of your residence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppUrl(customWhatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-lg transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Start a WhatsApp Enquiry</span>
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

      {/* 5-Step Process */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">The Atelier Workflow</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#3D2B1F] mt-2 mb-4">
            How Custom Furniture Works
          </h2>
          <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed">
            A transparent 5-step collaborative journey from your concept to installation in your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-2xl p-6 border border-[#E8E2D8] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <span className="font-serif text-3xl font-bold text-[#C9A84C] block mb-3">
                  {s.num}
                </span>
                <h3 className="font-serif text-base font-semibold text-[#3D2B1F] mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs text-[#5C3D2E] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Capabilities Split */}
      <section className="py-16 bg-[#FDFBF7] border-y border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#2D5A3D]">Bespoke Craftsmanship</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#3D2B1F] leading-tight">
                What Can Be Customised?
              </h2>
              <p className="text-sm text-[#5C3D2E] leading-relaxed">
                Whether you need a king bed with extra headboard clearance, a 7-seater curved living suite, or floor-to-ceiling wardrobe cabinetry, we construct each piece according to your specifications.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#3D2B1F]">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
                  <span><strong>Dimensional Sizing:</strong> Custom length, depth, and height to the millimeter.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
                  <span><strong>Timber Polish Finishes:</strong> Natural teak, walnut, honey oak, and antique matte finishes.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
                  <span><strong>Upholstery Fabrics:</strong> Handpicked textured linens, bouclés, and durable velvets.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
                  <span><strong>Functional Additions:</strong> Hydraulic storage, pull-out drawers, and cable grommets.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
                  <span><strong>Delivery & Installation:</strong> Professional delivery and on-site assembly across Bengaluru.</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={getWhatsAppUrl('Hello Treescape Living, I would like to consult on custom sizing for my room.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Consult with Furniture Designers</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow">
                <Image src="/images/beds/bed-design-10.webp" alt="Custom Bed" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow mt-8">
                <Image src="/images/sofas/sofa-design-07.webp" alt="Custom Sofa" fill className="object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#2D2420] text-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Sparkles className="w-6 h-6 text-[#C9A84C] mx-auto mb-3" />
          <h2 className="font-serif text-3xl font-normal mb-3">
            Have a Floorplan or Design Reference?
          </h2>
          <p className="text-xs sm:text-sm text-[#D9D7CE] mb-8 leading-relaxed max-w-xl mx-auto">
            Take a quick photo or screenshot and send it to our showroom team. We will review it and provide design recommendations.
          </p>
          <a
            href={getWhatsAppUrl('Hello Treescape Living, I am sharing a furniture design reference/floorplan for a custom quote.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] hover:bg-[#234730] text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Send Blueprint on WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
}
