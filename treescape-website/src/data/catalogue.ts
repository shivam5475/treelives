export interface FurnitureDesign {
  id: string;
  refCode: string;
  category: 'sofas' | 'beds';
  subCategory: string;
  title: string;
  image: string;
  imageWebp: string;
  tag: string;
  description: string;
  isHeroCandidate?: boolean;
  isFeatured?: boolean;
}

function generateExtraSofas(): FurnitureDesign[] {
  const list: FurnitureDesign[] = [];
  for (let i = 0; i < 27; i++) {
    const num = i + 13;
    if (num === 15 || num === 17 || num === 20 || num === 23 || num === 40 || num === 43) continue;
    if (num > 43) continue;
    const formatted = num.toString().padStart(2, '0');
    list.push({
      id: `sofa-${formatted}`,
      refCode: `TS-LIV-${formatted}`,
      category: 'sofas',
      subCategory: num % 2 === 0 ? 'Wooden Frame Suites' : 'Curved Architectural',
      title: `Bespoke Living Room Design TS-${formatted}`,
      image: `/images/sofas/sofa-design-${formatted}.png`,
      imageWebp: `/images/sofas/sofa-design-${formatted}.webp`,
      tag: 'Custom Available',
      description: 'Handcrafted living furniture design tailored to custom room proportions and upholstery choices.',
    });
  }
  return list;
}

function generateExtraBeds(): FurnitureDesign[] {
  const list: FurnitureDesign[] = [];
  for (let i = 0; i < 30; i++) {
    const num = i + 2;
    if ([5, 8, 10, 11, 12, 13, 14, 18, 23, 47, 48, 49].includes(num)) continue;
    if (num > 46) continue;
    const formatted = num.toString().padStart(2, '0');
    list.push({
      id: `bed-${formatted}`,
      refCode: `TS-BED-${formatted}`,
      category: 'beds',
      subCategory: num % 2 === 0 ? 'Modern Platform Beds' : 'Classic Wooden Beds',
      title: `Bespoke Bedroom Design TS-${formatted}`,
      image: `/images/beds/bed-design-${formatted}.png`,
      imageWebp: `/images/beds/bed-design-${formatted}.webp`,
      tag: 'Custom Sizes',
      description: 'Solid wooden bed crafted to King, Queen, or custom room dimensions.',
    });
  }
  return list;
}

export const SOFA_DESIGNS: FurnitureDesign[] = [
  {
    id: 'sofa-04',
    refCode: 'TS-LIV-04',
    category: 'sofas',
    subCategory: 'Wooden Frame Suites',
    title: 'Solid Wood Spindle Frame Living Suite',
    image: '/images/sofas/sofa-design-04.png',
    imageWebp: '/images/sofas/sofa-design-04.webp',
    tag: 'Showroom Showcase',
    description: 'Clean architectural wooden spindle frame sofa with matching accent lounger, ottoman, and organic woven coffee table.',
    isHeroCandidate: true,
    isFeatured: true,
  },
  {
    id: 'sofa-07',
    refCode: 'TS-LIV-07',
    category: 'sofas',
    subCategory: 'Curved Architectural',
    title: 'Sculptural Asymmetric Curved Lounge Suite',
    image: '/images/sofas/sofa-design-07.png',
    imageWebp: '/images/sofas/sofa-design-07.webp',
    tag: 'Modern Statement',
    description: 'Organic flowing lines with solid wood plinth base, low profile club armchairs, and rustic solid timber coffee table.',
    isHeroCandidate: true,
    isFeatured: true,
  },
  {
    id: 'sofa-08',
    refCode: 'TS-LIV-08',
    category: 'sofas',
    subCategory: 'Curved Architectural',
    title: 'Warm Contemporary Modular Seating',
    image: '/images/sofas/sofa-design-08.png',
    imageWebp: '/images/sofas/sofa-design-08.webp',
    tag: 'Signature Living',
    description: 'Deep-seated comfort with refined timber detailing and premium textile upholstery.',
    isFeatured: true,
  },
  {
    id: 'sofa-09',
    refCode: 'TS-LIV-09',
    category: 'sofas',
    subCategory: 'Wooden Frame Suites',
    title: 'Teak Tone Minimalist Living Ensemble',
    image: '/images/sofas/sofa-design-09.png',
    imageWebp: '/images/sofas/sofa-design-09.webp',
    tag: 'Handcrafted Wood',
    description: 'Harmonious pairing of handcrafted timber woodwork and neutral textured fabrics.',
    isFeatured: true,
  },
  {
    id: 'sofa-12',
    refCode: 'TS-LIV-12',
    category: 'sofas',
    subCategory: 'Modern Sectionals',
    title: 'Nordic Inspired Timber Base Sofa',
    image: '/images/sofas/sofa-design-12.png',
    imageWebp: '/images/sofas/sofa-design-12.webp',
    tag: 'Clean Lines',
    description: 'Subtle curves resting on exposed handcrafted wooden rails and tapered wood legs.',
    isFeatured: true,
  },
  {
    id: 'sofa-17',
    refCode: 'TS-LIV-17',
    category: 'sofas',
    subCategory: 'Curved Architectural',
    title: 'Serpentine Curved Form Sofa Suite',
    image: '/images/sofas/sofa-design-17.png',
    imageWebp: '/images/sofas/sofa-design-17.webp',
    tag: 'Organic Form',
    description: 'Sensory curved silhouettes designed for expansive contemporary drawing rooms.',
    isFeatured: true,
  },
  {
    id: 'sofa-20',
    refCode: 'TS-LIV-20',
    category: 'sofas',
    subCategory: 'Wooden Frame Suites',
    title: 'Classic Spindle Back Artisan Sofa',
    image: '/images/sofas/sofa-design-20.png',
    imageWebp: '/images/sofas/sofa-design-20.webp',
    tag: 'Master Joinery',
    description: 'Artisanal turned wood spindles with high-density plush cushions and solid structure.',
    isFeatured: true,
  },
  {
    id: 'sofa-23',
    refCode: 'TS-LIV-23',
    category: 'sofas',
    subCategory: 'Modern Sectionals',
    title: 'Low Slung Earth-Tone Corner Suite',
    image: '/images/sofas/sofa-design-23.png',
    imageWebp: '/images/sofas/sofa-design-23.webp',
    tag: 'Bespoke Size',
    description: 'Generous proportioned seating with solid wood accents and relaxed modern silhouettes.',
    isFeatured: true,
  },
  {
    id: 'sofa-02',
    refCode: 'TS-LIV-02',
    category: 'sofas',
    subCategory: 'Wooden Frame Suites',
    title: 'Linear Solid Wood Settee & Armchair',
    image: '/images/sofas/sofa-design-02.png',
    imageWebp: '/images/sofas/sofa-design-02.webp',
    tag: 'Compact Living',
    description: 'Streamlined solid wood frame ideal for apartments, balconies, and study rooms.',
  },
  {
    id: 'sofa-06',
    refCode: 'TS-LIV-06',
    category: 'sofas',
    subCategory: 'Curved Architectural',
    title: 'Cocoon Curved Luxury Lounge Suite',
    image: '/images/sofas/sofa-design-06.png',
    imageWebp: '/images/sofas/sofa-design-06.webp',
    tag: 'Curved Design',
    description: 'Enveloping soft geometry balanced by organic wooden coffee tables.',
  },
  {
    id: 'sofa-10',
    refCode: 'TS-LIV-10',
    category: 'sofas',
    subCategory: 'Modern Sectionals',
    title: 'Architectural Box Frame Sofa',
    image: '/images/sofas/sofa-design-10.png',
    imageWebp: '/images/sofas/sofa-design-10.webp',
    tag: 'Minimalist',
    description: 'Precision angled timber framing paired with tailored high-resilience cushioning.',
  },
  {
    id: 'sofa-11',
    refCode: 'TS-LIV-11',
    category: 'sofas',
    subCategory: 'Wooden Frame Suites',
    title: 'Mid-Century Fluted Armchair & Sofa',
    image: '/images/sofas/sofa-design-11.png',
    imageWebp: '/images/sofas/sofa-design-11.webp',
    tag: 'Mid-Century',
    description: 'Elegantly sculpted wooden armrests with warm walnut polish finish.',
  },
  {
    id: 'sofa-15',
    refCode: 'TS-LIV-15',
    category: 'sofas',
    subCategory: 'Modern Sectionals',
    title: 'Fluted Wood Base Sectional Suite',
    image: '/images/sofas/sofa-design-15.png',
    imageWebp: '/images/sofas/sofa-design-15.webp',
    tag: 'Fluted Detail',
    description: 'Decorative fluted wooden platform elevating deep comfort modular seating.',
  },
  {
    id: 'sofa-40',
    refCode: 'TS-LIV-40',
    category: 'sofas',
    subCategory: 'Curved Architectural',
    title: 'Boutique Curved Ivory Sofa Suite',
    image: '/images/sofas/sofa-design-40.png',
    imageWebp: '/images/sofas/sofa-design-40.webp',
    tag: 'Editorial',
    description: 'Curved bouclé aesthetic accompanied by sculpted solid wood accent furniture.',
  },
  {
    id: 'sofa-43',
    refCode: 'TS-LIV-43',
    category: 'sofas',
    subCategory: 'Wooden Frame Suites',
    title: 'Artisan Solid Timber Living Suite',
    image: '/images/sofas/sofa-design-43.png',
    imageWebp: '/images/sofas/sofa-design-43.webp',
    tag: 'Master Craft',
    description: 'Showcase of authentic wood grain patterns and mortise-and-tenon aesthetics.',
  },
  ...generateExtraSofas()
];

export const BED_DESIGNS: FurnitureDesign[] = [
  {
    id: 'bed-10',
    refCode: 'TS-BED-10',
    category: 'beds',
    subCategory: 'Carved & Arched Headboards',
    title: 'Quad-Arch Turned Post Hardwood Bed',
    image: '/images/beds/bed-design-10.png',
    imageWebp: '/images/beds/bed-design-10.webp',
    tag: 'Showroom Masterpiece',
    description: 'Four monumental carved arches with chevron timber fluting, framed by architectural turned wooden finial posts.',
    isHeroCandidate: true,
    isFeatured: true,
  },
  {
    id: 'bed-05',
    refCode: 'TS-BED-05',
    category: 'beds',
    subCategory: 'Traditional Woodwork',
    title: 'Artisan Lattice Carved Pillar Bed',
    image: '/images/beds/bed-design-05.png',
    imageWebp: '/images/beds/bed-design-05.webp',
    tag: 'Solid Wood Craft',
    description: 'Substantial solid timber posts featuring intricate iron lattice panels and rich natural wood grain patina.',
    isFeatured: true,
  },
  {
    id: 'bed-08',
    refCode: 'TS-BED-08',
    category: 'beds',
    subCategory: 'Classic Wooden Beds',
    title: 'Contoured Wave Headboard Bed with Cabriole Legs',
    image: '/images/beds/bed-design-08.png',
    imageWebp: '/images/beds/bed-design-08.webp',
    tag: 'Classic Elegance',
    description: 'Sculptural wave crown motif on headboard complemented by curved cabriole timber legs.',
    isFeatured: true,
  },
  {
    id: 'bed-11',
    refCode: 'TS-BED-11',
    category: 'beds',
    subCategory: 'Carved & Arched Headboards',
    title: 'Grand Heritage Turned Post Bed Suite',
    image: '/images/beds/bed-design-11.png',
    imageWebp: '/images/beds/bed-design-11.webp',
    tag: 'Heritage Collection',
    description: 'Majestic dark timber headboard design matching bedside storage nightstands and ambient lighting.',
    isFeatured: true,
  },
  {
    id: 'bed-12',
    refCode: 'TS-BED-12',
    category: 'beds',
    subCategory: 'Modern Platform Beds',
    title: 'Minimalist Natural Grain Platform Bed',
    image: '/images/beds/bed-design-12.png',
    imageWebp: '/images/beds/bed-design-12.webp',
    tag: 'Natural Wood',
    description: 'Low-profile platform structure highlighting uninterrupted natural wood grain across the broad headboard.',
    isFeatured: true,
  },
  {
    id: 'bed-13',
    refCode: 'TS-BED-13',
    category: 'beds',
    subCategory: 'Classic Wooden Beds',
    title: 'Vertical Slat Hardwood Bed',
    image: '/images/beds/bed-design-13.png',
    imageWebp: '/images/beds/bed-design-13.webp',
    tag: 'Timeless Style',
    description: 'Clean architectural vertical wooden slats designed for enduring stability and airy aesthetics.',
    isFeatured: true,
  },
  {
    id: 'bed-14',
    refCode: 'TS-BED-14',
    category: 'beds',
    subCategory: 'Carved & Arched Headboards',
    title: 'Fluted Arch Panel Master Bed',
    image: '/images/beds/bed-design-14.png',
    imageWebp: '/images/beds/bed-design-14.webp',
    tag: 'Architectural',
    description: 'Contemporary fluting recessed into graceful arches, built in solid hardwood with custom polish options.',
    isFeatured: true,
  },
  {
    id: 'bed-18',
    refCode: 'TS-BED-18',
    category: 'beds',
    subCategory: 'Traditional Woodwork',
    title: 'Crafted Solid Wood Spindle Bed',
    image: '/images/beds/bed-design-18.png',
    imageWebp: '/images/beds/bed-design-18.webp',
    tag: 'Turned Wood',
    description: 'Delicately turned wood spindles on headboard and footboard, showcasing traditional carpentry finesse.',
    isFeatured: true,
  },
  {
    id: 'bed-23',
    refCode: 'TS-BED-23',
    category: 'beds',
    subCategory: 'Modern Platform Beds',
    title: 'Deep Tone Low Platform Bed',
    image: '/images/beds/bed-design-23.png',
    imageWebp: '/images/beds/bed-design-23.webp',
    tag: 'Modern Bedroom',
    description: 'Grounded Japanese-inspired low slung frame with integrated headboard ledge.',
  },
  {
    id: 'bed-47',
    refCode: 'TS-BED-47',
    category: 'beds',
    subCategory: 'Traditional Woodwork',
    title: 'Hand-Carved Heritage Bedstead',
    image: '/images/beds/bed-design-47.png',
    imageWebp: '/images/beds/bed-design-47.webp',
    tag: 'Artisan Wood',
    description: 'Rich hand-carved detailing that honors timeless Indian woodworking heritage.',
  },
  {
    id: 'bed-48',
    refCode: 'TS-BED-48',
    category: 'beds',
    subCategory: 'Classic Wooden Beds',
    title: 'Honey Oak Tone Box Frame Bed',
    image: '/images/beds/bed-design-48.png',
    imageWebp: '/images/beds/bed-design-48.webp',
    tag: 'Warm Honey Polish',
    description: 'Warm natural polish that brings out the vibrant grain swirls of seasoned hardwood.',
  },
  {
    id: 'bed-49',
    refCode: 'TS-BED-49',
    category: 'beds',
    subCategory: 'Modern Platform Beds',
    title: 'Linear Slatted Headboard Bed',
    image: '/images/beds/bed-design-49.png',
    imageWebp: '/images/beds/bed-design-49.webp',
    tag: 'Clean Minimal',
    description: 'Subtle slatted timber work with sturdy under-bed mattress support framework.',
  },
  ...generateExtraBeds()
];

export const ALL_DESIGNS: FurnitureDesign[] = [...SOFA_DESIGNS, ...BED_DESIGNS];

export const FEATURED_DESIGNS: FurnitureDesign[] = ALL_DESIGNS.filter(d => d.isFeatured);
